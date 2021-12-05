import React from "react";
import FadeIn from "react-fade-in";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import sample from "../resources/resume.pdf";

function Resume() {
  return (
    <div class="font-thin text-center ">
      <FadeIn transitionDuration="800" delay="200">
        <div class="text-7xl pt-8 ">resume</div>
        <div class="flex justify-center pt-12 pb-10">
          <Document loading="loading my resume..." file={sample}>
            <Page scale={1.5} pageNumber={1} />
          </Document>
        </div>
      </FadeIn>
    </div>
  );
}

export default Resume;
