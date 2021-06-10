import React from 'react';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const SocialShare = [
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/asisoybaq/'},
    {Social: <FaWhatsapp /> , link: 'https://api.whatsapp.com/send?phone=+573243310163&text=%C2%A1Hola!%20Estoy%20interesada%20en%20una%20prenda'},
]

const FooterThree = () => {
    return (
        <div className="footer-style-3 pt--100 pb--30 bg_image--35">
            <div className="wrapper">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-12">
                        <div className="inner text-center">
                            {/* <div className="callto-action-area">
                                <h2 className="title text-white mb--25">Interested you <br /> working with us.</h2>
                                <div className="contact-btn">
                                    <a className="btn-default"  target="_blank" href="https://api.whatsapp.com/send?phone=+573243310163&text=%C2%A1Hola!%20Estoy%20interesada%20en%20una%20prenda">Charlemos un poco!</a>
                                </div>
                            </div> */}
                            <div className="logo">
                                <a href="/home-one">
                                    <img src="/assets/images/logo/asi_soy_transp_negro.png" alt="Logo images"/>
                                </a>
                            </div>
                            <ul className="social-share d-flex justify-content-center liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a target='_blank' href={`${val.link}`}>{val.Social}</a></li>
                                ))}
                            </ul>
                            <div className="text mt--20">
                                <p>© 2021 <a target="_blank" href="http://www.fckingbrandme.com/">Fcking Brand Me</a>. Todos los derechos reservados.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterThree;