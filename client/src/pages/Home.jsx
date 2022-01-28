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

          <div id="page-wrapper">
            <section id="banner">
              <div class="inner">
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
                  <ul class="buttons stacked">
                    <li>
                      <a href="#main" class="button fit scrolly">
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
                  Here you to come right place! We build this gallery to ley you
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

              <section className="wrapper style2 container special-alt">
                <div className="row gtr-50">
                  <div className="col-8 col-12-narrower">
                    <header>
                      <h2>Want to get inspiration on AI user experience?</h2>
                    </header>
                    <p>
                      The interaction pattern covers a wide range of categories
                      with diverse styles around the Android Applications.
                    </p>
                    <footer>
                      <ul className="buttons">
                        <br />
                        <li>
                          <a href="#meta-char" className="button">
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
              {/* section 3 cards */}
              <section class="wrapper style1 container special">
                <div class="row">
                  <div class="col-4 col-12-narrower" id="meta-char">
                    <section>
                      <span></span>
                      <header>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/3843/3843517.png"
                          style={{ width: "100px" }}
                        />
                        <h3>App Category</h3>
                      </header>
                      <p>
                        The interactions you found are from 16 categories of
                        apps{" "}
                      </p>
                    </section>
                  </div>
                  <div class="col-4 col-12-narrower">
                    <section>
                      <span></span>
                      <header>
                        <img
                          src="https://cdn-icons.flaticon.com/png/512/3112/premium/3112425.png?token=exp=1643331967~hmac=851bcf6b4f6dfd0a62cd8a2a9ed56396"
                          style={{ width: "100px" }}
                        />
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
                  <div class="col-4 col-12-narrower">
                    <section>
                      <span></span>
                      <header>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/2818/2818069.png"
                          style={{ width: "100px" }}
                        />
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

              {/* Section of 4 background */}
              {/* <section
                className="wrapper style3 container special"
                id="tutorial"
              >
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
                        Sed tristique purus vitae volutpat commodo suscipit amet
                        sed nibh. Proin a ullamcorper sed blandit. Sed tristique
                        purus vitae volutpat commodo suscipit ullamcorper sed
                        blandit lorem ipsum dolore.
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
                        Sed tristique purus vitae volutpat commodo suscipit amet
                        sed nibh. Proin a ullamcorper sed blandit. Sed tristique
                        purus vitae volutpat commodo suscipit ullamcorper sed
                        blandit lorem ipsum dolore.
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
                        Sed tristique purus vitae volutpat commodo suscipit amet
                        sed nibh. Proin a ullamcorper sed blandit. Sed tristique
                        purus vitae volutpat commodo suscipit ullamcorper sed
                        blandit lorem ipsum dolore.
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
                        Sed tristique purus vitae volutpat commodo suscipit amet
                        sed nibh. Proin a ullamcorper sed blandit. Sed tristique
                        purus vitae volutpat commodo suscipit ullamcorper sed
                        blandit lorem ipsum dolore.
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
              </section> */}
            </article>
            {/* ready */}
            <section id="cta">
              <header>
                <h2>
                  Ready to do <strong>Search</strong>?
                </h2>
                <p>Enjoy Your Every Moments With this gallery!</p>
              </header>
              <footer>
                <ul class="buttons">
                  <li>
                    <a href="search.html" class="button primary">
                      Yes, I am ready!
                    </a>
                  </li>
                  <li>
                    <a href="tutorial.html" class="button">
                      No, I need a guide!
                    </a>
                  </li>
                </ul>
              </footer>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
