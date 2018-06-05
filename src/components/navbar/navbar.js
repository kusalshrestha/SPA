import React, { Component } from 'react';
import { Container, TabContent, TabPane, Nav, Navbar, NavItem, NavbarBrand, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

class NavBar extends Component{
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Container>
            <Row>
              <Col>
              <NavbarBrand href="/">{ this.props.title }</NavbarBrand>
              </Col>
              <Col>
              <Button color="danger" onClick={this._onClick}>Logout</Button>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
