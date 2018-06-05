import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Container, TabContent, TabPane, Nav, Navbar, NavItem, NavbarBrand, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import NavBar from './../../components/navbar';
import Users from './../../components/users';
import Fixtures from './../../components/fixtures';
import Predictions from './../../components/predictions';

class Dashboard extends Component{
  
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  _onLogout = () => {
    this.props.history.push('/login')
  }
  
  render() {
    return (
      <div>
        <NavBar
          title='SPA Dashboard'
          onLogout={this._onLogout}
        />
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Users
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Fixtures
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Predictions
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <Users tabId='1' />
          <Fixtures tabId='2' />
          <Predictions tabId='3' />
        </TabContent>
      </div>
    );
  }
}

export default withRouter(Dashboard);
