import React from 'react';
import { NavLink } from "react-router-dom";
import styles from "./Topbar.module.css";
import JoinUs from "../ui/Dropdown";
export default class Topbar extends React.Component {
  state={clicked:false}
  handleClick=()=>{
    this.setState({clicked: !this.state.clicked})
  }
  render(){

  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.home}>
        <img src="/logo.png" alt="" />
      </NavLink>
      <div className={styles.menuicon} onClick={this.handleClick} >
        <i className={this.state.clicked?"fas fa-times":"fas fa-bars"}></i>
      </div>
      <ul className={this.state.clicked?'':styles.hiddenmenu}>
        <NavLink to="/about" className={styles.about}>
          <li>About us</li>
        </NavLink>

        <NavLink to="/events" className={styles.events}>
          <li>Events</li>
        </NavLink>

        <NavLink to="/login" className={styles.login}>
          <li>Login</li>
        </NavLink>

        <JoinUs />
      </ul>
    </header>
  );
  }
}

