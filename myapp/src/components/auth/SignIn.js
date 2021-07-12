import React, { Component } from 'react'

export default class SignIn extends Component {
    state ={
            email: '',
            password: ''
    }
    hendelSubmit = ()=>{}
    render() {
        return (
            <div className="container ">
                <form onSubmit={hendelSubmit()} action="" className="white">
                    <h5 className="gray-text text-darken-3">Sign In s</h5>
                    <div className="input-Field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={(e) => this.state.email}/>
                    </div>
                    <div className="input-Field">
                        <label htmlFor="email">Password</label>
                        <input type="password" id="password" onChange={(e) => this.state.password} />
                    </div>

                    <div className="input-Field">
                        <button className="pink lighten-3">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
