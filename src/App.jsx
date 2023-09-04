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
        width: "109%", // Use "100vw" for viewport width
        height: "100%", // Use "100vh" for viewport height
        margin: -8,
        display: "flex",
        flexDirection: "column",
        gap: "3vw",
        alignItems: "center",
      }}
    >
      <nav className="navbar" style={styles.navbar}>
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
    // backgroundColor: "#f0f2f5",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  navbar: {
    margin: "10px",
    borderRadius: 150,
    // backgroundColor: "#4267b2",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    width: "87%",
    boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  navList: {
    listStyleType: "none",
    display: "flex",
    gap: "20px",
  },
  navItem: {
    fontSize: "4vw",
    fontWeight: "bold",
    cursor: "pointer",
    color: "black",
    opacity: "50%",
    transition: "color 0.3s ease-in-out",
  },
  content: {
    width: "100%",
    maxWidth: "800px",
    marginTop: "20px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
  },
}

export default App
