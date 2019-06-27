import React, {Component} from 'react'
import logo from '../assets/images/logo.png'

class Logo extends Component{
    render() {
        return (
            <div>
                <img src={logo} alt="Logo" className="w-100 center"/>
            </div>
        );
    }
}

export default Logo