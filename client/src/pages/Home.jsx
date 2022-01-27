import React from "react";
import "./static/static_assets/css/main.css";
import "./static/static_assets/css/noscript.css";
import pic01 from "./static/static_images/pic01.jpg";
import pic02 from "./static/static_images/pic02.jpg";
import pic03 from "./static/static_images/pic03.jpg";


export default function Home() {
  return (
    <div className="container">
      <div>
        <div classname="container">
          <title>Interaction Gallery</title>
          {/* <link rel="stylesheet" href="static_assets/css/main.css" />
    <noscript>&lt;link rel="stylesheet" href="assets/css/noscript.css" /&gt;</noscript> */}
          <div id="page-wrapper">
            <section id="banner">
              <div classname="inner">
                <header>
                  <h2>Interaction Gallery</h2>
                </header>
                <p>
                  This <strong>Gallery</strong> is free
                  <br />
                  to let you explore
                  <br />
                  the interaction pattern <br />
                  in AI apps
                </p>
                <footer>
                  <ul classname="buttons stacked">
                    <li>
                      <a href="#main" classname="button fit scrolly">
                        Tell Me More
                      </a>
                    </li>
                  </ul>
                </footer>
              </div>
            </section>
            <article id="main">
              <header classname="special container">
                <span classname="icon solid fa-chart-bar" />
                <h2>What is this gallery?</h2>
                <p style={{ textAlign: "justify" }}>
                  Interaction Design (IxD) is a creative knowledge work. A great
                  app not only offers fantastic features, but more importantly
                  knows how they are conveyed to users. An User Experience (UX)
                  Designer specialises in designing the best way users will
                  interact with it.
                </p>
                <br />
                <p style={{ textAlign: "justify" }}>
                  While <a href="https://www.youtube.com/watch?v=6L-BogO6HwU" />{" "}
                  the app development is ever-changing, the users’ needs are
                  becoming more demanding which poses challenges to UX
                  designers. The artificial intelligence (AI) joins in the field
                  and serve users with amazing features.{" "}
                  <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6832128/">
                    Human started to cooperate with these AI models.
                  </a>{" "}
                  The creates new ways of communication between users and
                  computer which involves voice, vision, etc. User Experience
                  designers started to feel the the interaction challenging as
                  the dialogue between the apps and users no longer limits on
                  using keyboards or swiping gestures, but also using camera.
                  They might struggle to understand how AI means to their jobs.{" "}
                </p>
                <p style={{ textAlign: "justify" }}>
                  Here you come right place! We build this gallery to ley you
                  explore what AI means to you when designing AI app. We hope
                  you can understand{" "}
                  <a href="ai_model.html">
                    how AI models are used in mobile apps
                  </a>{" "}
                  as well as{" "}
                  <a href="search.html">
                    how the current users talk to the apps and models
                  </a>{" "}
                  .{" "}
                </p>
              </header>
              <section classname="wrapper style2 container special-alt">
                <div classname="row gtr-50">
                  <div classname="col-8 col-12-narrower">
                    <header>
                      <h2>Want to get inspiration on AI user experience?</h2>
                    </header>
                    <p>
                      The interaction pattern covers a wide range of categories
                      with diverse styles around the Android Applications.
                    </p>
                    <footer>
                      <ul classname="buttons">
                        <li>
                          <a
                            href="#meta-char"
                            classname="button scrolly active"
                          >
                            Find Out More
                          </a>
                        </li>
                      </ul>
                    </footer>
                  </div>
                  <div classname="col-4 col-12-narrower imp-narrower">
                    <ul classname="featured-icons">
                      <li>
                        <span classname="icon fa-clock">
                          <span classname="label">Feature 1</span>
                        </span>
                      </li>
                      <li>
                        <span classname="icon solid fa-volume-up">
                          <span classname="label">Feature 2</span>
                        </span>
                      </li>
                      <li>
                        <span classname="icon solid fa-laptop">
                          <span classname="label">Feature 3</span>
                        </span>
                      </li>
                      <li>
                        <span classname="icon solid fa-inbox">
                          <span classname="label">Feature 4</span>
                        </span>
                      </li>
                      <li>
                        <span classname="icon solid fa-lock">
                          <span classname="label">Feature 5</span>
                        </span>
                      </li>
                      <li>
                        <span classname="icon solid fa-cog">
                          <span classname="label">Feature 6</span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <section classname="wrapper style1 container special">
                <div classname="row">
                  <div classname="col-4 col-12-narrower" id="meta-char">
                    <section>
                      <span classname="icon solid featured fa-check" />
                      <header>
                        <h3>App Category</h3>
                      </header>
                      <p>
                        The interactions you found are from 16 categories of
                        apps{" "}
                      </p>
                    </section>
                  </div>
                  <div classname="col-4 col-12-narrower">
                    <section>
                      <span classname="icon solid featured fa-check" />
                      <header>
                        <a href="ai_model.html">
                          <h3>Model Functionalities</h3>
                        </a>
                      </header>
                      <p>
                        The features of these apps are supported by artificial
                        intelligence. Click <a href="ai_model.html">here</a> to
                        learn more about the usage of these 13 AI models.
                      </p>
                    </section>
                  </div>
                  <div classname="col-4 col-12-narrower">
                    <section>
                      <span classname="icon solid featured fa-check" />
                      <header>
                        <a href="tutorial.html">
                          <h3>Interaction Style</h3>
                        </a>
                      </header>
                      <p>
                        This <a href="tutorial.html">tutorial</a> introduces how
                        15 interactions are being implemented.
                      </p>
                    </section>
                  </div>
                </div>
              </section>
              <section
                classname="wrapper style3 container special"
                id="tutorial"
              >
                <header classname="major">
                  <h2>
                    Next look at this <strong>cool stuff</strong>
                  </h2>
                </header>
                <div classname="row">
                  <div classname="col-6 col-12-narrower">
                    <section>
                      <a href="#" classname="image featured">
                        <img src={pic01} alt="" />
                      </a>
                      <header>
                        <h3>A Really Fast Train</h3>
                      </header>
                      <p>
                        Sed tristique purus vitae volutpat commodo suscipit amet
                        sed nibh. Proin a ullamcorper sed blandit. Sed tristique
                        purus vitae volutpat commodo suscipit ullamcorper sed
                        blandit lorem ipsum dolore.
                      </p>
                    </section>
                  </div>
                  <div classname="col-6 col-12-narrower">
                    <section>
                      <a href="#" classname="image featured">
                        <img src={pic02} alt="" />
                      </a>
                      <header>
                        <h3>An Airport Terminal</h3>
                      </header>
                      <p>
                        Sed tristique purus vitae volutpat commodo suscipit amet
                        sed nibh. Proin a ullamcorper sed blandit. Sed tristique
                        purus vitae volutpat commodo suscipit ullamcorper sed
                        blandit lorem ipsum dolore.
                      </p>
                    </section>
                  </div>
                </div>
                <div classname="row">
                  <div classname="col-6 col-12-narrower">
                    <section>
                      <a href="#" classname="image featured">
                        <img src={pic03} alt="" />
                      </a>
                      <header>
                        <h3>Hyperspace Travel</h3>
                      </header>
                      <p>
                        Sed tristique purus vitae volutpat commodo suscipit amet
                        sed nibh. Proin a ullamcorper sed blandit. Sed tristique
                        purus vitae volutpat commodo suscipit ullamcorper sed
                        blandit lorem ipsum dolore.
                      </p>
                    </section>
                  </div>
                  <div classname="col-6 col-12-narrower">
                    <section>
                      <a href="#" classname="image featured">
                        <img src="images/pic04.jpg" alt="" />
                      </a>
                      <header>
                        <h3>And Another Train</h3>
                      </header>
                      <p>
                        Sed tristique purus vitae volutpat commodo suscipit amet
                        sed nibh. Proin a ullamcorper sed blandit. Sed tristique
                        purus vitae volutpat commodo suscipit ullamcorper sed
                        blandit lorem ipsum dolore.
                      </p>
                    </section>
                  </div>
                </div>
                <footer classname="major">
                  <ul classname="buttons">
                    <li>
                      <a href="#" classname="button">
                        See More
                      </a>
                    </li>
                  </ul>
                </footer>
              </section>
            </article>
            <section id="cta">
              <header>
                <h2>
                  Ready to do <strong>Search</strong>?
                </h2>
                <p>Enjoy Your Every Moments With this gallery!</p>
              </header>
              <footer>
                <ul classname="buttons">
                  <li>
                    <a href="search.html" classname="button primary">
                      Yes, I am ready!
                    </a>
                  </li>
                  <li>
                    <a href="tutorial.html" classname="button">
                      No, I need a guide!
                    </a>
                  </li>
                </ul>
              </footer>
            </section>
            <footer id="footer">
              <ul classname="icons">
                <li>
                  <a href="#" classname="icon brands circle fa-twitter">
                    <span classname="label">Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="#" classname="icon brands circle fa-facebook-f">
                    <span classname="label">Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#" classname="icon brands circle fa-google-plus-g">
                    <span classname="label">Google+</span>
                  </a>
                </li>
                <li>
                  <a href="#" classname="icon brands circle fa-github">
                    <span classname="label">Github</span>
                  </a>
                </li>
                <li>
                  <a href="#" classname="icon brands circle fa-dribbble">
                    <span classname="label">Dribbble</span>
                  </a>
                </li>
              </ul>
              <ul classname="copyright">
                <li>© All rights reserved</li>
                <li>
                  Design: <a href="index.html">Interaction Gallery</a>
                </li>
              </ul>
            </footer>

            <script src="assets/js/jquery.min.js"></script>
            <script src="assets/js/jquery.dropotron.min.js"></script>
            <script src="assets/js/jquery.scrolly.min.js"></script>
            <script src="assets/js/jquery.scrollex.min.js"></script>
            <script src="assets/js/browser.min.js"></script>
            <script src="assets/js/breakpoints.min.js"></script>
            <script src="assets/js/util.js"></script>
            <script src="assets/js/main.js"></script>
          </div>
        </div>
        );
      </div>
    </div>
  );
}
