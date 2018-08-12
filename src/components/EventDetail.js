import React, { Component } from "react";
import Photo from "./Photo";

class EventDetail extends Component {
  state = {
    event: {},
    photos: []
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://wrp.huwevansimages.co.uk/api/events/${
          this.props.match.params.id
        }`
      );
      const event = await res.json();
      this.setState({
        event: event,
        photos: event.photos
      });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    const { event } = this.state;
    return (
      <div>
        <h1>{event.title}</h1>
        <h2>{event.summary}</h2>
        {this.state.photos.map(photo => <Photo photo={photo} key={photo.id} />)}
      </div>
    );
  }
}

export default EventDetail;
