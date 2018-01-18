import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import MapLayer from "../_components/MapLayer";
import MenuBar from "../_components/MenuBar";
import FilterMenuBar from "../_components/FilterMenuBar";

import { userActions } from "../_actions";

class HomePage extends React.Component {
  componentDidMount() {}

  render() {
    const { user, users } = this.props;
    console.log(user);
    return (
      <div>
        <MenuBar />
        <FilterMenuBar />
        <MapLayer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
    user,
    users
  };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
