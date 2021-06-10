import React, { Component , Fragment } from "react";
import Slider from "react-slick";
import { slickDot } from "../page-demo/script";
import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';
import ScrollToTop from 'react-scroll-up';
import Particles from 'react-particles-js';
import { FiChevronUp , FiX , FiMenu, FiCheck } from "react-icons/fi";
import Testimonial from "../elements/Testimonial";
import BlogContent from "../elements/blog/BlogContent";
import FooterThree from "../component/footer/FooterThree";
import Contact from "../elements/contact/ContactTwo";
import Helmet from "../component/common/Helmet";

const Portfolio_image = <img src="/assets/images/portfolio/interior/portfolio-15.jpg" alt="React Creative Agency" />;
const Portfolio_image2 = <img src="/assets/images/portfolio/interior/portfolio-12.jpg" alt="React Creative Agency" />;
const Portfolio_image3 = <img src="/assets/images/portfolio/interior/portfolio-13.jpg" alt="React Creative Agency" />;
const Portfolio_image4 = <img src="/assets/images/portfolio/interior/portfolio-14.jpg" alt="React Creative Agency" />;

const SlideList = [
    {
        textPosition: 'text-center',
        category: '',
        title: 'ASÍ SOY',
        description: 'Lo importante de nuestras prendas es la mujer que las viste',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    }
]

const PortfolioList = [
    {
        image: Portfolio_image,
        category: 'Agency',
        title: 'Agency Collection',
        description: 'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit conse ctetur adipiscing elit.'
    },
    {
        image: Portfolio_image2,
        category: 'Home Design',
        title: 'Office Managemnt',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit conse ctetur adipiscing elit.'
    },
    {
        image: Portfolio_image3,
        category: 'Company',
        title: 'Company Inner',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit conse ctetur adipiscing elit.'
    },
    {
        image: Portfolio_image4,
        category: 'Office Interior',
        title: 'Creative Agency',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit conse ctetur adipiscing elit.'
    },
]

class HomeParticles extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        this.stickyHeader = this.stickyHeader.bind(this);

       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded');
        })
    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }
    stickyHeader () {}
   

    render(){
        var namesItemOne = [
            'The Philosophy Of business analytics',
            'Fast-Track Your business',
            'Lies And Damn Lies About business',
        ];

        const PostList = BlogContent.slice(0 , 5);
        
        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 100) {
                document.querySelector('.header--fixed').classList.add('sticky')
            } else{
                document.querySelector('.header--fixed').classList.remove('sticky')
            }
        });

        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        
        return(
            <Fragment>
                <Helmet pageTitle="Home Particles" />

                {/* Start Header Area  */}
                <header className="header-area formobile-menu header--fixed default-color">
                    <div className="header-wrapper" id="header-wrapper">
                        <div className="header-left">
                            <div className="logo">
                                <a href="/">
                                    <img className="logo-1" src="/assets/images/logo/asi_soy_circular.png" alt="Logo Images"/>
                                    <img className="logo-2" src="/assets/images/logo/asi_soy_circular.png" alt="Logo Images"/>
                                </a>
                            </div>
                        </div>
                        <div className="header-right">
                            <nav className="mainmenunav d-lg-block">
                                <Scrollspy className="mainmenu" items={['home', 'about','testimonial', 'contact']} currentClassName="is-current" offset={-200}>
                                    <li><a href="#home">Así soy</a></li>
                                    <li><a href="/about">Somos!</a></li>
                                    <li><a href="#testimonial">Clientes felices</a></li>
                                    <li><a href="#contact">Di hola!</a></li>
                                </Scrollspy>
                            </nav>
                            <div className="header-btn">
                                <a className="btn-default btn-border btn-opacity" target="_blank" href="https://themeforest.net/checkout/from_item/31405042?license=regular">
                                    <span>Buy Now</span>
                                </a>
                            </div>
                            {/* Start Humberger Menu  */}
                            <div className="humberger-menu d-block d-lg-none pl--20 pl_sm--10">
                                <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                            </div>
                            {/* End Humberger Menu  */}
                            <div className="close-menu d-block d-lg-none">
                                <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                            </div>
                        </div>
                    </div>
                </header>
                {/* End Header Area  */}

                {/* Start Slider Area   */}
                <div className="slider-activation slider-creative-agency with-particles" id="home">
                    <div className="frame-layout__particles">
                        <Particles
                            params={{
                                "particles": {
                                    "number": {
                                        "value": 100
                                    },
                                    "size": {
                                        "value": 3
                                    }
                                },
                                "interactivity": {
                                    "events": {
                                        "onhover": {
                                            "enable": true,
                                            "mode": "repulse"
                                        }
                                    }
                                }
                            }}
                        />
                    </div>
                    <div className="im_modern_slider bg_image bg_image--34 ">
                    {/* <a href='https://www.freepik.com/vectors/background'>Background vector created by freepik - www.freepik.com</a> */}
                            {SlideList.map((value , index) => (
                                <div className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center" key={index}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className={`inner ${value.textPosition}`}>
                                                    {value.category ? <span>{value.category}</span> : ''}
                                                    {value.title ? <h1 className="title">{value.title}</h1> : ''}
                                                    {value.description ? <p className="description_style-2">{value.description}</p> : ''}
                                                    {value.buttonText ? <div className="slide-btn"><a className="btn-default btn-large" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                </div>
                {/* End Slider Area   */}
                
                {/* Start Blog Area */}
                <div className="rn-blog-area pt--120 pb--140 bg_image bg_image--35" id="blog">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12">
                                <div className="section-title text-left">
                                    <span className="subtitle"> Aquí empieza tu camino... </span>
                                    <h2 className="title"> Sé tu misma!</h2>
                                    {/* <p className="description">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="row mt--10 rn-slick-dot slick-space-gutter--15 slickdot--20 row--0">
                            <div className="col-lg-12">
                                <Slider {...slickDot}>
                                    {PostList.map((value , i ) => (
                                        <div className="im_box" key={i}>
                                            <div className="thumbnail">
                                                <Link to="/blog-details">
                                                    <img className="w-100" src={`/assets/images/blog/blog-${value.images}.jpg`} alt="Blog Images"/>
                                                </Link>
                                            </div>
                                            <div className="content">
                                                <div className="inner">
                                                    <div className="content_heading">
                                                        <div className="category_list">
                                                            <Link to="/portfolio-details">{value.category}</Link>
                                                        </div>
                                                        <h4 className="title">
                                                            <Link to="/blog-details">{value.title}</Link>
                                                        </h4>
                                                    </div>
                                                    <div className="content_footer">
                                                        <Link to="/blog-details" className="rn-btn btn-opacity">Es pa' mi!</Link>
                                                    </div>
                                                </div>
                                                <Link className="transparent_link" to="/blog-details"></Link>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>    
                    </div>    
                </div>
                {/* End Blog Area */}

                {/* Start Testimonial Area */}
                <div className="rn-testimonial-area bg_image bg_image--35 ptb--120" id="testimonial">
                    <div className="container">
                        <Testimonial />
                    </div>
                </div>
                {/* End Testimonial Area */}

                {/* Start Contact Us */}
                <div className="rn-contact-us ptb--120 bg_image bg_image--36" id="contact">
                    <Contact />
                </div>
                {/* End Contact Us */}

                 {/* Start Footer Style  */}
                 <FooterThree />
                {/* End Footer Style  */}
                
                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

            </Fragment>
        )
    }
}
export default HomeParticles;