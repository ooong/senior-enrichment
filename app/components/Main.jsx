import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios'
import AllCampuses from './AllCampuses'
import Navbar from './Navbar'
import AllStudents from './AllStudents'
import SingleStudent from './SingleStudent';
import SingleCampus from './SingleCampus';





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
                <main>
                    <Switch>
                        <Route exact path="/campuses" component={AllCampuses}/>
                        <Route path="/campuses/:campusId" component={SingleCampus}/>
                        <Route exact path="/students" component={AllStudents}/>
                        <Route path="/students/:studentId" component={SingleStudent}/>
                        <Redirect to="/campuses" />
                    </Switch>
                </main>
            </div>

        )
    }
}