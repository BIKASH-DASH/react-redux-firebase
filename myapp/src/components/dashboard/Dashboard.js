import React, { Component } from 'react'
import Notification from './Notification'
import ProjectList from '../Project/ProjectList'
import {connect} from 'react-redux'
class Dashboard extends Component {
    render() {
       // console.log(this.props);

        const { projects} = this.props;

        return (
            <div className="dashboard container" >
                <div className="row">
                    <div className="col s12 m6 l6">
                        <ProjectList projects={{projects}}/>
                    </div>
                    <div className="col s12 m5 l6  offset-m1">
                        <Notification/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        projects: state.project.projects
    }
}
export default connect(mapStateToProps)(Dashboard)
