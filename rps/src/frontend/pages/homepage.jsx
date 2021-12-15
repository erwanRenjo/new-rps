import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/homepage.css'

class Home extends React.Component {

    state = {
        user: ""
    }

    render() {

        return (
        <div className="homepage">
            <div className="homepage-title">PLAY TRADITIONAL GAME</div>
            <div className="homepage-title">Experience new traditional gameplay</div>
            <div className="homepage-action">
            { 
                this.state.user ? 
                <button className="btn btn-warning"><Link to="/">PLAY NOW</Link></button> 
                :
                <button className="btn btn-warning"><Link to="/register" className="text-link">REGISTER NOW</Link></button>
            }
            </div>

            <div className="homepage-title">
                <p>The story</p>
            </div>
        </div>
        )
    }
}


export default Home

