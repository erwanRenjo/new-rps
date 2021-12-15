import React from 'react';
import './App.css'
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { connect } from "react-redux";

import Home from "./frontend/pages/homepage";
import Admin from "./frontend/pages/adminPage";
import Login from "./frontend/pages/login";
import Register from "./frontend/pages/register";
import Navbar from './frontend/components/navbar'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app-bg">
          <Navbar />
          <Switch>
          <Route component={Admin} path="/admin" />
            <Route component={Register} path="/register" />
            <Route component={Login} path="/login" />
            <Route component={Home} path="/" />
          </Switch>
        </div>
      </BrowserRouter>
      )}
  }

  const mapStateToProps = (state) => {
    return {
      userGlobal: state.user,
    };
  };
  
  export default connect(mapStateToProps)(App);
