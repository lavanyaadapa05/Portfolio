"use client";
import React from "react";
import { HeroParallax } from "./ui/hero";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "AboutMe",
    link: "/aboutme",
    thumbnail:
      "/assets/Aboutme.png",
  },
  {
    title: "CodingProfiles",
    link: "/coding",
    thumbnail:
      "/assets/codingprofiles.png",
  },
  {
    title: "MyProjects",
    link: "/project",
    thumbnail:
      "/assets/myprojects.png",
  },

  {
    title: "AboutMe",
    link: "/aboutme",
    thumbnail:
      "/assets/Aboutme.png",
  },
  {
    title: "MyProjects",
    link: "/project",
    thumbnail:
      "/assets/myprojects.png",
  },
  {
    title: "ContactMe",
    link: "/contact",
    thumbnail:
      "/assets/contact.png",
  },

  {
    title: "ContactMe",
    link: "/contact",
    thumbnail:
      "/assets/contact.png",
  },
  {
    title: "GitHub",
    link: "https://github.com/lavanyaadapa05",
    thumbnail:
      "/assets/github.png",
  },
  {
    title: "Resume",
    link: "https://drive.google.com/file/d/1eHu4QjxSwO69_ksq8ula43ION3ptuN8_/view?usp=sharing",
    thumbnail:
      "/assets/resume.png",
  },
  {
    title: "GitHub",
    link: "https://github.com/lavanyaadapa05",
    thumbnail:
      "/assets/github.png",
  },
  // {
  //   title: "Renderwork Studio",
  //   link: "https://renderwork.studio",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  // },

  // {
  //   title: "Creme Digital",
  //   link: "https://cremedigital.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  // },
  // {
  //   title: "Golden Bells Academy",
  //   link: "https://goldenbellsacademy.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  // },
  // {
  //   title: "Invoker Labs",
  //   link: "https://invoker.lol",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  // },
  // {
  //   title: "E Free Invoice",
  //   link: "https://efreeinvoice.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  // },
];
