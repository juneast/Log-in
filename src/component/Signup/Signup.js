import React, { Component } from 'react'
import './Signup.css'

class Signup extends Component {
    constructor(props) {
        super();
        this.state = {
            fadeIn: false
        }
    }
    componentWillUpdate() {
        this.setState({ fadeIn: true });
        setTimeout(() => (
            this.setState({ fadeIn: false })
        ), 100);
    }

    render() {
        const { fadeIn } = this.state;
        return (
            <div className={`Signup ${fadeIn? '':'fadeIn'} animated`}>

                <form action="#">
                    <span className="Signup__title">Sign Up for Free</span>
                    <div className="Signup__name">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                    </div>
                    <input className="Signup__email" type="text" placeholder="Email Address" />
                    <input className="Signup__password" type="password" placeholder="Set A Pasword" />
                    <button>GET STARTED</button>
                </form>
            </div>
        );
    }
}

export default Signup;