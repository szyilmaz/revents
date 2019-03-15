import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import EventDashBoard from '../../features/event/EventDashboard/EventDashBoard'
import NavBar from '../../features/nav/NavBar/NavBar'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="main">
          <EventDashBoard />
        </Container>
      </div>

    );
  }
}

export default App;
