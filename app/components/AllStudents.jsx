import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import AddStudent from "./AddStudent"

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
        const students = this.state.students;
        
        return (
            
            <div>
            <h1>Welcome to the All Students component</h1>
            <AddStudent />
            <ul>
            {students.map(student => {
                return (
                    <li className="student-item" key={student.id}>
                    <Link to={`/students/${student.id}`}>{student.name}</Link>
                    </li>)
            })}
            </ul>
            </div>
            
        )
    }
}


