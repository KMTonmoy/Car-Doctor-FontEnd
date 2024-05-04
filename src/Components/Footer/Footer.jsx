import React from 'react';
import Logo from '../../assets/logo.svg'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-black text-white">
                <aside>
                    <img src={Logo} alt="" />
                    <p className='text-xl'>Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .</p>
                    <div className='flex justify-center items-center gap-4'>
                        <button className="btn rounded-full bg-black mt-2 text-white"><FaFacebook /></button>
                        <button className="btn rounded-full bg-black mt-2 text-white"><FaTwitter /></button>
                        <button className="btn rounded-full bg-black mt-2 text-white"><FaLinkedin /></button>
                        <button className="btn rounded-full bg-black mt-2 text-white"><IoLogoInstagram /></button>
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title">About</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Service</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">Why Car Doctor</a>
                    <a className="link link-hover">About</a>

                </nav>
                <nav>
                    <h6 className="footer-title">Support</h6>
                    <a className="link link-hover">Support Center</a>
                    <a className="link link-hover">Feedback</a>
                    <a className="link link-hover">Accesbility</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;