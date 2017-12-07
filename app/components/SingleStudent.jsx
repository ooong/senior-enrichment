import React, { Component} from 'react'
import axios from 'axios'




export default class SingleStudent extends Component {
    constructor () {
        super ();
        this.state = {
            student: {}
        }
    }

    fetchStudent (studentId) {
        axios.get(`/api/students/${studentId}`)
        .then(res => res.data)
        .then(student => this.setState({ student }))
    }


    componentDidMount () {
        const studentId = this.props.match.params.studentId;
        this.fetchStudent(studentId)

    }


    componentWillReceiveProps (nextProps) {
        const student = nextProps.match.params.studentId
        this.setState({student: student})
    }

    render () {
        const student = this.state.student;
        return (
            <div>
            <h1>Welcome to the Single Student Component</h1>
                <h2>StudentName: {student.name}</h2>
                <h3>StudentId: {student.id}</h3>
                <h3>StudentEmail: {student.email}</h3>
                <h3>StudentCampus: {student.campusId}</h3>
            
            </div>
        )
    }
}