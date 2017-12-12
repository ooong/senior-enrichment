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
        this.addNewStudent = this.addNewStudent.bind(this);
    }


    componentDidMount() {
        axios.get('/api/students')
        .then(res => res.data)
        .then(students => this.setState( {students} ))
    }

    addNewStudent (student) {
        axios.post('/api/students', {
            firstName: student.firstName,
            lastName: student.lastName,
            email: student.email,
            gpa: student.gpa,
            if (studentCampus) {
                campusId: this.studentCampus.id
            }  
        })
        .then(res => res.data.student)
        .then(student => {
            this.setState({
                students: this.state.students.concat(student)
            })
        })
    }


    render () {
        const students = this.state.students;
        
        return (
            
            <div>
            <h1>Welcome to the All Students component</h1>
            <AddStudent addNewStudent={this.addNewStudent}/>
            <ul>
            {students.map(student => {
                return (
                    <li className="student-item" key={student.id}>
                    <Link to={`/students/${student.id}`}>{student.name}</Link>
                    <button>DELETE</button>
                    </li>)
            })}
            </ul>
            </div>
            
        )
    }
}


