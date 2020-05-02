import React, { Component } from "react";
import './Header.css'
class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            isLogin:true
        }
    }
    componentWillReceiveProps(nextProps){
        const {isLogin} = nextProps;
        this.setState({isLogin});
    }
    render() {
        const {isLogin} = this.state;
        return (
            <div className = 'Header'>
                <button 
                    className = {`${isLogin?'':'active'}`}
                    onClick={()=>(this.props.onClick("SignUp"))}>
                    Sign Up
                </button>
                <button
                     className = {`${isLogin?'active':''}`}
                     onClick={()=>this.props.onClick("LogIn")}>
                     Log In
                </button>
            </div>
        )
    }
}
export default Header;