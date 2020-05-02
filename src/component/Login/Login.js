import React, { Component } from 'react';
import './Login.css'

class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            fadeIn : false
        }
    }
    componentWillUpdate(){
        this.setState({fadeIn:true});
        setTimeout( () => (
            this.setState({fadeIn:false})
        ),100);
    }
        
    render() {
        const {fadeIn} = this.state;
        return (
            <div className={`Login ${fadeIn? '':'fadeIn'} animated`}>
                <form action="">
                    <span className="Login__title">Welcome Back!!</span>
                    <input type="text" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                    <button>LOG IN</button>
                </form>
            </div>
        );
    }
}

export default Login;