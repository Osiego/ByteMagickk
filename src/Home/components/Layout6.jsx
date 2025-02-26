"use client";

import React from "react";
import './Layout6.css'; // Import the CSS file for this component
import AI from '../../Assets/AI.webp'; // Import the image

export function Layout6() {
  return (
    <section id="relume" className="layout-section">
      <div className="layout-container">
        <div className="layout-grid">
          <div>
            <h1 className="layout-title">
              Unlock Your Potential: Discover the Magic of Learning to Code with
              ByteMagick
            </h1>
            <p className="layout-description">
              With ByteMagick, you’ll embark on a transformative journey into
              the world of coding. Our AI tutor and in-browser IDE make learning
              engaging and accessible, turning complex concepts into creative
              possibilities.
            </p>
            <div className="layout-features">
              <div>
                <h6 className="layout-feature-title">
                  Personalized Learning
                </h6>
                <p className="layout-feature-description">
                  Experience tailored lessons that adapt to your unique learning
                  style and pace.
                </p>
              </div>
              <div>
                <h6 className="layout-feature-title">
                  Creative Projects
                </h6>
                <p className="layout-feature-description">
                  Bring your ideas to life with hands-on projects that inspire
                  innovation and creativity.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={AI}
              className="layout-image"
              alt="Relume placeh"
            />
          </div>
        </div>
      </div>
    </section>
  );
}