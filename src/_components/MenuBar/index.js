import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import FontAwesome from "react-fontawesome";
import { userActions } from "../../_actions";
import "./index.css";

class MenuBar extends Component {
  render() {
    return (
      <div className="MenuBar">
        <div className="menuText">
          <h4 className="settings">
            <Link className="icon-color" to=""><FontAwesome name="cog"/></Link>
          </h4>
          <h4 className="logout">
            <Link className="icon-color" to="/login"><FontAwesome name="sign-out"/></Link>
          </h4>
        </div>
      </div>
    );
  }
}

export default MenuBar;
