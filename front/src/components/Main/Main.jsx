import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from '../Section/MainSection/index'
import Navbar from '../Nav/index'

export default function MainContainer() {
  return (
    <MDBContainer>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect from="/sorry" to="/" />
      </Switch>
      <MDBRow>
        <MDBCol size="4">.col-4</MDBCol>
        <MDBCol size="4">.col-4</MDBCol>
        <MDBCol size="4">.col-4</MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}