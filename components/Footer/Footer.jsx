import React from 'react'
import './index.css'
import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { Mine_logo } from '../../public'
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer>
        <div className="footer_container">
            <div className="footer_mail">
                <h2 className="footer_mail_heading">Join our mailing list</h2>
                <form action="" className="footer_form">
                    <div className="footer_form_input">
                        <input type="email" required  />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
            <div className="footer_info">
                <div className="footer_info_imgs">
                    <Image src={Mine_logo} alt='mine logo' className='Logo_mine'/>
                    <p>support@eventvisionary.com</p>
                    <p>Event Visionary, LLC</p>
                    <p>30 N Gould St, Ste R,<br/>
                        Sheridan, WY 82801</p>
                </div>
                <div className="footer_info_links">
                    <b>Quick Links</b>
                    <ul>
                        <li><a href="/SendMessage">Home</a></li>
                        <li><a href="/SendMessage">About</a></li>
                        <li><a href="/SendMessage">Create an Event</a></li>
                        <li><a href="/SendMessage">Organizer Dashboard</a></li>
                        <li><a href="/SendMessage">Pricing</a></li>
                        <li><a href="/SendMessage">Privacy Policy</a></li>
                        <li><a href="/SendMessage">Terms and Conditions</a></li>
                    </ul>
                </div>
                <div className="footer_info_follow">
                    <b>Follow Us.</b>
                    <div className="footer_info_follow_img">
                        <a href="https://www.facebook.com/profile.php?id=61554004420226">
                            <FaFacebookF className="Footer_img"/>

                        </a>
                        <a href="https://www.instagram.com/eventvisionary/?igshid=MzMyNGUyNmU2YQ%3D%3D">
                            <FaInstagram className="Footer_img"/>

                        </a>
                        <a href="https://twitter.com/EventVisionary">

                            <FaXTwitter className="Footer_img"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer_copy">
            Copyright 2023, Event Visionary LLC
        </div>
    </footer>
  )
}

export default Footer
