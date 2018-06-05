import React, { Component } from 'react';
import { Container, TabPane, Table, Button, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import SPA from './../../services/spa';

class Fixture extends Component{
  
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    SPA.getFixtures()
    .then(fixtures =>  console.log('-----', fixtures))
    // console.log('-----', fixtures);
  }
  
  render() {
    const { tabId } = this.props;
    return (
      <TabPane tabId={tabId}>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </TabPane>
    );
  }
}

export default Fixture;
