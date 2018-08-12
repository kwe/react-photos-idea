import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Event = ({ event }) => (
  <Link to={`/events/${event.id}`}>
    <Poster src={event.posterUri} alt={event.title} />
  </Link>
);

export default Event;

const Poster = styled.img`
  box-shadow: 0 0 35px black;
`;
