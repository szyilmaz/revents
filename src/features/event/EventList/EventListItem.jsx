import React, { Component } from "react";
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import EventListAttendee from  './EventListAttendee';

class EventListItem extends Component {
  render() {

<<<<<<< HEAD
    const {event, onEventOpen} = this.props;
=======
    const {event} = this.props;
>>>>>>> a3716c2c4cbab08ae58f6731930bc7d77ac517ab

    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image 
                    size="tiny" 
                    circular 
                    src={event.hostPhotoURL} />
              <Item.Content>
<<<<<<< HEAD
                <Item.Header as="a">{event.title}</Item.Header>
=======
                <Item.Header as="a">Event Title</Item.Header>
>>>>>>> a3716c2c4cbab08ae58f6731930bc7d77ac517ab
                <Item.Description>
                  Hosted by <a> {event.hostedBy}  </a> 
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {event.date} |
            <Icon name="marker" /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
<<<<<<< HEAD
          {event.attendees && event.attendees.map((attendee) => (
=======
          {event.attendees.map((attendee) => (
>>>>>>> a3716c2c4cbab08ae58f6731930bc7d77ac517ab
            <EventListAttendee key={attendee.id} attendee={attendee} />
          ))}
          </List>
        </Segment>
        <Segment clearing>
        <span>{event.description}</span>
<<<<<<< HEAD
          <Button onClick={onEventOpen(event)} as="a" color="teal" floated="right" content="View" />
=======
          <Button as="a" color="teal" floated="right" content="View" />
>>>>>>> a3716c2c4cbab08ae58f6731930bc7d77ac517ab
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;
