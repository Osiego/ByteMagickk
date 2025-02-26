import React from "react";
import { Navbar1 } from "./components/Navbar1";
import { Header71 } from "./components/Header71";
import { Layout252 } from "./components/Layout252";
import { Testimonial13 } from "./components/Testimonial13";
import { Layout6 } from "./components/Layout6";
import { Layout239 } from "./components/Layout239";
import { Cta1 } from "./components/Cta1";
import { Faq5 } from "./components/Faq5";
import { Footer2 } from "./components/Footer2";
import CodeEditor from "./components/CodeEditor"; // Add this line



export default function Page() {
  return (
    <div>
      <Navbar1 />
      <Header71 />
      <Layout252 />
      <CodeEditor />
      <Layout6 />
      <Cta1 />
      <Faq5 />
      <Footer2 />
    </div>
  );
}
