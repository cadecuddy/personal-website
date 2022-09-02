import React from "react";
import FadeIn from "react-fade-in";

function Home() {
  return (
    <div class="font-thin">
      <FadeIn transitionDuration="800">
        <div class="text-7xl text-center pt-8">cade cuddy</div>
      </FadeIn>
      <FadeIn transitionDuration="800" delay="200">
        <div class="text-4xl text-center pt-8">hey!</div>
      </FadeIn>
      <FadeIn transitionDuration="800" delay="300">
        <div class="text-3xl text-center pt-10">
          i'm cade, a junior Computer Science student at{" "}
          <span class="text-red-700">North Carolina State University</span>
        </div>
      </FadeIn>
      <FadeIn transitionDuration="800" delay="400">
        <div class="text-3xl text-center pt-10 leading-10">
          i quite enjoy tinkering around with new technologies and even complete
          side projects sometimes :)
          <div class="pt-1 text-3xl text-green-600 italic">
            <a
              class="hover:text-green-500 cursor-pointer"
              href="https://github.com/cadecuddy"
              target="_blank"
              rel="noopener noreferrer"
            >
              checkout my github
            </a>
          </div>
        </div>
      </FadeIn>
      <FadeIn transitionDuration="800" delay="500">
        <div class="text-3xl text-center pt-10 leading-10">
          <div class="italic">Past Positions:</div>
          SDE intern @ <span class="text-yellow-600">amazon</span>
        </div>
        <div class="text-center text-3xl pt-8 leading-10">
          Contact Me:
          <div class="pt-1 text-3xl text-blue-700 italic">
            <a
              class="hover:text-blue-500 cursor-pointer"
              href="https://www.linkedin.com/in/cade-c-b1146316a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              connect on linkedin
            </a>
          </div>
          <div class="pt-1 text-3xl text-blue-500 italic">
            <a
              class="hover:text-blue-500 cursor-pointer"
              href="https://twitter.com/cadecuddy"
              target="_blank"
              rel="noopener noreferrer"
            >
              tweet me on twitter
            </a>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default Home;
