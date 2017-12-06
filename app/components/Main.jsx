import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios'
import AllCampuses from './AllCampuses'
import Navbar from './Navbar'
import AllStudents from './AllStudents'





export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            students: []
        }
    }



    render() {
        return (

            <div>
                <Navbar />
                <h2>Welcome to the main component</h2>
                <main>
                    <Switch>
                        <Route path="/campuses/:campusId" component={AllStudents}/>
                    </Switch>
                </main>
                <AllCampuses />
            </div>

        )
    }
}