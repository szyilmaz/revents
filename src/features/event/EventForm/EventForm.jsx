import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

<<<<<<< HEAD
const emptyEvent = {
        title : '',
        date: '',
        city: '',
        venue: '',
        hostedBy: ''
  }

class EventForm extends Component {
    state = {
      event: emptyEvent
    }

  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState({
        event: this.props.selectedEvent
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    //console.log('current', this.props.selectedEvent);
    //console.log('next',nextProps.selectedEvent);
    if (nextProps.selectedEvent !== this.props.selectedEvent) {
        this.setState({
          event: nextProps.selectedEvent || emptyEvent
        })
    }
  }
  
  onFormSubmit = (evt) => {
    evt.preventDefault();
    //console.log(this.state.event);
    if (this.state.event.id) {
      this.props.updateEvent(this.state.event);
    }
    else {
      this.props.createEvent(this.state.event);
    }
   
  }

  onInputChange = (evt) => {
    const newEvent = this.state.event;
    newEvent[evt.target.name] = evt.target.value;
    this.setState({
        event: newEvent
    })
  }

  render() {
    const {handleCancel} = this.props;
    const {event} = this.state;
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input name='title' onChange={this.onInputChange} value={event.title} placeholder="Event Title" />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input name='date' onChange={this.onInputChange} value={event.date} type="date" placeholder="Event Date" />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input name='city' onChange={this.onInputChange} value={event.city} placeholder="City event is taking place" />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input name='venue' onChange={this.onInputChange} value={event.venue} placeholder="Enter the Venue of the event" />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input name='hostedBy' onChange={this.onInputChange} value={event.hostedBy} placeholder="Enter the name of person hosting" />
=======
class EventForm extends Component {
  render() {
    return (
      <Segment>
        <Form>
          <Form.Field>
            <label>Event Title</label>
            <input placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input type="date" placeholder="Event Date" />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input placeholder="City event is taking place" />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input placeholder="Enter the Venue of the event" />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input placeholder="Enter the name of person hosting" />
>>>>>>> a3716c2c4cbab08ae58f6731930bc7d77ac517ab
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
<<<<<<< HEAD
          <Button onClick={handleCancel} type="button">Cancel</Button>
=======
          <Button type="button">Cancel</Button>
>>>>>>> a3716c2c4cbab08ae58f6731930bc7d77ac517ab
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
