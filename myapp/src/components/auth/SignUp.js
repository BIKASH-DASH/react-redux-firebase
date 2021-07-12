import React, { Component } from 'react'

export default class SignUp extends Component {
    state = {
        firstName:'',
        lastName:'',
        email:'',
        password:'',
    }
    hendelChanges = (e) =>{
        this.setState({ 
            [e.target.id]: e.target.value
        })
    }
    hendelSubmit  = (e) =>{
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="SignUp container">
                    <div className="row">
                        <div className="col12">
                        <form onSubmit={this.hendelSubmit} className="white">
                                <h5 className="form-title grey-text text-darken-3">Signup Form</h5>
                            <div className="input-Field">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" id="firstName" onChange={this.hendelChanges} />
                            </div>

                            <div className="input-Field">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" id="lastName" onChange={this.hendelChanges} />
                            </div>

                            <div className="input-Field">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" onChange={this.hendelChanges} />
                            </div>
                            <div className="input-Field">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" onChange={this.hendelChanges} />
                            </div>

                            <div className="input-Field">
                                <button className="pink lighten-3">Submit</button>
                            </div>

                            </form>
                        </div>
                    </div>
            </div>
        )
    }
}
