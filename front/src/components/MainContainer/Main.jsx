import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Home from '../HomeContainer/test'
//import NavbarContainer from "../NavBarContainer/"


class MainContainer extends React.Component {
  render() {
    return (
      <div>
        {/* <Route component={NavbarContainer} /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Redirect from="/login" to="/" /> */}
        </Switch>
        
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
