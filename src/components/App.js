import React, { Component } from "react";
import EventList from "./EventList";
import EventDetail from "./EventDetail";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "../styles.css";

const App = () => (
  <Router>
    <div className="App">
      <Header>
        <Link to="/">My great site</Link>
      </Header>
      <div className="container">
        <Switch>
          <Route exact path="/" component={EventList} />
          <Route path="/events/:id" component={EventDetail} />
        </Switch>
        <hr />
      </div>
    </div>
  </Router>
);

export default App;

const Header = styled.div`
  color: white;
`;
