import React, { Component } from 'react'
import EventListItem from './EventListItem'

class EventList extends Component {
  render() {

<<<<<<< HEAD
    const {events, onEventOpen} = this.props;
=======
    const {events} = this.props;
>>>>>>> a3716c2c4cbab08ae58f6731930bc7d77ac517ab

    return (
      <div>
        <h1>Event List</h1>
        {events.map((event) => (
<<<<<<< HEAD
          <EventListItem key={event.id} event={event} onEventOpen={onEventOpen}/>
=======
          <EventListItem key={event.id} event={event}/>
>>>>>>> a3716c2c4cbab08ae58f6731930bc7d77ac517ab
        ))}
      </div>
    )
  }
}

export default EventList