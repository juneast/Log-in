import React, { Component } from 'react';
import './Section.css';
import { Header, Signup, Login } from '../index';

class Section extends Component {
    constructor(props){
        super();
        this.state = {
            isLogin :true,
        };
    }
    buttonClickHandler = (buttonType)=>{
        
        const {isLogin} = this.state;
        
        if(buttonType==="LogIn" && !isLogin){
            this.setState({isLogin : true});
            
        } else if (buttonType==="SignUp" && isLogin){
            this.setState({isLogin : false});
        }
    }
    render() {
        const {isLogin} = this.state;
        return (
            <div className='Section'>
                <Header isLogin={isLogin} onClick = {this.buttonClickHandler}/>
                {isLogin ? <Login/> : <Signup/>}
            </div>
        );
    }
}


export default Section;