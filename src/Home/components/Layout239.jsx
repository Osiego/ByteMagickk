"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import AI from '../../Assets/AI.webp';

export function Layout239() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Transform</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Unlock Your Coding Potential with ByteMagick
              </h2>
              <p className="md:text-md">
                At ByteMagick, we offer a unique subscription service designed
                to teach you coding through an AI tutor. Our in-browser IDE
                empowers you to create and innovate with ease, turning your
                ideas into reality.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-6 mb-6 md:mb-8">
                <img
                  src={AI}
                  alt="AI"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Personalized Learning Experience Tailored for You
              </h3>
              <p>
                Experience customized lessons that adapt to your learning style.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-6 mb-6 md:mb-8">
                <img
                  src={AI}
                  alt="AI1"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Engaging Community of Aspiring Coders
              </h3>
              <p>Join a vibrant network of learners and creators.</p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-6 mb-6 md:mb-8">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Comprehensive Resources for Every Skill Level
              </h3>
              <p>Access a wealth of tutorials, guides, and tools.</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Button variant="secondary">Learn</Button>
            <Button iconRight={<RxChevronRight />} variant="link" size="link">
              Join
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
