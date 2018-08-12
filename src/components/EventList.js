import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Event from "./Event";

class EventList extends Component {
  state = {
    events: []
  };

  async componentDidMount() {
    try {
      const results = await axios.get(
        "https://wrp.huwevansimages.co.uk/api/events"
      );
      this.setState({
        events: results.data.events
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <EventGrid>
        {this.state.events.map(event => <Event event={event} key={event.id} />)}
      </EventGrid>
    );
  }
}

export default EventList;

const EventGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
`;
