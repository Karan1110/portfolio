import React, { useState, useEffect } from "react"
import "./aboutme.css"
import { FcAbout } from "react-icons/fc"
import { Typewriter } from "react-simple-typewriter"

const AboutMe = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <img
          src="https://icon2.cleanpng.com/20180422/hrw/kisspng-web-development-computer-icons-computer-programmin-firm-5adc3ec9b28b77.2147568215243834337313.jpg"
          alt=""
          height={"130vh"}
          width={"130vw"}
          style={{
            marginTop: "7vh",
            borderRadius: "10000px",
          }}
        />
        <p style={styles.intro2}>
          Hi, I'm Parit, a Software Developer with 3+ years of experience.
          <br /> <br /> I enjoy building sites & apps that bring ideas to life
          and solve problems.
        </p>
        <h1 style={styles.title}>
          About Me <FcAbout />{" "}
        </h1>
        <p style={styles.description}>
          Hey there! 👋 I'm a high school student who's been on a coding journey
          since 8th grade. Starting with basic lines of code, I've evolved into
          a full-stack development with a passion for making things click
          online.
          <br />
          <br />
          Through Udemy courses and relentless practice, I've become proficient
          in various technologies: MongoDB, Express, MySQL, and Next.js
          (integrated with React). I add a touch of finesse using TypeScript,
          and I've got mobile apps covered with Flutter and React Native. 📱🚀
          <br />
          <br />
          But my curiosity goes beyond – I'm captivated by the potential of
          blockchain technology, a digital magic with the power to reshape our
          world. ⛓️🌟
          <br />
          <br />
          Join me in this coding escapade, as we turn concepts into reality!
          Whether it's a dynamic website, a user-friendly app, or something
          completely new, I'm up for the challenge. Let's harness the power of
          technology together! 🖥️🌈
        </p>
        <p style={styles.intro}>
          <Typewriter
            loop={0}
            words={[
              "NodeJS",
              "ReactJS",
              "Django",
              "AWS",
              "MongoDB",
              "SQL",
              "React Native",
            ]}
          />
        </p>
      </div>
    </div>
  )
}
/* */
export default AboutMe

// CSS in JSX
const styles = {
  container: {
    marginTop: "1.5vw",
    marginRight: "1.5vw",
    marginLeft: "1.5vw",
    fontFamily: "Lato, sans-serif",
    padding: "2vw",
  },
  title: {
    fontSize: "4rem",
    fontWeight: "bold",
    marginTop: "14vh",
    textAlign: "center",
  },
  description: {
    paddingLeft: "7vw",
    paddingRight: "7vw",
    textAlign: "justify",
    color: "#333",
    fontSize: "1.3rem",
  },
  content: {
    textAlign: "center",
  },
  button: {
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "12px 24px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    marginTop: "20px",
    fontSize: "1.6rem",
    fontWeight: "bold",
  },
  intro: {
    height: "10vh",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "3rem",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "5px",
  },
  intro2: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "2rem",
    marginLeft: "auto",
    marginRight: "auto",
  },
}
