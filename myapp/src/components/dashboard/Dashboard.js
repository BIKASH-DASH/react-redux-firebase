import React, { Component } from 'react'
import Notification from './Notification'
import ProjectList from '../Project/ProjectList'
export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container" >
                <div className="row">
                    <div className="cal s12 m6">
                        <ProjectList/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notification/>
                    </div>
                </div>
            </div>
        )
    }
}
