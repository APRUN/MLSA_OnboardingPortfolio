/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/3.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Personal Portfolio 🎉",
    description:
      "My personal portfolio site. Created with html,css,js and deployed to GitHub pages.",
    url: "https://aprun.github.io/Khalil-Ahmad/",
  },
  {
    title: "Web Scraping",
    description:
      "A python based web scraping tool through which i scraped data of 1 million books and stored it in a csv file.",
    url: "https://github.com/sma02/DSAMidProjectDev",
  },
  {
    title: "Work Nova",
    description:
      "A C# based application for job providing and all management of job. Its developed in C# and winforms a framework of .NET.",
    url: "https://github.com/APRUN/WorkNova-GUI-_-Application-Finals-MasteredVesrion-_CSharp",
  },
  {
    title: "Password Generator",
    description:
      "A web based password generator tool created with html,css and js. Its basic work is to generate random password.",
    url: "https://github.com/APRUN/Random_PasswordGenerator_WebTool",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
