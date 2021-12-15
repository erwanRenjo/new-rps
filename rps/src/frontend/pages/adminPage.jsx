import React, { Component } from 'react'
import { connect } from 'react-redux'

class adminPage extends Component {
    render() {
        return (
        <div class="d-flex justify-content-around">

            <form action="/deleteUser" method="POST">
                <header>Delete User</header>
                <div class="input-group input-group-sm mb-3">
                    <input type="text" id="userGameId" name="userGameId" class="form-control" placeholder="Please input user game id"/>
                </div>
    
                <button type="submit" value="Delete" class="btn-light btnReg">Delete</button>
            </form>
    
            <form action="/updateUser" method="POST">
                <header>Change Username</header>
                <div class="input-group input-group-sm mb-3">
                    <input type="text" id="userGameId" name="userGameId" class="form-control" placeholder="Please input user game id"/>
                </div>
                <div class="input-group input-group-sm mb-3">
                    <input type="text" id="username" name="username" class="form-control" placeholder="Please input new username"/>
                </div>
                <button type="submit" value="Login" class="btn-light btnReg">Update</button>
            </form>
    
        </div>
        )
    }
}


export default adminPage
