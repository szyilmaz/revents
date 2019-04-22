import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import { deleteEvent} from '../eventActions';

const mapState = (state) => ({
  events: state.events
})

const actions = {
  deleteEvent
}

class EventDashBoard extends Component {

  handleDeleteEvent = (eventId) => () => {
    this.props.deleteEvent(eventId);
  };

  render() {
    const {events} = this.props;
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList 
                deleteEvent={this.handleDeleteEvent} 
                events={events}/>
            </Grid.Column>
            <Grid.Column width={6}>
               
            </Grid.Column>
        </Grid>
    )
  };
}

export default connect(mapState, actions)(EventDashBoard);


// render() {
//   return (
//       <Grid>
//           <Grid.Column width={10}>
//               <EventList events={this.state.events}/>
//           </Grid.Column>
//           <Grid.Column width={6}>
//               <Button onClick={this.handleFormOpen('a string')} positive content='Create Event'></Button>
//                {  this.state.isOpen && 
//                <EventForm handleCancel={this.handleCancel}/> }
//           </Grid.Column>
//       </Grid>
//   )
// }

