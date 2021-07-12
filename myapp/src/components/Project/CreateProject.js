import React, { Component } from 'react'

export default class CreateProject extends Component {
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
        console.log(this.state);
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
                    <button className="pink text-lighten">Submit</button>
                </form>
                
            </div>
        )
    }
}
