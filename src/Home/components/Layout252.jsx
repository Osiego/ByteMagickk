"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import './Layout252.css'; // Import the CSS file for this component
import IDE from '../../Assets/IDE.webp'; // Import the image
import Eso from '../../Assets/Eso.webp'; // Import the image
import Magick from '../../Assets/magick.webp'; // Import the image




export function Layout252() {
  return (
    <section id="relume" className="layout-section">
      <div className="layout-container">
        <div className="layout-header">
          <div>
            <h2 className="layout-title">
              Unleash Your Creativity with Our Unique Coding Features
            </h2>
          </div>
          <div>
            <p className="layout-description">
              Transform your coding journey with our AI Tutor, designed to guide
              you through complex concepts. Experience personalized learning
              that adapts to your pace and style. Unlock the secrets of
              programming with ease and confidence.
            </p>
          </div>
        </div>
        <div className="layout-content">
          <div className="layout-item">
            <div className="layout-image-container">
              <img
                src={IDE}
                alt="IDE"
                className="layout-image"
              />
            </div>
            <h3 className="layout-item-title">
              Code Effortlessly with Our Powerful In-Browser IDE
            </h3>
            <p className="layout-item-description">
              Create, test, and debug your code seamlessly in your browser.
            </p>
            <div className="layout-item-actions">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Learn More
              </Button>
            </div>
          </div>
          <div className="layout-item">
            <div className="layout-image-container">
              <img
                src={Eso}
                alt="Eso"
                className="layout-image"
              />
            </div>
            <h3 className="layout-item-title">
              Master the Art of Esoteric Incantations for Coding
            </h3>
            <p className="layout-item-description">
              Dive into the mystical world of coding with our unique techniques.
            </p>
            <div className="layout-item-actions">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Learn More
              </Button>
            </div>
          </div>
          <div className="layout-item">
            <div className="layout-image-container">
              <img
                src={Magick}
                alt="Magick"
                className="layout-image"
              />
            </div>
            <h3 className="layout-item-title">
              Experience the Magic of Learning to Code
            </h3>
            <p className="layout-item-description">
              Join us to explore the enchanting realm of programming.
            </p>
            <div className="layout-item-actions">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}