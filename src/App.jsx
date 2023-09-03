import "./App.css"
import AboutMe from "./pages/AboutMe"
import ExperiencePage from "./pages/Experience"
import ProjectsPage from "./pages/Projects"
import React, { useRef } from "react"
import HireMe from "./pages/HireMe"

function App() {
  const aboutRef = useRef(null)
  const experienceRef = useRef(null)
  const projectsRef = useRef(null)
  const hireMeRef = useRef(null)

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToExperience = () => {
    experienceRef.current.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" })
  }
  const scrollToHireMe = () => {
    hireMeRef.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      style={{
        backgroundImage: `url(https://media.istockphoto.com/id/1044136070/photo/holographic-neon-shiny-background-minimalist-style-millennial-colors.webp?b=1&s=170667a&w=0&k=20&c=9wtFW5xQKEozXaAAuawl-Mfah5afP22r4cPCbC3fDs8=)`,
        backgroundSize: "cover", // Use "cover" to cover the entire element
        width: "99vw", // Use "100vw" for viewport width
        height: "680vh", // Use "100vh" for viewport height
        margin: -8,
      }}
    >
      <nav className="navbar" style={styles.navbar}>
        <div className="logo">
          <h2 style={styles.logo}>My Portfolio</h2>
        </div>
        <ul className="nav-list" style={styles.navList}>
          <li
            className="nav-item"
            style={styles.navItem}
            onClick={scrollToAbout}
          >
            About
          </li>
          <li
            className="nav-item"
            style={styles.navItem}
            onClick={scrollToExperience}
          >
            Experience
          </li>
          <li
            className="nav-item"
            style={styles.navItem}
            onClick={scrollToProjects}
          >
            Projects
          </li>
          <li
            className="nav-item"
            style={styles.navItem}
            onClick={scrollToHireMe}
          >
            Hire Me
          </li>
          {/* Other navigation items */}
        </ul>
      </nav>
      <div ref={aboutRef}>
        <AboutMe />
      </div>
      <div ref={experienceRef}>
        <ExperiencePage />
      </div>
      <div ref={projectsRef}>
        <ProjectsPage />
      </div>
      <div ref={hireMeRef}>
        <HireMe />
      </div>
    </div>
  )
}
const styles = {
  container: {
    backgroundImage: `url(https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)`,
    // backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  navbar: {
    backgroundColor: "#222",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.0001rem 2rem",
    color: "#fff",
    margin: "0",
    borderRadius: 100,
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  navList: {
    listStyleType: "none",
    display: "flex",
    gap: "2rem",
  },
  navItem: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "none",
    color: "#fff",
    transition: "color 0.3s ease-in-out",
  },
  "navItem:hover": {
    color: "#ff6b6b",
  },
}

export default App
