import React, { Component } from "react";
import scooter from "../assets/img/scooter.jpg";
import "../styling/styles.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div class="about-header">
          <h1>About Me</h1>
        </div>
        <div class="about content">
          <img class="body-img" src={scooter} alt="scooter" />
          <div class="about-text">
            <p>Hello!</p>
            <p>
              I'm Ellen, a rising third year at the University of Chicago,
              studying Computer Science and Economics, with specializations in
              Data Science. I first began coding the summer after my freshman
              year in high school and have loved it ever since. I'm especially
              passionate about writing code to address user-facing issues to
              best improve their experience.
            </p>
            <p>
              When I am not coding, you can find me at the gym trying to hit a
              new PR, on the volleyball court getting some touches, attempting
              to chef up a new recipe I found on TikTok, or following Duke
              basketball (gooo Blue Devils!).
            </p>
          </div>
        </div>
      </div>
    );
  }
}
