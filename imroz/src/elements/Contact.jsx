import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiPhoneIncoming , FiMail , FiMapPin } from "react-icons/fi";
import GoogleMapReact from 'google-map-react';
import ContactTwo from "../elements/contact/ContactTwo";
import BrandTwo from "../elements/BrandTwo";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import FooterThree from "../component/footer/FooterThree";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contact extends Component{
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Hablemos! 😃📲' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                 {/* Start Breadcrump Area */}
                 <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--35"  data-black-overlay="6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">¡Hablemos de todo un poquito!</h2>
                                    <p> Estamos aquí para ti, para ser parte de tu cambio, para ayudarte a brillar, a irradiar más luz, estamos para escucharte así que sin penita dinos hola! </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}


                {/* Start Contact Top Area  */}
                <div className="rn-contact-top-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title mb--30 text-center">
                                    <span className="subtitle">De la manera que más te guste puedes escribirnos</span>
                                    <h2 className="title">Holi, holi</h2>
                                    <p className="description">¡No somos perfect@s, somos reales! por eso sin miedo dinos todos los cumplidos, mandanos todos los cariñitos o alientanos con cositas bonitas por mejorar, te ayudamos a crecer y tú a nosotros.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiPhoneIncoming />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Escucha nuestra hermosa voz 🥰</h4>
                                        <p><a href="https://api.whatsapp.com/send?phone=+573243310163&text=%C2%A1Hola!%20Estoy%20interesada%20en%20una%20prenda">(+57) 324 331 01 63</a></p>
                                        <p> ☝️ Toca para charlar en WhatsApp</p>
                                        {/* <p><a href="tel:+222 222 222 333">+222 222 222 333</a></p> */}
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMail />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Escríbenos esa cartita de amor!</h4>
                                        <p><a href="mailto:asisoy@gmail.com">asisoy@gmail.com</a></p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMapPin />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Aquí se crea la magia!</h4>
                                        <p>Cra 20 # 47d-36</p>
                                        <p>Barranquilla, Colombia</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                        </div>
                    </div>
                </div>
                {/* End Contact Top Area  */}

                {/* Start Contact Page Area  */}
                <div className="rn-contact-page ptb--120 bg_color--1">
                    <ContactTwo />
                </div>
                {/* End Contact Page Area  */}

                {/* Start Contact Map  */}
                {/* <div className="rn-contact-map-area position-relative">
                    <div style={{ height: '650px', width: '100%' }}>
                        <GoogleMapReact
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                        >
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        />
                        </GoogleMapReact>
                    </div>
                </div> */}
                {/* End Contact Map  */}
                

                {/* Start Brand Area */}
                {/* <div className="rn-brand-area bg_image--38 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* End Brand Area */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <FooterThree />
            </React.Fragment>
        )
    }
}
export default Contact