import React, { Component } from 'react';
import './scss/App.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Votepanel from './components/Votepanel';
class App extends Component {
  render() {
    return (
      <Grid fluid>
       <div>
         <Row center="xs">
           <Col xs={12} sm={8} md={6}>
            <Votepanel/>
           </Col>
         </Row>
       </div>
       </Grid>
    );
  }
}

export default App;
