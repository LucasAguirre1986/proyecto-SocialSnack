import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Home from '../HomeContainer/index'
import NavbarContainer from "../NavBarContainer/"
import FooterContainer from "../FooterContainer"

class MainContainer extends React.Component {
  render() {
    return (
      <div>
        <Route component={NavbarContainer} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect from="/login" to="/" />
        </Switch>
        <Route component={FooterContainer} />
      </div>
    )
  }
}

const mapStateToProps = (state, own) => {
  return {

  }
}
const mapDispatchToProps = function (dispatch) {
  return {
    
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
