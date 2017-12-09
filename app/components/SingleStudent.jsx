import React, { Component} from 'react'
import axios from 'axios'
import AllCampuses from './AllCampuses'
import SingleCampus from './SingleCampus'
import { Link } from 'react-router-dom'




export default class SingleStudent extends Component {
    constructor () {
        super ();
        this.state = {
            student: {}
        }
        this.fetchStudent = this.fetchStudent.bind(this);
    }

    fetchStudent (studentId) {
        axios.get(`/api/students/${studentId}`)
        .then(res => res.data)
        .then(student => this.setState({ student }, () => {
        }))
    }


    componentDidMount () {
        const studentId = this.props.match.params.studentId;
        this.fetchStudent(studentId)

    }


    // componentWillReceiveProps (nextProps) {
    //     const student = nextProps.match.params.studentId
    //     this.setState({student: student})
    // }

    render () {
        const student = this.state.student;
        // const campusName = student.campus && student.campus.name
        const campus = student.campus || [];
        
        return (
            <div>
            <h1>Welcome to the Single Student Component</h1>
                <h2>Name: {student.name}</h2>
                <h3>Id: {student.id}</h3>
                <h3>Email: {student.email}</h3>
                <h3>GPA: {student.gpa}</h3>
                <h3>Campus: 
                <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
                </h3>
            </div>
        )
    }
}