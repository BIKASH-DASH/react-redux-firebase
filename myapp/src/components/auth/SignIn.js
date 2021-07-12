import React, { Component } from 'react'

export default class SignIn extends Component {
    state ={
            email: '',
            password: ''
    }
    hendelChanges = (e) =>{
        this.setState({
            [e.target.id] :e.target.value
        })
    }
    hendelSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container ">
                <form onSubmit={this.hendelSubmit} action="" className="white">
                    <h5 className="gray-text text-darken-3">Sign In</h5>
                    <div className="input-Field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.hendelChanges}/>
                    </div>
                    <div className="input-Field">
                        <label htmlFor="email">Password</label>
                        <input type="password" id="password" onChange={this.hendelChanges} />
                    </div>

                    <div className="input-Field">
                        <button className="pink lighten-3">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
