import React, { Component } from 'react'
import Notification from './Notification'
import ProjectList from '../Project/ProjectList'
export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container" >
                <div className="row">
                    <div className="col s12 m6 l6">
                        <ProjectList/>
                    </div>
                    <div className="col s12 m5 l6  offset-m1">
                        <Notification/>
                    </div>
                </div>
            </div>
        )
    }
}
