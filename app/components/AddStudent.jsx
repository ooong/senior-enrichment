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
        if (event.target.name === "studentName") {
            this.setState({studentName: event.target.value})
        }
        if (event.target.name === "studentCampus") {
            this.setState({studentCampus: event.target.value})
        }
    }

    handleSubmit(event) {
        // save this.state.value to the database as a new student
        event.preventDefault();
        // axios.post('api/students', {
        //     firstName: 
        // })

    }


    render() {

        const campuses = this.state.campuses
        console.log("campuses",campuses)

        return (

            <form id="new-student-form" onSubmit={this.handleSubmit}>
                
                    <input
                        className="form-control"
                        type="text"
                        name="studentName"
                        value={this.state.studentName}
                        onChange={this.handleChange}
                        placeholder="Student Name" />
               
                    
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