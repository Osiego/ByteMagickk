"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import './Cta1.css'; // Import the CSS file for this component

export function Cta1() {
  return (
    <section id="relume" className="cta-section">
      <div className="cta-container">
        <div className="cta-grid">
          <div>
            <h2 className="cta-title">
              Unlock Your Coding Potential
            </h2>
            <p className="cta-description">
              Start your journey with our free trial and unleash your creativity
              through coding today!
            </p>
            <div className="cta-buttons">
              <Button title="Sign Up">Sign Up</Button>
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              className="cta-image"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}