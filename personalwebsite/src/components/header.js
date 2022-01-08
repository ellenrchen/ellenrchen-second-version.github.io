import React, { Component } from "react";
import ellen from '../assets/img/ellen.jpg';
import '../styling/styles.css';
import { Link, Route } from 'react-router-dom';
import About from './about';

export default class Header extends Component {
  render() {
    return (
      <div className="intro-container ol-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12">
        <img class="intro-img" src={ellen} alt="profile-pic" />
        <div class="intro-name">
          <h1> ELLEN CHEN </h1>
        </div>
        <div class="intro-about">
          <Link to="/about">Learn more about me {'>'}</Link>
          {/* <a href="about.html"> Learn more about me {'>'} </a> */}
        </div>
      </div>
    );
  }
}
