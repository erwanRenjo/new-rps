import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import '../assets/styles/navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <ul className="navbar-links_container">
                        <Link to="/" className="navbar-links text-link">HOME</Link>

                        {
                            this.props.userGlobal.username ?
                            <li className="navbar-links">HELLO{this.props.userGlobal.username}</li> :
                            this.props.userGlobal.user_Auth === 'admin' ?
                            <Link to='/admin' className="navbar-links text-link">ADMIN</Link> :
                            <li className="navbar-links">Please Register</li> 
                        }
                        
                        <Link to='/' className="navbar-links text-link">CONTACT</Link>
                        <Link to='/' className="navbar-links text-link">ABOUT</Link>
                    </ul>
                    <ul className="navbar-links_container">
                        <Link to='/login' className="navbar-links text-link">LOGIN</Link>
                        <Link to='/register' className="navbar-links text-link">SIGN UP</Link>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        userGlobal: state.user,
    }
};

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps)(Navbar)
