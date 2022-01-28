import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";

export default function Footer() {
  return (
    <div className="container">
      <footer id="footer">
        <ul class="icons">
          <li>
            <a href="#" class="icon brands circle fa-twitter">
              <span class="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon brands circle fa-facebook-f">
              <span class="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon brands circle fa-google-plus-g">
              <span class="label">Google+</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon brands circle fa-github">
              <span class="label">Github</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon brands circle fa-dribbble">
              <span class="label">Dribbble</span>
            </a>
          </li>
        </ul>
        <ul class="copyright">
          <li>© All rights reserved</li>
          <li>
            Design: <a href="index.html">Interaction Gallery</a>
          </li>
        </ul>
      </footer>


    </div>
  );
}
