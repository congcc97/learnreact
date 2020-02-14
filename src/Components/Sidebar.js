import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <div
        className="sidebar"
        data-color="purple"
        data-background-color="white"
        data-image="../assets/img/sidebar-1.jpg"
      >
        {/*
        Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"

        Tip 2: you can also add an image using data-image tag
    */}
        <div className="logo">
          <Link to="/" className="simple-text logo-normal">
            Creative Tim
          </Link>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            <li className="nav-item ">
              <NavLink exact className="nav-link" to="/">
                <i className="material-icons">dashboard</i>
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/user">
                <i className="material-icons">person</i>
                <p>User Profile</p>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/table">
                <i className="material-icons">content_paste</i>
                <p>Table List</p>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/typography">
                <i className="material-icons">library_books</i>
                <p>Typography</p>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/icons">
                <i className="material-icons">bubble_chart</i>
                <p>Icons</p>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/maps">
                <i className="material-icons">location_ons</i>
                <p>Maps</p>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/notifications">
                <i className="material-icons">notifications</i>
                <p>Notifications</p>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/rtl">
                <i className="material-icons">language</i>
                <p>RTL Support</p>
              </NavLink>
            </li>
            <li className="nav-item active-pro ">
              <NavLink className="nav-link" to="/upgrade">
                <i className="material-icons">unarchive</i>
                <p>Upgrade to PRO</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
