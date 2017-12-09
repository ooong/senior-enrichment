import React, { Component } from 'react'
import axios from 'axios'
import AllCampuses from './AllCampuses'

export default class AddCampus extends Component {
    constructor() {
        super();
        this.state = {
            campusName: "",
            imgUrl: "",
            campusDescription: "",
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

    handleSubmit(event) {
        event.preventDefault();
        axios.post('api/campuses', {
            name: this.state.campusName,
            imgUrl: this.state.imgUrl,
            description: this.state.description
        })
        this.setState({campusName: "", imgUrl: "", campusDescription: ""})
    }


    render() {

        const campuses = this.state.campuses
        console.log("campuses",campuses)

        return (

            <form id="new-campus-form" onSubmit={this.handleSubmit}>
                <h4>Add a new campus</h4>
                    <input
                        className="form-control"
                        type="text"
                        name="campusName"
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder="Campus name" />

                    <input
                        className="form-control"
                        type="text"
                        name="campusDescription"
                        value={this.state.description}
                        onChange={this.handleChange}
                        placeholder="Campus description" />

                    <input
                        className="form-control"
                        type="text"
                        name="imgUrl"
                        value={this.state.imgUrl}
                        onChange={this.handleChange}
                        placeholder="Img Url" />
               
                    
                    
                    
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="submit">Add Campus</button>
                    </span>
                    
            </form>
        )
    }
}