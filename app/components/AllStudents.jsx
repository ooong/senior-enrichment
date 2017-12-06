import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class AllStudents extends Component {
    constructor () {
        super ();
        this.state = {
            students: []
        }
    }



    componentDidMount() {
        axios.get('/api/students')
        .then(res => res.data)
        .then(students => this.setState( {students} ))
    }


    render () {

        const campusId = Number(this.props.match.params.campusId)
        const students = this.state.students
        const filteredStudents = students.filter(student => student.campusId === campusId)

        return (
            
            <div>
            {students.map(student => {
                return (
                    <div className="student-item" key={student.id}>
                    <Link to={`/students/${student.id}`}>{student.name}</Link>
                    </div>
                )
            })}
            </div>
            
        )
    }
}
