"use client";
// import Banner from "@/components/sections/HomePage/Banner";
// import Header from "@/components/Header";

// import WhoWeAre from "@/components/sections/HomePage/WhoWeAre";
// import OurMission from "@/components/sections/HomePage/OurMission";
// import OurPrinciples from "@/components/sections/HomePage/OurPrinciples";
// import Footer from "@/components/Footer";
// import dynamic from 'next/dynamic'

// export default function Home() {

// const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
//   ssr: false
// });
//   return (
//     <main classNameName="">
//       <AnimatedCursor
//       innerSize={10}
//       outerSize={8}
//       color='204, 30, 20'
//       outerAlpha={1.2}
//       innerScale={1.7}
//       outerScale={5}
//       clickables={[
//         'a',
//         'input[type="text"]',
//         'input[type="email"]',
//         'input[type="number"]',
//         'input[type="submit"]',
//         'input[type="image"]',
//         'label[for]',
//         'select',
//         'textarea',
//         'button',
//         '.link'
//       ]}
//     />
//       <Header color={'#F6E84E'}/>
//       <Banner />
//       <WhoWeAre />
//       <OurMission />
//       <OurPrinciples />
//       <Footer/>
//       {/* <OurApproach /> */}
//     </main>
//   );
// }

import Image from "next/image";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import preloader from "@/public/assets/img/preloader.svg";
import logo3 from "@/public/NexusCraft LOGO/1.png";
import cd1 from "@/public/assets/img/shop/cd1.jpg";
import ps1 from "@/public/assets/img/shape/ps1.png";
import ps2 from "@/public/assets/img/shape/ps2.png";
import ps3 from "@/public/assets/img/shape/ps3.png";
import sbg1 from "@/public/assets/img/banner/sbg1.jpg";
import abs1 from "@/public/assets/img/shape/abs1.png";
import abs2 from "@/public/assets/img/shape/abs2.png";
import abs3 from "@/public/assets/img/about/ab3.jpg";
import abs4 from "@/public/assets/img/about/ab4.jpg";
import sicon1 from "@/public/assets/img/shape/sicon1.png";
import sicon2 from "@/public/assets/img/shape/sicon2.png";
import sicon3 from "@/public/assets/img/shape/sicon3.png";
import sicon4 from "@/public/assets/img/shape/sicon4.png";
import sk1 from "@/public/assets/img/misc/sk1.jpg";
import locimg from "@/public/assets/img/misc/loc-img.jpg";
import flogo1 from "@/public/assets/img/logo/f-logo1.png";
import dotmap from "@/public/assets/img/misc/dot-map2.png";

function page() {
  const [active, setActive] = useState(false);
  const addClass = () => {
    setActive(!active);

  };
  return (
    <div>
      <div className="up">
        <a href="#" className="scrollup text-center">
          <i className="fas fa-chevron-up"></i>
        </a>
      </div>
      {/* {/*Start of header section
		============================================= *?} */}
      <header id="header-id" className="main-header header-style-three">
        <div className="header-top-wrapper clearfix">
          <div className="container">
            <div className="header-top-content">
              <div className="header-top-contact">
                <a href="#">
                  <i className="fas fa-phone"></i> <span>+916238483581 </span>
                </a>
                <a href="#">
                  <i className="fas fa-envelope"></i>{" "}
                  <span>Nexuscraftagency@gmail.com</span>
                </a>
              </div>
              <div className="header-top-location">
                <a href="#">
                  <i className="fas fa-map-marker-alt"></i>{" "}
                  <span>Aluva, Kochi, Kerala</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="header-menu-wrap clearfix">
          <div className="container">
            <div className="brand-logo float-left">
              <Image src={logo3} alt="logo" className="w-20 h-20" />
            </div>
            <nav className="main-navigation-area d-inline-block clearfix ul-li">
              <ul className="menu-navigation">
                <li className="dropdown">
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li className="dropdown">
                  <a href="%21.html#">Services</a>
                  <ul className="dropdown-menu clearfix">
                    <li>
                      <a href="shop.html">Digital Marketing</a>
                    </li>
                    <li>
                      <a href="shop-single.html">Web Development</a>
                    </li>
                    <li>
                      <a href="cart.html">Graphic designing</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="%21.html#">Contact us</a>
                  {/* <ul className="dropdown-menu clearfix">
                    <li>
                      <a href="service.html">Services</a>
                    </li>
                    <li>
                      <a href="team.html">Team Page</a>
                    </li>
                    <li>
                      <a href="team-single.html">Team Details</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQ Page</a>
                    </li>
                    <li>
                      <a href="service-single.html">Service Details</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Page</a>
                    </li>
                  </ul> */}
                </li>
                <li className="dropdown">
                  <a href="%21.html#">Blog</a>
                  <ul className="dropdown-menu clearfix">
                    <li>
                      <a href="blog.html">News </a>
                    </li>
                    <li>
                      <a href="blog-single.html">News Details</a>
                    </li>
                  </ul>
                </li>
                {/* <li className="dropdown">
                  <a href="%21.html#">Others</a>
                  <ul className="dropdown-menu clearfix">
                    <li>
                      <a href="portfolio.html">Portfolio </a>
                    </li>
                    <li>
                      <a href="404.html">404 Page </a>
                    </li>
                    <li>
                      <a href="portfolio-single.html">Portfolio Details</a>
                    </li>
                  </ul>
                </li> */}
              </ul>
            </nav>
            <div className="menu-side-option float-right d-flex">
              {/* <div className="tel-head-search">
                <button className="search-box-outer">
                  <i className="flaticon-loupe"></i>
                </button>
              </div> */}
              {/* <div className="tel-head-cart position-relative">
                <button className="cart-dropdown">
                  <i className="flaticon-cart"></i>
                </button>
                <div className="cart-dropdown-wrapper">
                  <div className="cart-dropdown-product headline">
                    <div className="dropdown-cart-top clearfix">
                      <h2 className="float-left">3 items</h2>
                      <h3 className="float-right">
                        <a href="#">View cart</a>
                      </h3>
                    </div>
                    <div className="dropdown-product-inner clearfix">
                      <div className="inner-product-img position-relative float-left">
                        <Image src={cd1} alt="" />
                        <a
                          className="product-remove-btn text-center d-inline-block"
                          href="#"
                        >
                          <i className="flaticon-close"></i>
                        </a>
                      </div>
                      <div className="inner-product-text text-uppercase">
                        <h4>
                          <a href="#">Mega Deal Iteam</a>
                        </h4>
                        <span className="drop-product-q">1</span>{" "}
                        <span className="drop-product-price">x $135.00</span>
                      </div>
                    </div>
                    <div className="dropdown-product-inner clearfix">
                      <div className="inner-product-img position-relative float-left">
<Image src="assets/img/shop/cd2.jpg" alt=""/> 
                        <a
                          className="product-remove-btn text-center d-inline-block"
                          href="#"
                        >
                          <i className="flaticon-close"></i>
                        </a>
                      </div>
                      <div className="inner-product-text text-uppercase">
                        <h4>
                          <a href="#">Mega Deal Iteam</a>
                        </h4>
                        <span className="drop-product-q">1</span>{" "}
                        <span className="drop-product-price">x $135.00</span>
                      </div>
                    </div>
                    <div className="dropdown-product-inner clearfix">
                      <div className="inner-product-img position-relative float-left">
                        <Image src="assets/img/shop/cd3.jpg" alt=""/> 
                        <a
                          className="product-remove-btn text-center d-inline-block"
                          href="#"
                        >
                          <i className="flaticon-close"></i>
                        </a>
                      </div>
                      <div className="inner-product-text text-uppercase">
                        <h4>
                          <a href="#">Mega Deal Iteam</a>
                        </h4>
                        <span className="drop-product-q">1</span>{" "}
                        <span className="drop-product-price">x $135.00</span>
                      </div>
                    </div>
                    <div className="cart-bottom-wrap text-uppercase clearfix">
                      <span className="float-left">Subtotal:</span>
                      <span className="float-right">$350.22</span>
                    </div>
                    <div className="dropdown-checkout text-center text-uppercase">
                      <a href="#">Check out</a>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="tel-head-sidebar">
                <button className="sidebar-switcher">
                  <i className="flaticon-menu"></i>
                </button>
              </div>
            </div>
            <div onClick={addClass} className="mobile_menu position-relative">
              <div className="mobile_menu_button open_mobile_menu">
                <i  className="flaticon-menu"></i>
              </div>
              <div
                className={`mobile_menu_wrap ${
                  active ? "mobile_menu_on" : ""
                } `}
                
              >
                <div className="mobile_menu_overlay open_mobile_menu"></div>
                <div className="mobile_menu_content">
                  <div className="mobile_menu_close open_mobile_menu">
                    <i className="flaticon-close"></i>
                  </div>
                  <div className="m-brand-logo">
                    {/* <a href="%21.html#"><Image src="assets/img/logo/logo1.png" alt=""/></a> */}
                  </div>
                  <nav className="mobile-main-navigation  clearfix ul-li">
                    <ul
                      id="m-main-nav"
                      className="navbar-nav text-capitalize clearfix"
                    >
                      <li className="dropdown">
                        <a href="%21.html#">Home</a>
                        <ul className="dropdown-menu clearfix">
                          <li>
                            <a href="index-7.html">Home Page 1</a>
                          </li>
                          <li className="dropdown">
                            <a href="index-2.html">Home Page 2</a>
                            <ul className="dropdown-menu clearfix">
                              <li>
                                <a href="#">Example v.1 </a>
                              </li>
                              <li>
                                <a href="#">Example v.2</a>
                              </li>
                              <li>
                                <a href="#">Example v.3</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="index-3.html">Home Page 3</a>
                          </li>
                          <li>
                            <a href="index-4.html">Home Page 4</a>
                          </li>
                          <li>
                            <a href="index-5.html">Home Page 5</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li className="dropdown">
                        <a href="%21.html#">Shop</a>
                        <ul className="dropdown-menu clearfix">
                          <li>
                            <a href="shop.html">Shop Page </a>
                          </li>
                          <li>
                            <a href="shop-single.html">Shop Details</a>
                          </li>
                          <li>
                            <a href="cart.html">Cart Page</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="%21.html#">Pages</a>
                        <ul className="dropdown-menu clearfix">
                          <li>
                            <a href="service.html">Services</a>
                          </li>
                          <li>
                            <a href="team.html">Team Page</a>
                          </li>
                          <li>
                            <a href="team-single.html">Team Details</a>
                          </li>
                          <li>
                            <a href="faq.html">FAQ Page</a>
                          </li>
                          <li>
                            <a href="service-single.html">Service Details</a>
                          </li>
                          <li>
                            <a href="contact.html">Contact Page</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="%21.html#">News</a>
                        <ul className="dropdown-menu clearfix">
                          <li>
                            <a href="blog.html">News </a>
                          </li>
                          <li>
                            <a href="blog-single.html">News Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="%21.html#">Others</a>
                        <ul className="dropdown-menu clearfix">
                          <li>
                            <a href="portfolio.html">Portfolio </a>
                          </li>
                          <li>
                            <a href="404.html">404 Page </a>
                          </li>
                          <li>
                            <a href="portfolio-single.html">
                              Portfolio Details
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="taeled-side-inner">
          <div className="sidebar-overlay"></div>
          <span className="siderbar-off-btn sidebar-switcher">
            <i className="flaticon-close"></i>
          </span>
          <div className="side-inner-wrapper">
            <div className="side-inner-logo text-center">
              <a href="#">
                <Image src={flogo1} alt="" />
              </a>
            </div>
            <div className="side-inner-text headline pera-content">
              <h3>About us.</h3>
              <p>
                Our designers stay ahead of the curve to provide engaging and
                user friendly website designs to make.Our designers stay ahead
                of the curve to provide engaging and user friendly website
                designs to make.Our designers stay ahead of the curve to provide
                engaging and user friendly website designs to make.
              </p>
              <h3>Contact us.</h3>
              <div className="side-contact-wrap">
                <a href="#">
                  <i className="fas fa-phone"></i>{" "}
                  <span> +987 876 765 65 6</span>
                </a>
                <a href="#">
                  <i className="fas fa-envelope"></i>{" "}
                  <span> info@webmail.com</span>
                </a>
                <a href="#">
                  <i className="fas fa-map-marker-alt"></i>{" "}
                  <span>23/A, pro street city, nyc</span>
                </a>
              </div>
              <div className="side-follow-icon text-center text-uppercase">
                <a href="#">Fb</a>
                <a href="#">tw</a>
                <a href="#">Yu</a>
                <a href="#">Be</a>
                <a href="#">li</a>
              </div>
            </div>
          </div>
        </div>
        <div className="search-popup">
          <button className="close-search style-two">
            <span className="flaticon-close"></span>
          </button>
          <button className="close-search">
            <span className="fa fa-arrow-up"></span>
          </button>
          <form
            method="post"
            action="https://html.themexriver.com/taeled-demo/blog.html"
          >
            <div className="form-group">
              <input
                type="search"
                name="search-field"
                placeholder="Search Here"
                required=""
              />
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </form>
        </div>
      </header>
      {/* {/*End of header section */}
      {/* ============================================= *?}

	{/*Start of slider section
		============================================= *?} */}
      <section
        id="slider"
        className="slider-section slider-style-three position-relative"
      >
        <div className="slider-wrapper-three position-relative">
          <div className="slider-bg-text text-uppercase position-absolute">
            Creative
          </div>
          <div
            className="slider-deco1 position-absolute"
            data-parallax='{"y" : 100, "rotateY":500}'
          >
            <Image src={ps1} alt="" />
          </div>
          <div
            className="slider-deco2 position-absolute"
            data-parallax='{"y" : -100, "rotateY":-200}'
          >
            <Image src={ps2} alt="" />
          </div>
          <div
            className="slider-deco3 position-absolute"
            data-parallax='{"x" : 100}'
          >
            <Image src={ps3} alt="" />
          </div>
          <div className="slider-banner-img position-absolute">
            <Image src={sbg1} alt="" />
          </div>
          <div className="container">
            <div
              id="slider-main"
              className="slider-main-wrap headline pera-content"
            >
              <div className="">
                <div className="max-w-[850px] ">
                  <span className="text-white lg:text-[18px] relatve pr-[40px]">
                    Digital Marketing
                  </span>
                  <span className="text-white lg:text-[18px] relatve pr-[40px]">
                    Social Media Handling
                  </span>
                  <span className="text-white lg:text-[18px] relatve pr-[40px]">
                    Web Design/Development
                  </span>
                </div>
                <h1 className="bg-[#FF4A16] pl-0 py-4 uppercase text-[40px] lg:text-[100px] text-white font-bold max-w-[70%]">
                  Creative agency
                </h1>
                <p className="lg:text-[18px] text-white max-w-[550px]">
                  <span>
                    We see our mission in creating new meaningful stories. We
                    believe that to stand out
                  </span>{" "}
                  have to stand up. To be – you have to be it.
                </p>
                <div className="slider-btn py-10">
                  <div className="taeled-btn text-center position-relative text-uppercase">
                    <a href="#">
                      Services<i className="fas fa-arrow-right "></i>
                    </a>
                  </div>
                  {/* <div className="taeled-btn text-center position-relative text-uppercase">
                    <a href="#">
                      Learn More <i className="fas fa-arrow-right"></i>
                    </a>
                  </div> */}
                </div>
              </div>
              {/* <div className="slider-text-wrap ">
                <div className="slider-tag-item">
                  <span>Branding</span>
                  <span>UI & UX Design</span>
                  <span>Product Development</span>
                </div>
                <h1>Digital agency</h1>
                <p>
                  <span>
                    We see our mission in creating new meaningful stories. We
                    believe that to stand out
                  </span>{" "}
                  have to stand up. To be – you have to be it.
                </p>
                <div className="slider-btn">
                  <div className="taeled-btn text-center position-relative text-uppercase">
                    <a href="#">
                      Learn More <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                  <div className="taeled-btn text-center position-relative text-uppercase">
                    <a href="#">
                      Learn More <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="slider-text-wrap">
                <div className="slider-tag-item">
                  <span>Branding</span>
                  <span>UI & UX Design</span>
                  <span>Product Development</span>
                </div>
                <h1>Dgital agency</h1>
                <p>
                  <span>
                    We see our mission in creating new meaningful stories. We
                    believe that to stand out
                  </span>{" "}
                  have to stand up. To be – you have to be it.
                </p>
                <div className="slider-btn">
                  <div className="taeled-btn text-center position-relative text-uppercase">
                    <a href="#">
                      Learn More <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                  <div className="taeled-btn text-center position-relative text-uppercase">
                    <a href="#">
                      Learn More <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="slider-text-wrap">
                <div className="slider-tag-item">
                  <span>Branding</span>
                  <span>UI & UX Design</span>
                  <span>Product Development</span>
                </div>
                <h1>Dgital agency</h1>
                <p>
                  <span>
                    We see our mission in creating new meaningful stories. We
                    believe that to stand out
                  </span>{" "}
                  have to stand up. To be – you have to be it.
                </p>
                <div className="slider-btn">
                  <div className="taeled-btn text-center position-relative text-uppercase">
                    <a href="#">
                      Learn More <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                  <div className="taeled-btn text-center position-relative text-uppercase">
                    <a href="#">
                      Learn More <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* {/*End of slider section
		============================================= *?}

	{/*Start of about section
		============================================= *?}					 */}
      <section id="about-3" className="about-section-3">
        <div className="container">
          <div className="about-content-3">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-img-wrap position-relative">
                  <span className="img-shape position-absolute">
                    <Image src={abs1} alt="" />
                  </span>
                  <span className="img-shape position-absolute">
                    <Image src={abs2} alt="" />
                  </span>
                  <Image src={abs3} alt="" />
                  <div className="about-img-bottom">
                    <Image src={abs4} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-text-wrapper">
                  <div className="section-title  headline">
                    <span>About Us</span>
                    <h2>Few Reason Why You Should Choose Us.</h2>
                  </div>
                  <div className="about-text-details">
                    We are passionate about our work. Our designers stay ahead
                    of the curve to provide engaging and user-friendly website
                    designs to make your business stand out with your business
                    pattern stay ahead.
                  </div>
                  <div className="about-mission-vission clearfix">
                    <div className="ab-mission-vission-wrap headline pera-content position-relative">
                      <span className="icon-bg position-absolute">
                        <i className="flaticon-growth"></i>
                      </span>
                      <h3 className="text-uppercase">
                        <a href="#">Business Growth</a>
                      </h3>
                      <p>
                        We are passionate about our work. Our of the curve to
                        engaging & userfriendly website to make it easy.{" "}
                      </p>
                    </div>
                    <div className="ab-mission-vission-wrap headline pera-content position-relative">
                      <span className="icon-bg position-absolute">
                        <i className="flaticon-settings"></i>
                      </span>
                      <h3 className="text-uppercase">
                        <a href="#">our missions</a>
                      </h3>
                      <p>
                        We are passionate about our work. Our of the curve to
                        engaging & userfriendly website to make it easy.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* {/*End of about section
		============================================= *?}

	{/*Start of Service section
		============================================= *?}			 */}
      <section
        id="service-3"
        className="service-section-3"
        data-background="assets/img/banner/sbg.png"
        style={{ backgroundImage: `url('/assets/img/banner/sbg.png')` }}
      >
        <div className="container">
          <div className="section-title text-center headline">
            <span>Services</span>
            <h2>Expand Your Digital Presence with US.</h2>
          </div>
          <div className="service-content-3">
            <div className="row">
              <div className="col-lg-6">
                <div className="service-innerbox-wrap clearfix position-relative">
                  <span className="service-serial position-absolute">01</span>
                  <div className="service-inner-icon text-center float-left">
                    <Image src={sicon1} alt="" />
                  </div>
                  <div className="service-inner-text headline pera-content">
                    <h3>
                      <a href="#">Digital Marketing </a>
                    </h3>
                    <p>
                      Elevate your digital reach with our tailored marketing
                      strategies. From SEO optimization and engaging social
                      media campaigns to data-driven insights, we empower your
                      brand to stand out in the digital landscape and achieve
                      your business goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="service-innerbox-wrap clearfix position-relative">
                  <span className="service-serial position-absolute">02</span>
                  <div className="service-inner-icon text-center float-left">
                    <Image src={sicon2} alt="" />
                  </div>
                  <div className="service-inner-text headline pera-content">
                    <h3>
                      <a href="#">Web Design & Development</a>
                    </h3>
                    <p>
                      Transform your brand's online presence with our innovative
                      web design and development. We blend stunning aesthetics
                      with cutting-edge technology to create responsive,
                      user-friendly websites that captivate your audience and
                      drive results.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="service-innerbox-wrap clearfix position-relative">
                  <span className="service-serial position-absolute">03</span>
                  <div className="service-inner-icon text-center float-left">
                    <Image src={sicon3} alt="" />
                  </div>
                  <div className="service-inner-text headline pera-content">
                    <h3>
                      <a href="#">Content Creation</a>
                    </h3>
                    <p>
                      Every brand has a story to tell, and we're here to bring
                      yours to life. Our talented content creators craft
                      compelling narratives across various mediums, from
                      captivating articles and videos to immersive graphics,
                      ensuring your brand's voice is heard.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="service-innerbox-wrap clearfix position-relative">
                  <span className="service-serial position-absolute">04</span>
                  <div className="service-inner-icon text-center float-left">
                    <Image src={sicon4} alt="" />
                  </div>
                  <div className="service-inner-text headline pera-content">
                    <h3>
                      <a href="#">Social Media Handling & Engagement</a>
                    </h3>
                    <p>
                      Take your brand's social media to the next level. From
                      crafting compelling content to managing interactions and
                      analyzing , we ensure your social presence is engaging,
                      relevant and influential.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skill" className="skill-section">
        <div className="container">
          <div className="skill-content-wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="skill-progress-text">
                  <div className="section-title  headline">
                    <span>Our Skills</span>
                    <h2>Broaden Your Digital Footprint and boost Growth.</h2>
                  </div>
                  <div className="skill-text-details">
                    We are passionate about our work. Our designers stay ahead
                    of the curve to provide engaging and user-friendly website
                    designs to make your business stand out with your business
                    pattern.
                  </div>
                  <div className="skill-progress-bar">
                    <div className="skill-set-percent headline">
                      <h4>Digital strategy</h4>
                      <div className="progress">
                        <div className="progress-bar" data-percent="2"></div>
                      </div>
                    </div>
                    <div className="skill-set-percent headline">
                      <h4>Digital productivity</h4>
                      <div className="progress">
                        <div className="progress-bar" data-percent="85"></div>
                      </div>
                    </div>
                    <div className="skill-set-percent headline">
                      <h4>Digital planning</h4>
                      <div className="progress">
                        <div className="progress-bar" data-percent="75"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="skill-side-img">
                  <Image src={sk1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="feature-2" className="feature-section-2">
        <div className="feature-content-3">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="feature-innerbox-area position-relative">
                <span className="icon-bg position-absolute">
                  <i className="flaticon-career"></i>
                </span>
                <div className="feature-box-icon d-inline-block position-relative">
                  <i className="flaticon-career"></i>
                </div>
                <div className="feature-box-text">
                  Want to jump islands? Happy to hear more about you at{" "}
                  <a href="#">Nexuscraftagency@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-innerbox-area position-relative">
                <span className="icon-bg position-absolute">
                  <i className="flaticon-reading"></i>
                </span>
                <div className="feature-box-icon d-inline-block position-relative">
                  <i className="flaticon-reading"></i>
                </div>
                <div className="feature-box-text">
                  Read about design, technology and culture on our insightful
                  Medium page. <a href="#">News & Feeds</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-innerbox-area position-relative">
                <span className="icon-bg position-absolute">
                  <i className="flaticon-megaphone"></i>
                </span>
                <div className="feature-box-icon d-inline-block position-relative">
                  <i className="flaticon-megaphone"></i>
                </div>
                <div className="feature-box-text">
                  Stay connect with us & you can follow us on social{" "}
                  <a href="#">Instagram, Facebook, Youtube</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-innerbox-area position-relative">
                <span className="icon-bg position-absolute">
                  <i className="flaticon-location"></i>
                </span>
                <div className="feature-box-icon d-inline-block position-relative">
                  <i className="flaticon-location"></i>
                </div>
                <div className="feature-box-text">
                  Normally we are based on out of the world like alien ship{" "}
                  <a href="#">Aluva, Kochi, Kerala</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 
      <section id="team" className="team-section">
        <div className="container">
          <div className="section-title text-center headline">
            <span>Team</span>
            <h2>Meet With Our sweet & Amazing Team.</h2>
          </div>
          <div className="team-content-wrapper">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="team-img-text-wrapper text-center">
                  <div className="team-member-img position-relative">
                    // <Image src="assets/img/team/tm1.jpg" alt=""/>
                    <div className="member-social-btn">
                      <div className="member-social-icon ul-li-block">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-behance"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="team-member-text headline">
                    <span className="team-degi">Founder</span>
                    <h3 className="text-uppercase">Ajesh</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="team-img-text-wrapper text-center">
                  <div className="team-member-img position-relative">
                    // <Image src="assets/img/team/tm2.jpg" alt=""/>
                    <div className="member-social-btn">
                      <div className="member-social-icon ul-li-block">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-behance"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="team-member-text headline">
                    <span className="team-degi">CEO</span>
                    <h3 className="text-uppercase">Machu</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="team-img-text-wrapper text-center">
                  <div className="team-member-img position-relative">
                    // <Image src="assets/img/team/tm3.jpg" alt=""/>
                    <div className="member-social-btn">
                      <div className="member-social-icon ul-li-block">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-behance"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="team-member-text headline">
                    <span className="team-degi">Designer</span>
                    <h3 className="text-uppercase">Gokul</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="team-img-text-wrapper text-center">
                  <div className="team-member-img position-relative">
                    // <Image src="assets/img/team/tm4.jpg" alt=""/>
                    <div className="member-social-btn">
                      <div className="member-social-icon ul-li-block">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-behance"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="team-member-text headline">
                    <span className="team-degi">Digital Marketer</span>
                    <h3 className="text-uppercase">Ajay</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="testimonial-2" className="testimonial-section-2">
        <div className="container">
          <div className="section-title text-center headline">
            <span>Testimonials</span>
            <h2>Happy client says about us.</h2>
          </div>
          <div className="testimonial-content-wrapper-2 position-relative">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="testimonial-carousel-indicator clearfix">
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  >
                    {/* // <Image src="assets/img/testimonial/tsn1.jpg" alt=""/> */}
                  </li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  >
                    {/* // <Image src="assets/img/testimonial/tsn2.jpg" alt=""/> */}
                  </li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  >
                    {/* // <Image src="assets/img/testimonial/tsn3.jpg" alt=""/> */}
                  </li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="3"
                  >
                    {/* // <Image src="assets/img/testimonial/tsn4.jpg" alt=""/> */}
                  </li>
                </ol>
              </div>
              <div className="carousel-inner relative-position">
                <div className="carousel-item active">
                  <div className="testimonial-inner-wrap position-relative clearfix">
                    <div className="testimonial-img float-left">
                      {/* // <Image src="assets/img/testimonial/tst1.jpg" alt=""/> */}
                    </div>
                    <div className="testimonial-text d-inline-block position-relative">
                      <span>
                        Working with Nexus Craft has been a game-changer for our
                        brand. Their creativity and dedication transformed our
                        vision into a stunning reality. From logo design to web
                        development, every step was seamless. Highly
                        recommended!
                      </span>
                      <div className="testimonial-author text-uppercase headline pera-content">
                        <h3>
                          <a href="#">Madhu</a>
                        </h3>
                        <p>Dr Vision Opticals</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="testimonial-inner-wrap position-relative clearfix">
                    <div className="testimonial-img float-left">
                      {/* // <Image src="assets/img/testimonial/tst1.jpg" alt=""/> */}
                    </div>
                    <div className="testimonial-text d-inline-block  position-relative">
                      <span>
                        Nexus Craft is a creative powerhouse! Their strategic
                        approach to digital marketing took our business to new
                        heights. The results were outstanding - increased
                        traffic, engagement, and conversions.
                      </span>
                      <div className="testimonial-author text-uppercase headline pera-content">
                        <h3>
                          <a href="#">Miranda H. Kilixer</a>
                        </h3>
                        <p>Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="testimonial-inner-wrap position-relative clearfix">
                    <div className="testimonial-img float-left">
                      {/* // <Image src="assets/img/testimonial/tst1.jpg" alt=""/> */}
                    </div>
                    <div className="testimonial-text d-inline-block  position-relative">
                      <span>
                        The team's professionalism and attention to detail made
                        the entire process smooth. Thanks to Nexus Craft, we now
                        have a captivating online presence that resonates with
                        our audience.
                      </span>
                      <div className="testimonial-author text-uppercase headline pera-content">
                        <h3>
                          <a href="#">Miranda H. Kilixer</a>
                        </h3>
                        <p>Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="testimonial-inner-wrap position-relative clearfix">
                    <div className="testimonial-img float-left">
                      {/* // <Image src="assets/img/testimonial/tst1.jpg" alt=""/> */}
                    </div>
                    <div className="testimonial-text d-inline-block text-uppercase position-relative">
                      <span>
                        We are passionate about our work. Our designers stay
                        ahead of the curve to provide engaging and
                        user-friendly.
                      </span>
                      <div className="testimonial-author text-uppercase headline pera-content">
                        <h3>
                          <a href="#">Miranda H. Kilixer</a>
                        </h3>
                        <p>Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-btn-2">
                <a
                  className="testimonial-slider-btn2 carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  Prev
                </a>
                <a
                  className="testimonial-slider-btn2 carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  Next
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-2" className="contact-section-2 position-relative">
        <span className="contact-bg-img position-absolute">
          <Image src={dotmap} />
        </span>
        <div className="container">
          <div className="contact-content-innerbox">
            <div className="section-title headline">
              <span>Get In Touch</span>
              <h2>Contact Us.</h2>
            </div>
            <div className="contact-form-wrapper">
              <form
                action="https://html.themexriver.com/taeled-demo/mail.php"
                method="post"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="contact-info position-relative">
                      <input
                        className="email"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                      />
                      <div className="icon-bg position-absolute">
                        <i className="far fa-user"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="contact-info position-relative">
                      <input
                        className="name"
                        name="Email"
                        type="email"
                        placeholder="Enter your email"
                      />
                      <div className="icon-bg position-absolute">
                        <i className="far fa-envelope"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="contact-info position-relative">
                      <input
                        className="email"
                        name="phone"
                        type="text"
                        placeholder="Enter your phone"
                      />
                      <div className="icon-bg position-absolute">
                        <i className="fas fa-phone"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="contact-info position-relative">
                      <input
                        className="email"
                        name="subject"
                        type="text"
                        placeholder="Enter Suject"
                      />
                      <div className="icon-bg position-absolute">
                        <i className="fas fa-arrow-down"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="contact-info position-relative">
                      <textarea
                        name="message"
                        placeholder="ENTER message"
                      ></textarea>
                      <div className="icon-bg position-absolute">
                        <i className="far fa-edit"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="taeled-btn text-center position-relative text-uppercase">
                  <button type="submit ">
                    Submit quote <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="contact-location clearfix">
            <div className="contact-map-location">
              <div className="td-maplocation">
                <div className="td-location-iiner">
                  <div className="td-location-img-text d-flex">
                    <div className="td-location-img">
                      {/* <Image src="assets/img/misc/loc-img.jpg" alt=""/> */}
                    </div>
                    <div className="td-location-text headline">
                      <h3>Aluva, Kochi, Kerala</h3>
                      <a href="#">
                        <i className="fas fa-phone"></i> +91 6238483581
                      </a>
                      <a href="#">
                        <i className="fas fa-envelope"></i>{" "}
                        Nexuscraftagency@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="td-location-indicatior relative-position">
                  <div className="td-indicator-border1"></div>
                  <div className="td-indicator-border2"></div>
                </div>
              </div>
              <div className="td-maplocation">
                <div className="td-location-iiner">
                  <div className="td-location-img-text d-flex">
                    <div className="td-location-img">
                      <Image src={locimg} alt="" />
                    </div>
                    <div className="td-location-text headline">
                      <h3>New York, nyc</h3>
                      <a href="#">
                        <i className="fas fa-phone"></i> +098 987 876 765 87
                      </a>
                      <a href="#">
                        <i className="fas fa-envelope"></i> info@webmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="td-location-indicatior relative-position">
                  <div className="td-indicator-border1"></div>
                  <div className="td-indicator-border2"></div>
                </div>
              </div>
              <div className="td-maplocation">
                <div className="td-location-iiner">
                  <div className="td-location-img-text d-flex">
                    <div className="td-location-img">
                      {/* // <Image src="assets/img/misc/loc-img.jpg" alt=""/> */}
                    </div>
                    <div className="td-location-text headline">
                      <h3>New York, nyc</h3>
                      <a href="#">
                        <i className="fas fa-phone"></i> +098 987 876 765 87
                      </a>
                      <a href="#">
                        <i className="fas fa-envelope"></i> info@webmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="td-location-indicatior relative-position">
                  <div className="td-indicator-border1"></div>
                  <div className="td-indicator-border2"></div>
                </div>
              </div>
              <div className="td-maplocation">
                <div className="td-location-iiner">
                  <div className="td-location-img-text d-flex">
                    <div className="td-location-img">
                      {/* // <Image src="assets/img/misc/loc-img.jpg" alt=""/> */}
                    </div>
                    <div className="td-location-text headline">
                      <h3>New York, nyc</h3>
                      <a href="#">
                        <i className="fas fa-phone"></i> +098 987 876 765 87
                      </a>
                      <a href="#">
                        <i className="fas fa-envelope"></i> info@webmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="td-location-indicatior relative-position">
                  <div className="td-indicator-border1"></div>
                  <div className="td-indicator-border2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section id="blog-2" className="blog-section-2">
        <div className="container">
          <div className="section-title text-center headline">
            <span>News Feeds</span>
            <h2>Blog insights</h2>
          </div>
          <div className="blog-content-area">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="blog-img-text-innerbox">
                  <div className="blog-feed-img">
                    // <Image src="assets/img/blog/b5.jpg" alt=""/>
                  </div>
                  <div className="blog-text-wrap text-uppercase headline">
                    <div className="blog-post-meta">
                      <a href="#">business</a>
                      <a href="#">24th march 2020</a>
                    </div>
                    <h3>
                      <a href="#">
                        Be the brand that stands out. Meet our creative
                      </a>
                    </h3>
                    <div className="taeled-btn text-center position-relative text-uppercase">
                      <a href="#">
                        Learn More <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="blog-img-text-innerbox">
                  <div className="blog-feed-img">
                    // <Image src="assets/img/blog/b6.jpg" alt=""/>
                  </div>
                  <div className="blog-text-wrap text-uppercase headline">
                    <div className="blog-post-meta">
                      <a href="#">business</a>
                      <a href="#">24th march 2020</a>
                    </div>
                    <h3>
                      <a href="#">
                        Be the brand that stands out. Meet our creative
                      </a>
                    </h3>
                    <div className="taeled-btn text-center position-relative text-uppercase">
                      <a href="#">
                        Learn More <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="blog-img-text-innerbox">
                  <div className="blog-feed-img">
                    // <Image src="assets/img/blog/b7.jpg" alt=""/>
                  </div>
                  <div className="blog-text-wrap text-uppercase headline">
                    <div className="blog-post-meta">
                      <a href="#">business</a>
                      <a href="#">24th march 2020</a>
                    </div>
                    <h3>
                      <a href="#">
                        Be the brand that stands out. Meet our creative
                      </a>
                    </h3>
                    <div className="taeled-btn text-center position-relative text-uppercase">
                      <a href="#">
                        Learn More <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <footer id="footer-area" className="footer-section-3">
        <div className="footer-widget-wrapper">
          <div className="container">
            <div className="footer-widget-content">
              <div className="row">
                <div className="col-lg-4">
                  <div className="footer-widget headline clearfix ul-li">
                    <div className="footer-menu">
                      <h3 className="widget-title position-relative text-uppercase">
                        Services
                      </h3>
                      <ul>
                        {/* <li>
                          <a href="#">Industrial Design</a>
                        </li>
                        <li>
                          <a href="#">Commercial Interior </a>
                        </li>
                        <li>
                          <a href="#">Residencial Interior </a>
                        </li>
                        <li>
                          <a href="#">Detailed & Phased </a>
                        </li>
                        <li>
                          <a href="#">Apartment Exterior </a>
                        </li> */}
                        <li>
                          <a href="#">Graphic Design</a>
                        </li>
                        <li>
                          <a href="#">UX Development </a>
                        </li>
                        <li>
                          <a href="#">Web Development</a>
                        </li>
                        <li>
                          <a href="#">Digital Marketing</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="footer-widget headline">
                    <h3 className="widget-title position-relative text-uppercase">
                      Contact Us
                    </h3>
                    <div className="contact-widget">
                      <div className="contact-icon-text">
                        <div className="w-contact-icon float-left">
                          <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="w-contact-text">
                          Aluva, Kochi, Kerala
                        </div>
                      </div>
                      <div className="contact-icon-text">
                        <div className="w-contact-icon float-left">
                          <i className="fas fa-phone"></i>
                        </div>
                        <div className="w-contact-text">
                          +91 6238 483 581 <br /> +91 90744 11689
                        </div>
                      </div>
                      <div className="contact-icon-text">
                        <div className="w-contact-icon float-left">
                          <i className="far fa-envelope-open"></i>
                        </div>
                        <div className="w-contact-text">
                          Nexuscraftagency@gmail.com
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  {/* <div className="footer-widget headline ul-li">
                    <div className="f-recent-feed">
                      <h3 className="widget-title position-relative text-uppercase">
                        News feeds
                      </h3>
                      <div className="widget-recent-blog">
                        <div className="widget-blog-img-text">
                          <div className="widget-blog-img float-left">
                            // <Image src="assets/img/blog/wrc1.jpg" alt=""/>
                          </div>
                          <div className="widget-blog-text text-uppercase">
                            <div className="blog-meta text-uppercase">
                              <a href="#">business</a>
                              <a href="#">24th march 2020</a>
                            </div>
                            <h4>
                              <a href="#">
                                Be the brand that stands out. Meet our creative
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="widget-blog-img-text">
                          <div className="widget-blog-img float-left">
                            // <Image src="assets/img/blog/wrc2.jpg" alt=""/>
                          </div>
                          <div className="widget-blog-text text-uppercase">
                            <div className="blog-meta text-uppercase">
                              <a href="#">business</a>
                              <a href="#">24th march 2020</a>
                            </div>
                            <h4>
                              <a href="#">
                                Be the brand that stands out. Meet our creative
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-area clearfix">
          <div className="container">
            <div className="footer-bottom-menu text-uppercase">
              {/* <a href="#">Terms & conditions</a> */}
              {/* <a href="#">Refund policy</a> */}
              {/* <a href="#">privacy policy</a> */}
            </div>
            <div className="footer-bottom-copyright text-uppercase headline">
              <h4></h4>
            </div>
          </div>
        </div>
      </footer>
      {/* {/*End of Footer section
		============================================= *?}	

		{/*For Js Library *?} */}
      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <script src="assets/js/popper.min.js"></script>
      <script src="assets/js/owl.carousel.min.js"></script>
      <script src="assets/js/jarallax.js"></script>
      <script src="assets/js/jquery.magnific-popup.min.js"></script>
      <script src="assets/js/appear.js"></script>
      <script src="assets/js/waypoints.min.js"></script>
      <script src="assets/js/jquery.counterup.min.js"></script>
      <script src="assets/js/tilt.jquery.min.js"></script>
      <script src="assets/js/knob.js"></script>
      <script src="assets/js/parallax-scroll.js"></script>
      <script src="assets/js/masonry.pkgd.min.js"></script>
      <script src="assets/js/imagesloaded.pkgd.min.js"></script>
      <script src="assets/js/slick.js"></script>
      <script src="assets/js/wow.min.js"></script>
      <script src="assets/js/script.js"></script>
    </div>
  );
}

export default page;
