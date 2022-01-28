import React from "react";
import "./static/static_assets/css/main.css";

export default function About() {
  return (
    <div className="container">
      <div id="page-wrapper">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        {/* Main */}
        <article id="main">
          <header className="special container">
            <span className="icon solid fa-chart-bar" />
            <h2>Our Team</h2>
            <p>
              Our team research focuses on <b>Software Engineering</b>,{" "}
              <b>Deep Learning</b> and <b>Human-Computer Interaction</b>.
            </p>
          </header>
          {/* One */}
          <section className="wrapper style1 container special">
            <div className="row">
              <div className="col-4 col-12-narrower">
                <section>
                  <img
                    src="https://chunyang-chen.github.io/picture/chunyangChen_headshot.jpg"
                    alt=""
                    style={{ width: "70%", height: "70%" }}
                  />
                  <header>
                    <br />
                    <h3>Chunyang Chen</h3>
                  </header>
                  <p>
                    Sed tristique purus vitae volutpat ultrices. Aliquam eu elit
                    eget arcu commodo suscipit dolor nec nibh. Proin a
                    ullamcorper elit, et sagittis turpis. Integer ut fermentum.
                  </p>
                  <button
                    style={{
                      border: "none",
                      outline: "0",
                      display: "inline-block",
                      padding: "8px",
                      color: "white",
                      backgroundColor: "#000",
                      textAlign: "center",
                      cursor: "pointer",
                      width: "50%",
                      fontSize: "0.9rem",
                    }}
                  >
                    Contact
                  </button>
                </section>
              </div>
              <div className="col-4 col-12-narrower">
                <section>
                  <img
                    src="https://conf.researchr.org/getProfileImage/yujinhuang/e80f376a-72fd-40c7-8b03-d0420294d1ed/small.jpg?1610378790000"
                    alt=""
                    style={{ width: "65%", height: "19rem" }}
                  />
                  <header>
                    <br />
                    <h3>Yujin Huang</h3>
                  </header>
                  <p>
                    {" "}
                    Sed tristique purus vitae volutpat ultrices. Aliquam eu elit
                    eget arcu commodo suscipit dolor nec nibh. Proin a
                    ullamcorper elit, et sagittis turpis. Integer ut fermentum.
                  </p>
                  <button
                    style={{
                      border: "none",
                      outline: "0",
                      display: "inline-block",
                      padding: "8px",
                      color: "white",
                      backgroundColor: "#000",
                      textAlign: "center",
                      cursor: "pointer",
                      width: "50%",
                      fontSize: "0.9rem",
                    }}
                  >
                    Contact
                  </button>
                </section>
              </div>
              <div className="col-4 col-12-narrower">
                <section>
                  <img
                    src="https://www.jason-siu.com/About_me_files/Screenshot-2021-05-15-at-8.png"
                    alt=""
                    style={{ width: "70%" }}
                  />
                  <header>
                    <br />
                    <h3>Jason Ching Yuen Siu</h3>
                  </header>
                  <p>
                    Sed tristique purus vitae volutpat ultrices. Aliquam eu elit
                    eget arcu commodo suscipit dolor nec nibh. Proin a
                    ullamcorper elit, et sagittis turpis. Integer ut fermentum.
                  </p>
                  <button
                    style={{
                      border: "none",
                      outline: "0",
                      display: "inline-block",
                      padding: "8px",
                      color: "white",
                      backgroundColor: "#000",
                      textAlign: "center",
                      cursor: "pointer",
                      width: "50%",
                      fontSize: "0.9rem",
                    }}
                  >
                    Contact
                  </button>
                </section>
              </div>
            </div>
          </section>
          {/* Two */}
          <section className="wrapper style2 container special-alt">
            <div className="row gtr-50">
              <div className="col-8 col-12-narrower">
                <header>
                  <h2>
                    Behold the <strong>icons</strong> that visualize what you’re
                    all about. or just take up space. your call bro.
                  </h2>
                </header>
                <p>
                  Sed tristique purus vitae volutpat ultrices. Aliquam eu elit
                  eget arcu comteger ut fermentum lorem. Lorem ipsum dolor sit
                  amet. Sed tristique purus vitae volutpat ultrices. eu elit
                  eget commodo. Sed tristique purus vitae volutpat ultrices.
                  Aliquam eu elit eget arcu commodo.
                </p>
                <footer>
                  <ul className="buttons">
                    <li>
                      <a href="#" className="button">
                        Find Out More
                      </a>
                    </li>
                  </ul>
                </footer>
              </div>
              <div className="col-4 col-12-narrower imp-narrower">
                <ul className="featured-icons">
                  <li>
                    <span className="icon fa-clock">
                      <span className="label">Feature 1</span>
                    </span>
                  </li>
                  <li>
                    <span className="icon solid fa-volume-up">
                      <span className="label">Feature 2</span>
                    </span>
                  </li>
                  <li>
                    <span className="icon solid fa-laptop">
                      <span className="label">Feature 3</span>
                    </span>
                  </li>
                  <li>
                    <span className="icon solid fa-inbox">
                      <span className="label">Feature 4</span>
                    </span>
                  </li>
                  <li>
                    <span className="icon solid fa-lock">
                      <span className="label">Feature 5</span>
                    </span>
                  </li>
                  <li>
                    <span className="icon solid fa-cog">
                      <span className="label">Feature 6</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* Three */}
          <section className="wrapper style3 container special">
            <header className="major">
              <h2>
                Next look at this <strong>cool stuff</strong>
              </h2>
            </header>
            <div className="row">
              <div className="col-6 col-12-narrower">
                <section>
                  <a href="#" className="image featured">
                    <img src="images/pic01.jpg" alt="" />
                  </a>
                  <header>
                    <h3>A Really Fast Train</h3>
                  </header>
                  <p>
                    Sed tristique purus vitae volutpat commodo suscipit amet sed
                    nibh. Proin a ullamcorper sed blandit. Sed tristique purus
                    vitae volutpat commodo suscipit ullamcorper sed blandit
                    lorem ipsum dolore.
                  </p>
                </section>
              </div>
              <div className="col-6 col-12-narrower">
                <section>
                  <a href="#" className="image featured">
                    <img src="images/pic02.jpg" alt="" />
                  </a>
                  <header>
                    <h3>An Airport Terminal</h3>
                  </header>
                  <p>
                    Sed tristique purus vitae volutpat commodo suscipit amet sed
                    nibh. Proin a ullamcorper sed blandit. Sed tristique purus
                    vitae volutpat commodo suscipit ullamcorper sed blandit
                    lorem ipsum dolore.
                  </p>
                </section>
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-12-narrower">
                <section>
                  <a href="#" className="image featured">
                    <img src="images/pic03.jpg" alt="" />
                  </a>
                  <header>
                    <h3>Hyperspace Travel</h3>
                  </header>
                  <p>
                    Sed tristique purus vitae volutpat commodo suscipit amet sed
                    nibh. Proin a ullamcorper sed blandit. Sed tristique purus
                    vitae volutpat commodo suscipit ullamcorper sed blandit
                    lorem ipsum dolore.
                  </p>
                </section>
              </div>
              <div className="col-6 col-12-narrower">
                <section>
                  <a href="#" className="image featured">
                    <img src="images/pic04.jpg" alt="" />
                  </a>
                  <header>
                    <h3>And Another Train</h3>
                  </header>
                  <p>
                    Sed tristique purus vitae volutpat commodo suscipit amet sed
                    nibh. Proin a ullamcorper sed blandit. Sed tristique purus
                    vitae volutpat commodo suscipit ullamcorper sed blandit
                    lorem ipsum dolore.
                  </p>
                </section>
              </div>
            </div>
            <footer className="major">
              <ul className="buttons">
                <li>
                  <a href="#" className="button">
                    See More
                  </a>
                </li>
              </ul>
            </footer>
          </section>
        </article>
        {/* CTA */}
        <section id="cta">
          <header>
            <h2>
              Ready to do <strong>something</strong>?
            </h2>
            <p>
              Proin a ullamcorper elit, et sagittis turpis integer ut fermentum.
            </p>
          </header>
          <footer>
            <ul className="buttons">
              <li>
                <a href="#" className="button primary">
                  Take My Money
                </a>
              </li>
              <li>
                <a href="#" className="button">
                  LOL Wut
                </a>
              </li>
            </ul>
          </footer>
        </section>
        {/* Footer */}
        <footer id="footer">
          <ul className="icons">
            <li>
              <a href="#" className="icon brands circle fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands circle fa-facebook-f">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands circle fa-google-plus-g">
                <span className="label">Google+</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands circle fa-github">
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands circle fa-dribbble">
                <span className="label">Dribbble</span>
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>© Untitled</li>
            <li>
              Design: <a href="http://html5up.net">HTML5 UP</a>
            </li>
          </ul>
        </footer>
      </div>
      {/* Scripts */}
      );
    </div>
  );
}
