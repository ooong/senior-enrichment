import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import AddCampus from './AddCampus'

export default class AllCampuses extends Component {
    constructor() {
        super();
        this.state = {
            campuses: []
        }
        this.addNewCampus = this.addNewCampus.bind(this);
    }



    componentDidMount() {
        axios.get('/api/campuses')
            .then(res => res.data)
            .then(campuses => this.setState({ campuses }))
    }

    addNewCampus (campus) {
        axios.post('/api/campuses', {
            name: campus.name,
            imgUrl: campus.imgUrl,
            description: campus.description,
        })
        .then(res => res.data.campus)
        .then(campus => {
            console.log('campus!!', campus)
            this.setState({
                campuses: this.state.campuses.concat(campus)
            })
        })
    }


    render() {

        const campuses = this.state.campuses

        return (

            <div>
                <h1>Welcome to the All Campuses component</h1>
                <div className="wrapper">

                    {campuses.map(campus => {
                        return (
                            <div className="campus-item" key={campus.id}>
                                <Link to={`/campuses/${campus.id}`}>
                                    <img src={campus.imgUrl} />
                                    {campus.name}</Link>
                            </div>
                        )
                    })}

                </div>
                <AddCampus addNewCampus={this.addNewCampus}/>
            </div>

        )
    }
}

