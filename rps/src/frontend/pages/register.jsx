import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../assets/styles/registerPage.css'
import { confirmReg } from "../redux/actions/user";  

class Register extends Component {
    state = {
        username: "",
        email: "",
        password: "",
    }

    inputHandler = (event) =>{
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value })
        console.log(this.state)
    }

    render() {
        return (
            <div className="container-fluid">
                <header>Register</header>
                <div className="form-group">
                    <div class="input-group">
                        <input type="text" name="username" className="form-control" placeholder="Please input username" onChange={this.inputHandler}/>
                    </div>
                    <div class="input-group">
                        <input type="email" name="email" className="form-control" placeholder="Please input your email" onChange={this.inputHandler}/>
                    </div>
                    <div class="input-group">
                        <input type="password" name="password" className="form-control" placeholder="Please input password" onChange={this.inputHandler}/>
                    </div>
                    <button onClick={()=>{this.props.confirmReg()}} className="btn-light">Register Now</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userGlobal: state.user,
    }
}

const mapDispatchToProps = {
    confirmReg,
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
