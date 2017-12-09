import React, { Component} from 'react'
import axios from 'axios'
import AllStudents from './AllStudents'
import { Link } from 'react-router-dom'
import EditCampus from './EditCampus'


export default class SingleCampus extends Component {
    constructor () {
        super ();
        this.state = {
            campus: {}
        }
        this.fetchCampus = this.fetchCampus.bind(this);
    }

    fetchCampus (campusId) {
        axios.get(`/api/campuses/${campusId}`)
        .then(res => res.data)
        .then(campus => this.setState({ campus }))
    }


    componentDidMount () {
        const campusId = this.props.match.params.campusId;
        this.fetchCampus(campusId)

    }


    componentWillReceiveProps (nextProps) {
        const campus = nextProps.match.params.campusId
        this.setState({ campus })
    }

    render () {
        const campus = this.state.campus;
        return (
            <div>
            <h1>Welcome to the Single Campus Component</h1>
                <h2>CampusName: {campus.name}</h2>
                <h3>CampusId: {campus.id}</h3>
                <h3>CampusDescription: {campus.description}</h3>
                <h3>Students:</h3>
                <ul>
                    <li>placeholder student 1</li>
                    <li>placeholder student 2</li>
                    <li>placeholder student 3</li>
                </ul>
                <EditCampus campus={this.state.campus}/>
            </div>
        )
    }
}