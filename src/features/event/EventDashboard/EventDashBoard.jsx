import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'
<<<<<<< HEAD
import cuid from 'cuid'
=======
>>>>>>> a3716c2c4cbab08ae58f6731930bc7d77ac517ab
import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'

const eventsDashboard = [
  {
    id: '1',
    title: 'Trip to Tower of London',
<<<<<<< HEAD
    date: '2018-03-27',
=======
    date: '2018-03-27T11:00:00+00:00',
>>>>>>> a3716c2c4cbab08ae58f6731930bc7d77ac517ab
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
<<<<<<< HEAD
    date: '2018-03-28',
=======
    date: '2018-03-28T14:00:00+00:00',
>>>>>>> a3716c2c4cbab08ae58f6731930bc7d77ac517ab
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
]


class EventDashBoard extends Component {
<<<<<<< HEAD

 state = {
      events: eventsDashboard,
      isOpen: false,
      selectedEvent: null
    }

    //this.handleFormOpen = this.handleFormOpen.bind(this);
    //this.handleCancel = this.handleCancel.bind(this);

  // handleFormOpen = (thing) => () => {
  //   console.log(thing);
  //   this.setState({
  //     isOpen: true
  //   })
  // }

  handleFormOpen = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true
    })
  }

  handleCancel = () =>  {
    this.setState({
      isOpen: false
    })
  }

  handleUpdateEvent = (updatedEvent) => {
    this.setState({
      events: this.state.events.map(event => {
        if(event.id === updatedEvent.id){
          return Object.assign ({}, updatedEvent);
        } else {
          return event;
        }
      }),
      isOpen: false,
      selectedEvent: null
    })
  }

  handleOpenEvent = (eventToOpen) => () =>{
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true
    }) 
  }

  handleCreateEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = '/assets/user.png';
    const updatedevents = [...this.state.events, newEvent];
    this.setState({
      events: updatedevents,
      isOpen: false
    })
  }

  render() {
    const {selectedEvent} = this.state;
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList onEventOpen={this.handleOpenEvent} events={this.state.events}/>
            </Grid.Column>
            <Grid.Column width={6}>
                <Button onClick={this.handleFormOpen} positive content='Create Event'></Button>
                 {  this.state.isOpen && 
                 <EventForm updateEvent={this.handleUpdateEvent} selectedEvent={selectedEvent} createEvent={this.handleCreateEvent} handleCancel={this.handleCancel}/> }
=======
  render() {
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={eventsDashboard}/>
            </Grid.Column>
            <Grid.Column width={6}>
                <Button positive content='Create Event'></Button>
                <EventForm/>
>>>>>>> a3716c2c4cbab08ae58f6731930bc7d77ac517ab
            </Grid.Column>
        </Grid>
    )
  }
}

<<<<<<< HEAD
export default EventDashBoard


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

=======
export default EventDashBoard
>>>>>>> a3716c2c4cbab08ae58f6731930bc7d77ac517ab
