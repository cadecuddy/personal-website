import React from "react";
import FadeIn from "react-fade-in";

function Projects() {
  return (
    <div class="font-thin pb-6">
      <FadeIn transitionDuration="800">
        <div class="text-5xl text-center pt-8">my projects</div>
      </FadeIn>
      <FadeIn transitionDuration="800" delay="200">
        <div class="text-3xl text-center font-mono pt-14">
          <a
            class="text-white hover:text-red-500 cursor-pointer"
            href="https://www.bedbrea.kr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            bedbreakr
          </a>
        </div>
        <div class="text-xl font-thin text-center pt-2">
          {" "}
          blazing fast Minecraft Bedwars stats hub
        </div>
      </FadeIn>
      <FadeIn transitionDuration="800" delay="300">
        <div class="text-3xl text-center font-mono pt-12">
          <a
            class="text-white hover:text-red-500 cursor-pointer"
            href="https://github.com/cadecuddy/SET-Card-Game-Solver"
            target="_blank"
            rel="noopener noreferrer"
          >
            set-card-game-solver
          </a>
        </div>
        <div class="text-xl font-thin text-center pt-2">
          {" "}
          script for finding all possible valid card sets in the card game SET
        </div>
      </FadeIn>
      <FadeIn transitionDuration="800" delay="400">
        <div class="text-3xl text-center font-mono pt-12">
          <a
            class="text-white hover:text-red-500 cursor-pointer"
            href="https://github.com/cadecuddy/Bedwars-Buddy"
            target="_blank"
            rel="noopener noreferrer"
          >
            bedwars-buddy
          </a>
        </div>
        <div class="text-xl font-thin text-center pt-2">
          {" "}
          discord bot for Minecraft Bedwars stats and player shop visualization
        </div>
      </FadeIn>
      <FadeIn transitionDuration="800" delay="500">
        <div class="text-3xl text-center font-mono pt-12">
          <a
            class="text-white hover:text-red-500 cursor-pointer"
            href="https://github.com/cadecuddy/AmongUs-Door-Doctor"
            target="_blank"
            rel="noopener noreferrer"
          >
            door-doctor
          </a>
        </div>
        <div class="text-xl font-thin text-center pt-2">
          {" "}
          puzzle tool for the formerly popular game "Among Us"
        </div>
      </FadeIn>
      <FadeIn transitionDuration="800" delay="600">
        <div class="text-3xl text-center font-mono pt-12">
          <a
            class="text-white hover:text-red-500 cursor-pointer"
            href="https://github.com/cadecuddy/Ultimate-TicTacToe"
            target="_blank"
            rel="noopener noreferrer"
          >
            ultimate-9x9-tic-tac-toe
          </a>
        </div>
        <div class="text-xl font-thin text-center pt-2">
          {" "}
          [WIP] minimax-powered AI opponent that plays a nested 9x9 game of
          tic-tac-toe
        </div>
      </FadeIn>
    </div>
  );
}

export default Projects;
