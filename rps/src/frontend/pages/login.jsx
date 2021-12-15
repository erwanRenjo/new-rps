import React from 'react'
import '../assets/styles/registerPage.css'
import { confirmLog } from "../redux/actions/user";  
import { connect } from 'react-redux'

class Login extends React.Component {

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
                <header>Login</header>
                <form>
                    <div class="input-group">
                        <input type="text" name="username" className="form-control" placeholder="Please input your username" onChange={this.inputHandler}/>
                    </div>

                    <div class="input-group">
                        <input type="password" name="password" className="form-control" placeholder="Please input your password" onChange={this.inputHandler}/>
                    </div>
                </form>
                <button onClick={()=>{this.props.confirLog()}} className="btn-light">Login Now</button>
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
    confirmLog,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
