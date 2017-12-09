import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import AddCampus from './AddCampus'

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
            <h1>Welcome to the All Campuses component</h1>
            <ul>
            {campuses.map(campus => {
                return (
                    <li className="campus-item" key={campus.id}>
                    <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
                    </li>
                )
            })}
            </ul>
            <AddCampus />
            </div>
            
        )
    }
}

