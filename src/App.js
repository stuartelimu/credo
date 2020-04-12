import React from "react";
import "./App.css";

function App() {
  return (
    <div className="site-wrap">
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <header
        className="site-navbar py-4 js-sticky-header site-navbar-target"
        role="banner"
      >
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="">
              <nav
                className="site-navigation position-relative text-right"
                role="navigation"
              >
                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li>
                    <a href="#home-section" className="nav-link">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about-section" className="nav-link">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#services-section" className="nav-link">
                      Services
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className=" text-center mx-5">
              <h1 className="m-0 site-logo">
                <a href="index.html">Credo</a>
              </h1>
            </div>

            <div className="text-left">
              <nav
                className="site-navigation position-relative"
                role="navigation"
              >
                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li>
                    <a href="#portfolio-section" className="nav-link">
                      Photography
                    </a>
                  </li>
                  <li>
                    <a href="#blog-section" className="nav-link">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#contact-section" className="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>

              <div
                className="d-inline-block d-lg-none"
                style={{ position: "relative", top: "3px" }}
              >
                <a
                  href="#"
                  className="site-menu-toggle js-menu-toggle float-right"
                >
                  <span className="icon-menu h3"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="site-blocks-cover overlay bg-light" id="home-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 mt-lg-5 text-left align-self-center text-intro">
              <div className="row">
                <div className="col-lg-6">
                  <h1 className="text-white">I'm Craig Smith</h1>
                  <p className="text-secondary">
                    Photographer <span className="mx-3">|</span> Speaker
                  </p>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus voluptate dolore, nostrum inventore quisquam
                    totam dignissimos culpa! Eveniet.
                  </p>
                  <p>
                    <a
                      href="#contact-section"
                      className="btn smoothscroll btn-primary"
                    >
                      Contact Me
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          src="images/credo_img_1.jpg"
          alt="Image"
          className="img-face"
        ></img>
      </div>

      <div className="site-section bg-light" id="services-section">
        <div className="container">
          <div className="row ">
            <div className="col-12 mb-5 position-relative">
              <h2 className="section-title text-center mb-5">Services</h2>
            </div>

            <div className="col-md-6 mb-4">
              <div className="service d-flex h-100">
                <div className="service-number mr-4">
                  <span className="icon-glass"></span>
                </div>
                <div className="service-about">
                  <h3>Wedding</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius aperiam repudiandae quis ipsa quod, reprehenderit iusto
                    laudantium.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="service d-flex h-100">
                <div className="service-number mr-4">
                  <span className="icon-video-camera"></span>
                </div>
                <div className="service-about">
                  <h3>Events</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius aperiam repudiandae quis ipsa quod, reprehenderit iusto
                    laudantium.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="service d-flex h-100">
                <div className="service-number mr-4">
                  <span className="icon-fire"></span>
                </div>
                <div className="service-about">
                  <h3>Conferences</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius aperiam repudiandae quis ipsa quod, reprehenderit iusto
                    laudantium.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="service d-flex h-100">
                <div className="service-number mr-4">
                  <span className="icon-magnet"></span>
                </div>
                <div className="service-about">
                  <h3>Culture</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius aperiam repudiandae quis ipsa quod, reprehenderit iusto
                    laudantium.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section" id="about-section">
        <div className="container">
          <div className="row ">
            <div className="col-12 mb-4 position-relative">
              <h2 className="section-title">About Me</h2>
            </div>
            <div className="col-lg-6 order-2 order-lg-1">
              <img
                className="img-fluid mb-4"
                src="images/credo_img_1.jpg"
                alt="Image"
              ></img>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat repudiandae cupiditate, aspernatur ipsa enim magnam
                quaerat pariatur vero provident necessitatibus amet saepe
                officiis labore. Provident deserunt necessitatibus expedita.
                Voluptate, soluta?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Explicabo praesentium quibusdam minus voluptatem sequi iure
                amet?
              </p>
            </div>
            <div className="col-lg-6 order-3 pl-lg-5 order-lg-2">
              <div className="mb-5">
                <strong className="text-black">Photographer</strong>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "89%" }}
                  >
                    <span>89%</span>
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <strong className="text-black">Wedding</strong>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "75%" }}
                  >
                    <span>75%</span>
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <strong className="text-black">Events</strong>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "94%" }}
                  >
                    <span>94%</span>
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <strong className="text-black">Conferences</strong>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "94%" }}
                  >
                    <span>94%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="site-section block__62272" id="portfolio-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 position-relative">
              <h2 className="section-title text-center mb-5">My Photography</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-4 item">
              <a href="images/img_1.jpg" className="item-wrap fancybox mb-4">
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/img_1.jpg"></img>
              </a>
              <a href="images/img_2.jpg" className="item-wrap fancybox mb-4">
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/img_2.jpg"></img>
              </a>
              <a href="images/img_3.jpg" className="item-wrap fancybox mb-4">
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/img_3.jpg"></img>
              </a>
              <a href="images/img_10.jpg" className="item-wrap fancybox mb-4">
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/img_10.jpg"></img>
              </a>
            </div>
            <div className="col-md-6 col-lg-4 item">
              <a href="images/img_1.jpg" className="item-wrap fancybox mb-4">
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/img_4.jpg"></img>
              </a>
              <a href="images/img_5.jpg" className="item-wrap fancybox mb-4">
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/img_5.jpg"></img>
              </a>
              <a href="images/img_8.jpg" className="item-wrap fancybox mb-4">
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/img_8.jpg"></img>
              </a>
            </div>
            <div className="col-md-6 col-lg-4 item">
              <a href="images/img_6.jpg" className="item-wrap fancybox mb-4">
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/img_6.jpg"></img>
              </a>
              <a href="images/img_7.jpg" className="item-wrap fancybox mb-4">
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/img_7.jpg"></img>
              </a>
              <a href="images/img_9.jpg" className="item-wrap fancybox mb-4">
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/img_9.jpg"></img>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5 position-relative">
              <h2 className="section-title text-center mb-5 text-white">
                What Client Are Sayings
              </h2>
            </div>
          </div>
          <div className="owl-carousel slide-one-item">
            <div className="slide">
              <blockquote>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
                  sunt nobis modi, ducimus magnam sint? Soluta delectus
                  mollitia, incidunt reprehenderit rerum tempore optio excepturi
                  aut, error voluptatem laborum quae eum.
                </p>
                <p>
                  <cite>&mdash; Graig Smith</cite>
                </p>
              </blockquote>
            </div>
            <div className="slide">
              <blockquote>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                  veniam, quos optio magnam aliquid est sequi cupiditate tempore
                  libero excepturi nam laudantium consequuntur quia iste dolor
                  fugit quas?
                </p>
                <p>
                  <cite>&mdash; Carl Spencer</cite>
                </p>
              </blockquote>
            </div>
            <div className="slide">
              <blockquote>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  veniam officiis placeat tempore, voluptates quis, odit
                  mollitia neque, quisquam sint temporibus in ullam delectus
                  modi repudiandae expedita! Cupiditate aspernatur illum
                  adipisci recusandae beatae ea impedit.
                </p>
                <p>
                  <cite>&mdash; Ryan Peters</cite>
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section bg-light" id="blog-section">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5 position-relative">
              <h2 className="section-title text-center mb-5">Blog Posts</h2>
            </div>

            <div className="col-md-6 mb-5 mb-lg-0 col-lg-4">
              <div className="blog_entry">
                <a href="single.html">
                  <img
                    src="images/blog_1.jpg"
                    alt="Image"
                    className="img-fluid"
                  ></img>
                </a>
                <div className="p-4 bg-white">
                  <h3>
                    <a href="single.html">
                      Why Photography Is Good For Business
                    </a>
                  </h3>
                  <span className="date">April 25, 2019</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit reprehenderit adipisci sed perferendis quia iure,
                    aperiam ab?.
                  </p>
                  <p className="more">
                    <a href="single.html">Read More</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-5 mb-lg-0 col-lg-4">
              <div className="blog_entry">
                <a href="single.html">
                  <img
                    src="images/blog_2.jpg"
                    alt="Image"
                    className="img-fluid"
                  ></img>
                </a>
                <div className="p-4 bg-white">
                  <h3>
                    <a href="single.html">
                      Why Photography Is Good For Business
                    </a>
                  </h3>
                  <span className="date">April 25, 2019</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit reprehenderit adipisci sed perferendis quia iure,
                    aperiam ab?.
                  </p>
                  <p className="more">
                    <a href="single.html">Read More</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-5 mb-lg-0 col-lg-4">
              <div className="blog_entry">
                <a href="single.html">
                  <img
                    src="images/blog_3.jpg"
                    alt="Image"
                    className="img-fluid"
                  ></img>
                </a>
                <div className="p-4 bg-white">
                  <h3>
                    <a href="single.html">
                      Why Photography Is Good For Business
                    </a>
                  </h3>
                  <span className="date">April 25, 2019</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit reprehenderit adipisci sed perferendis quia iure,
                    aperiam ab?.
                  </p>
                  <p className="more">
                    <a href="single.html">Read More</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section bg-primary" id="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5 position-relative">
              <h2 className="section-title text-center text-white mb-5">
                Say Hello
              </h2>
            </div>
          </div>
          <form action="#" className="form">
            <div className="row mb-4">
              <div className="form-group col-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
              </div>
              <div className="form-group col-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full name"
                />
              </div>
            </div>

            <div className="row mb-4">
              <div className="form-group col-12">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                />
              </div>
            </div>

            <div className="row mb-4">
              <div className="form-group col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject of the message"
                />
              </div>
            </div>

            <div className="row mb-4">
              <div className="form-group col-12">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="form-control"
                  placeholder="Type your message here.."
                ></textarea>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <input
                  type="submit"
                  className="btn btn-dark"
                  value="Send Message"
                />
              </div>
            </div>
          </form>
        </div>
      </section>

      <footer className="site-section bg-light footer">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-3">
              <h3 className="footer-title">Credo</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                animi.
              </p>
              <p>
                <span className="d-inline-block d-md-block">
                  203 Fake St. Mountain View,
                </span>{" "}
                San Francisco, California, USA
              </p>
            </div>
            <div className="col-md-5 mx-auto">
              <div className="row">
                <div className="col-lg-4">
                  <h3 className="footer-title">Services</h3>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Wedding</a>
                    </li>
                    <li>
                      <a href="#">Portrait</a>
                    </li>
                    <li>
                      <a href="#">Photography</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <h3 className="footer-title">Resources</h3>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Wedding</a>
                    </li>
                    <li>
                      <a href="#">Portrait</a>
                    </li>
                    <li>
                      <a href="#">Photography</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <h3 className="footer-title">Quick Links</h3>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Wedding</a>
                    </li>
                    <li>
                      <a href="#">Portrait</a>
                    </li>
                    <li>
                      <a href="#">Photography</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <h3 className="footer-title">Follow Me</h3>
              <a href="#" className="social-circle p-2">
                <span className="icon-twitter"></span>
              </a>
              <a href="#" className="social-circle p-2">
                <span className="icon-facebook"></span>
              </a>
              <a href="#" className="social-circle p-2">
                <span className="icon-instagram"></span>
              </a>
              <a href="#" className="social-circle p-2">
                <span className="icon-dribbble"></span>
              </a>
              <a href="#" className="social-circle p-2">
                <span className="icon-linkedin"></span>
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-12 text-center">
              <p>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is made with{" "}
                <i className="icon-heart-o" aria-hidden="true"></i> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
