import React, { Component } from 'react'
import axios from 'axios'
import SingleCampus from './SingleCampus'

export default class EditCampus extends Component {
    constructor() {
        super();
        this.state = {
            campusName: "",
            imgUrl: "",
            description: "",
            campus: {}
        }
       
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    // fetchCampus (campusId) {
    //     axios.get(`/api/campuses/${campusId}`)
    //     .then(res => res.data)
    //     .then(campus => this.setState({ campus }))
    // }

    componentDidMount () {
        // console.log("this.props", this.props)
        // this.setState({campus: this.props.campus})

    }

    componentWillReceiveProps (nextProps) {
        this.setState({campus: nextProps.campus})
        console.log("willreceiveprops: this.state", this.state)
    }


    handleChange(event) {
        if (event.target.name === "campusName") {
            this.setState({campusName: event.target.value})

        }
        if (event.target.name === "campusDescription") {
            this.setState({description: event.target.value})
        }
        if (event.target.name === "imgUrl") {
            this.setState({imgUrl: event.target.value})
        }
    }

    handleSubmit(event) {
        // save the edits to the new campus
        console.log("handle submit nextProps", nextProps)
        event.preventDefault();
        axios.put(`/api/campuses/${campusId}`, {
            name: this.state.campusName,
            imgUrl: this.state.imgUrl,
            description: this.state.description
        })


    }

    handleClick(event) {
        event.preventDefault();
        console.log(event);
        axios.delete(`/api/campuses/${this.state.campus.id}`)
        alert('campus deleted!');

    }



    render() {
        console.log("this.state", this.state)
        const campus = this.state.campus

        return (

            <form action="/campuses" id="edit-campus-form" onSubmit={this.handleSubmit}>
                <h4>Edit this campus</h4>
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
                        <button className="btn btn-default" type="submit">Save changes to Campus</button>
                    </span>
                    <div className="input-group-btn">
                    <button onClick={this.handleClick} className="btn btn-default" type="submit">Delete this campus!</button>
                </div>
                    
            </form>
        )
    }
}