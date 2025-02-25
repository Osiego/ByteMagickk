"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import './Header71.css'; // Import the CSS file for this component

export function Header71() {
  return (
    <section id="relume" className="header-section">
      <div className="header-container">
        <div className="header-content">
          <div className="header-text">
            <div className="header-text-inner">
              <h1 className="header-title">
                Welcome to ByteMagick - Your Gateway to Coding Mastery with AI
                Assistance
              </h1>
              <p className="header-description">
                Unlock your creativity and learn to code with our innovative AI
                tutor and IDE.
              </p>
              <div className="header-buttons">
                <Button title="Start">Start</Button>
                <Button title="Learn More" variant="secondary">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div className="header-image-container">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              className="header-image"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}