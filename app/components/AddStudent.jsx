import React, { Component } from 'react'
import axios from 'axios'

export default class AddStudent extends Component {
    constructor() {
        super();
        this.state = {
            studentName: "",
            studentCampus: ""

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        console.log('this.state', this.state);

    }


    render() {
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
                        <option value="campus1">Campus1</option>
                        <option value="campus2">Campus2</option>
                        <option value="campus3">Campus3</option>
                    </select>
                    
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="submit">Add Student</button>
                    </span>
                    
            </form>
        )
    }
}