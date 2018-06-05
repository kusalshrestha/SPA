import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Button, Container } from 'reactstrap';

class Login extends Component{

  _onClick = () => {
    this.props.history.push('/dashboard')
  }

  render() {
    return (
      <div className="app">
        <Button color="danger" onClick={this._onClick}>Login!</Button>
      </div>
    );
  }
}

export default withRouter(Login);
