"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";
import { RxPlus } from "react-icons/rx";
import './Faq5.css'; // Import the CSS file for this component

export function Faq5() {
  return (
    <section id="relume" className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">FAQs</h2>
          <p className="faq-description">
            Here are answers to some common questions about our coding service
            and AI tutor.
          </p>
        </div>
        <Accordion type="multiple" className="faq-accordion">
          <AccordionItem value="item-0" className="faq-accordion-item">
            <AccordionTrigger
              icon={<RxPlus className="faq-icon" />}
              className="faq-accordion-trigger"
            >
              What is bytemagick?
            </AccordionTrigger>
            <AccordionContent className="faq-accordion-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1" className="faq-accordion-item">
            <AccordionTrigger
              icon={<RxPlus className="faq-icon" />}
              className="faq-accordion-trigger"
            >
              How does it work?
            </AccordionTrigger>
            <AccordionContent className="faq-accordion-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="faq-accordion-item">
            <AccordionTrigger
              icon={<RxPlus className="faq-icon" />}
              className="faq-accordion-trigger"
            >
              Is it suitable for beginners?
            </AccordionTrigger>
            <AccordionContent className="faq-accordion-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="faq-accordion-item">
            <AccordionTrigger
              icon={<RxPlus className="faq-icon" />}
              className="faq-accordion-trigger"
            >
              Question text goes here
            </AccordionTrigger>
            <AccordionContent className="faq-accordion-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="faq-accordion-item">
            <AccordionTrigger
              icon={<RxPlus className="faq-icon" />}
              className="faq-accordion-trigger"
            >
              Can I cancel anytime?
            </AccordionTrigger>
            <AccordionContent className="faq-accordion-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="faq-contact">
          <h4 className="faq-contact-title">Still have questions?</h4>
          <p className="faq-contact-description">We're here to help!</p>
          <div className="faq-contact-button">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}