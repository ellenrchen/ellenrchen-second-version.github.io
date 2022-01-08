import React, { Component } from "react";
import "../styling/styles.css";

export default class Links extends Component {
  render() {
    return (
      <div class="links">
        {/* <!-- <a class="footer-link" href="https://www.facebook.com/ellenrchen"
          >Facebook</a
        > --> */}
        <a class="footer-link" href="https://www.linkedin.com/in/ellenrchen/">
          LinkedIn
        </a>
        <a class="footer-link" href="https://github.com/ellenrchen">
          Github
        </a>
        {/* <!-- <a class="footer-link" href="https://twitter.com/ellenchen108">Twitter</a>
        <a class="footer-link" href="https://www.instagram.com/_ellenchen/"
          >Instagram</a --> */}
      </div>
    );
  }
}
