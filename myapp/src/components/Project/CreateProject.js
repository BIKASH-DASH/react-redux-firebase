import React, { Component } from 'react'
import {connect} from 'react-redux'
import { createProject} from '../../store/actions/projectActions'
class CreateProject extends Component {
    state = {
        title: '',
        description: ''
    }
    hendelChanges = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    hendelSubmit = (e) =>{
        e.preventDefault();
        this.props.createProject(this.state)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.hendelSubmit} className="white">
                    <h5 className="form-title grey-text text-darken-3">create Project</h5>
                    <div className="input-Field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.hendelChanges} />
                    </div>
                    <div className="input-Field">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" onChange={this.hendelChanges} cols="50" rows="20"></textarea>
                    </div>
                    <button type="submit" className="button pink text-lighten">Submit</button>
                </form>
                
            </div>
        )
    }
}
const mapDispatchProps = (dispatch)=>{
    return {
        createProject:(project)=>dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchProps)(CreateProject);