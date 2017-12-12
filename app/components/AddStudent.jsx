import React, { Component } from 'react'
import axios from 'axios'
import AllCampuses from './AllCampuses'

export default class AddStudent extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            gpa: 0,
            studentCampus: {},
            campuses: []
        }
       
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount () {
        axios.get('/api/campuses')
        .then(res => res.data)
        .then(campuses => this.setState({ campuses }))
    }


    handleChange(event) {

        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit (event) {
        event.preventDefault();
        const student = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            gpa: this.state.gpa,
        }
        this.props.addNewStudent(student);
        this.setState({firstName: '', lastName: '', email: '', gpa: 0})
    }

    render() {

        const campuses = this.state.campuses

        return (

            <form id="new-student-form" onSubmit={this.handleSubmit}>
                
                    <input
                        className="form-control"
                        type="text"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        placeholder="Student First Name" />

                    <input
                        className="form-control"
                        type="text"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        placeholder="Student Last Name" />

                    <input
                        className="form-control"
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="Student Email" />

                    <input
                        className="form-control"
                        type="text"
                        name="gpa"
                        value={this.state.gpa}
                        onChange={this.handleChange}
                        placeholder="Student gpa" />
               
                    
                    <select 
                        name="studentCampus" 
                        value={this.state.studentCampus}
                        onChange={this.handleChange}
                        >
                        {campuses.map(campus => {
                            return (
                                <option className="campus-option" key={campus.id}>
                                {campus.name}
                                </option>)
                        })}
                    </select>
                    
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="submit">Add Student</button>
                    </span>
                    
            </form>
        )
    }
}