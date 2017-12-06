import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class AllCampuses extends Component {
    constructor () {
        super ();
        this.state = {
            campuses: []
        }
    }



    componentDidMount() {
        axios.get('/api/campuses')
        .then(res => res.data)
        .then(campuses => this.setState( {campuses} ))
    }


    render () {

        const campuses = this.state.campuses

        return (
            
            <div>
            {campuses.map(campus => {
                return (
                    <div className="campus-item" key={campus.id}>
                    <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
                    </div>
                )
            })}
            </div>
            
        )
    }
}

