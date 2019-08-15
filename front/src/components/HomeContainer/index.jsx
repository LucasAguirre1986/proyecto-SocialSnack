import React from "react";
import { connect } from "react-redux";

class HomeContainer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Hola mundo!</h1>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    
  }
}
const mapDispatchToProps = dispatch => ({
  //  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);