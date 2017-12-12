import React, { Component} from 'react'
import axios from 'axios'
import AllStudents from './AllStudents'
import { Link } from 'react-router-dom'
import EditCampus from './EditCampus'


export default class SingleCampus extends Component {
    constructor () {
        super ();
        this.state = {
            campus: {},
            students: []
        }
        this.fetchCampus = this.fetchCampus.bind(this);
        this.fetchStudents = this.fetchStudents.bind(this);
    }

    fetchCampus (campusId) {
        axios.get(`/api/campuses/${campusId}`)
        .then(res => res.data)
        .then(campus => this.setState({ campus }))
    }

    fetchStudents () {
        axios.get('/api/students/')
        .then(res => res.data)
        .then(students => this.setState({ students }))
    }


    componentDidMount () {
        const campusId = this.props.match.params.campusId;
        this.fetchCampus(campusId)
        this.fetchStudents();
    }


    render () {
        const campus = this.state.campus;
        const students = this.state.students && this.state.students.filter(student => student.campusId === this.state.campus.id)

        return (
            <div>
            <h1>Welcome to the Single Campus Component</h1>
                <h2>CampusName: {campus.name}</h2>
                <h3>CampusId: {campus.id}</h3>
                <img src= {campus.imgUrl} />
                <h3>CampusDescription: {campus.description}</h3>
                <h3>Students:</h3>
                <ul>
                {
                    students.map(student => {
                        return (
                            <li className="student-item" key={student.id}>
                            <Link to={`/students/${student.id}`}>{student.name}</Link>
                            <button onClick={this.handleClick}>DELETE STUDENT</button>
                            </li>)
                    }) 
                }
                </ul>
                <EditCampus campus={this.state.campus}/>
            </div>
        )
    }
}