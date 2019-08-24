import React from "react";
import { MDBContainer } from "mdbreact";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from '../Section/MainSection/index'
import Navbar from '../Nav/index'
import Footer from '../Footer/index'

export default function MainContainer() {
  return (
    <MDBContainer>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect from="/error" to="/" />
      </Switch>
      <Footer />
    </MDBContainer>
  )
}