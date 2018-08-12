import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Photo = ({ photo }) => (
  <Thumb src={photo.pictureURI} alt={photo.caption} />
);

export default Photo;

const Thumb = styled.img`
  box-shadow: 0 0 35px black;
`;
