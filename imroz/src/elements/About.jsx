import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import { FaFacebookF , FaInstagram , FaTwitter } from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/FooterThree";
import AboutComp from "../component/HomeLayout/homeOne/About";

class About extends Component{
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Así somos!' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Así somos!'}   />
                {/* End Breadcrump Area */}

                {/* Start About Area */}
                <div className="about-area ptb--120 bg_image--1">
                    <AboutComp />
                </div>
                {/* End About Area */}

                {/* Start CounterUp Area */}
                {/*<div className="rn-counterup-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="subtitle">Experts growts</span>
                                    <h2 className="title">Our Company Growth</h2>
                                    <p className="description">We have grown strength over the past 20 years.</p>
                                </div>
                            </div>
                        </div>
                        <CounterOne />
                    </div>
                </div>*/}
                {/* End CounterUp Area */}

                {/* Start Finding Us Area  */}
                {/*<div className="rn-finding-us-area attacment-fixed rn-finding-us ptb--120 bg_color--1 bg_image bg_image--18" data-black-overlay="5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="inner">
                                    <div className="content-wrapper">
                                        <div className="content">
                                            <h4 className="theme-gradient">Find Your Work Now</h4>
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.</p>
                                            <a className="btn-default" href="/about">Get Started</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>*/}
                {/* End Finding Us Area  */}

                {/* Start Team Area  */}
                <div className="rn-team-area bg_image--1 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--25">
                                    <span className="subtitle" id="somos">Conócenos un poco más</span>
                                    <h2 className="title">Así somos</h2>
                                    <p className="description">El super equipo que hace que todo sea posible... <br /> sí, sí, hasta volar.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            
                            {/* Start Single Team  */}
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="team">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/team/team-01.jpg" alt="Blog Images"/>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Monica Rodriguez</h4>
                                        <p className="designation">Nuestra CEO</p>
                                        <p className="designation">Ipsum kkjndsfkndkgjnfnsdzncds kzmflkcznmsd3fnjvzkjdnsc knzslcñkjznsdvñxnjk</p>
                                    </div>
                                    <ul className="social-icon" >
                                        <li><a target='_blank' href="https://www.facebook.com/"><FaFacebookF /></a></li>
                                        <li><a target='_blank' href="https://www.instagram.com/monirodriguez8/"><FaInstagram /></a></li>
                                        {/* <li><a href="https://twitter.com/"><FaTwitter /></a></li> */}
                                    </ul>
                                </div>
                            </div>
                            {/* End Single Team  */}

                            {/* Start Single Team  */}
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="team">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/team/team-02.jpg" alt="Blog Images"/>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Yeiro Andrade</h4>
                                        <p className="designation">Nuestro CEO</p>
                                        <p className="designation">Ipsum kkjndsfkndkgjnf nsdzncdskzmflkcznmsd3fnjvzkjdnsckn zslcñkjznsdvñxnjk</p>
                                    </div> 
                                    <ul className="social-icon" >
                                        <li><a target='_blank' href="https://www.facebook.com/"><FaFacebookF /></a></li>
                                        <li><a target='_blank' href="https://www.instagram.com/andrade_yeiro10/"><FaInstagram /></a></li>
                                        {/* <li><a href="https://twitter.com/"><FaTwitter /></a></li> */}
                                    </ul>
                                </div>
                            </div>
                            {/* End Single Team  */}

                            {/* Start Single Team  */}
                            {/* <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="team">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/team/team-03.jpg" alt="Blog Images"/>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Jone Due</h4>
                                        <p className="designation">Sr. Web Developer</p>
                                    </div>
                                    <ul className="social-icon" >
                                        <li><a href="https://www.facebook.com/"><FaFacebookF /></a></li>
                                        <li><a href="http://linkedin.com/"><FaInstagram /></a></li>
                                        <li><a href="https://twitter.com/"><FaTwitter /></a></li>
                                    </ul>
                                </div>
                            </div> */}
                            {/* End Single Team  */}

                        </div>
                    </div>
                </div>
                {/* End Team Area  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />

            </React.Fragment>
        )
    }
}
export default About