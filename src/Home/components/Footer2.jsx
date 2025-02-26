"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React, { useState } from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import './Footer2.css'; // Import the CSS file for this component
import bytemagicklogo from '../../Assets/bytemagicklogo.webp'; // Import the image


const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer2() {
  const formState = useForm();
  return (
    <footer id="relume" className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-logo-grid">
            <a href="#" className="footer-logo-link">
              <img
                src={bytemagicklogo}
                alt="Logo image"
                className="footer-logo"
              />
            </a>
            <div className="footer-column">
              <h2 className="footer-heading">Connect With Us</h2>
              <ul className="footer-list">
                <li className="footer-list-item">
                  <a href="#" className="footer-link">About Us</a>
                </li>
                <li className="footer-list-item">
                  <a href="#" className="footer-link">Contact</a>
                </li>
                <li className="footer-list-item">
                  <a href="#" className="footer-link">Support</a>
                </li>
                <li className="footer-list-item">
                  <a href="#" className="footer-link">Blog</a>
                </li>
                <li className="footer-list-item">
                  <a href="#" className="footer-link">Careers</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h2 className="footer-heading">Resources</h2>
              <ul className="footer-list">
                <li className="footer-list-item">
                  <a href="#" className="footer-link">Documentation</a>
                </li>
                <li className="footer-list-item">
                  <a href="#" className="footer-link">API Reference</a>
                </li>
                <li className="footer-list-item">
                  <a href="#" className="footer-link">Community</a>
                </li>
                <li className="footer-list-item">
                  <a href="#" className="footer-link">Events</a>
                </li>
                <li className="footer-list-item">
                  <a href="#" className="footer-link">Feedback</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h2 className="footer-heading">Stay Updated</h2>
              <ul className="footer-list">
                <li className="footer-list-item">
                  <a href="#" className="footer-link">Newsletter</a>
                </li>
                <li className="footer-list-item">
                  <a href="#" className="footer-link">Webinars</a>
                </li>
                <li className="footer-list-item">
                  <a href="#" className="footer-link">Workshops</a>
                </li>
                <li className="footer-list-item">
                  <a href="#" className="footer-link">Tutorials</a>
                </li>
                <li className="footer-list-item">
                  <a href="#" className="footer-link">Resources</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-subscribe">
            <h1 className="footer-subscribe-heading">Subscribe</h1>
            <p className="footer-subscribe-text">
              Join our newsletter to stay updated on features and releases.
            </p>
            <div className="footer-subscribe-form-container">
              <form
                className="footer-subscribe-form"
                onSubmit={formState.handleSubmit}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formState.email}
                  onChange={formState.handleSetEmail}
                />
                <Button title="Subscribe" variant="secondary" size="sm">
                  Subscribe
                </Button>
              </form>
              <p className="footer-subscribe-note">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates.
              </p>
            </div>
          </div>
        </div>
        <div className="footer-divider" />
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p className="footer-bottom-text">
              © 2024 bytemagick. All rights reserved.
            </p>
          </div>
          <div className="footer-bottom-right">
            <a href="#" className="footer-social-link">
              <BiLogoFacebookCircle className="footer-social-icon" />
            </a>
            <a href="#" className="footer-social-link">
              <BiLogoInstagram className="footer-social-icon" />
            </a>
            <a href="#" className="footer-social-link">
              <FaXTwitter className="footer-social-icon" />
            </a>
            <a href="#" className="footer-social-link">
              <BiLogoLinkedinSquare className="footer-social-icon" />
            </a>
            <a href="#" className="footer-social-link">
              <BiLogoYoutube className="footer-social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}