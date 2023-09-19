import AboutMe from "./pages/AboutMe"
import ProjectsPage from "./pages/Projects"
import React, { useRef } from "react"
import HireMe from "./pages/HireMe"
import "./App.css"
import { TbLayoutNavbarCollapseFilled } from "react-icons/tb"
import { BsFillCloudDownloadFill } from "react-icons/bs"
import "./pages/css.css"

import resume from "./assets/resume.pdf"
const handleDownloadClick = () => {
  const anchor = document.createElement("a")
  anchor.href = resume
  anchor.download = "resume.pdf" // Optional: Set the desired file name

  anchor.click()
}
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
        // backgroundImage: `url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgICAgIBwcHBwcHCAoHBwcHBw8ICQcKFREWFhUREx8YKCggGCYxJxMTITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDw0NDisZFRkrKy0tKysrKy0rKystKystKysrKysrKysrKysrKysrLSsrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAaAAEBAQEAAwAAAAAAAAAAAAABAAIEAwUH/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQGBf/EABcRAQEBAQAAAAAAAAAAAAAAAAABEQL/2gAMAwEAAhEDEQA/APq6SbO4UGsnAKzWqxVwCs00VpCYrNarNXCZopoWms1KpSaAUaKCCGdSSCaiiEVJIJSSBBEAIEGaBANJIDUkgNe2Q1PmvqCilmqgFZrVYq4BWaazVwhWaazVxIoqoq4mighSaEkaKiDAzqKUCKUkEVIkk6ymgC0IqwxrKKBsogz1JIBJIB7NAPnvrFks05CVZprNXAKzTWaqEKzTWa0hCiqhcTRQQpFSSDOoohnUYiGdqOIki0Ikk6EcQTrKaGAayijPWQ0DPQigNCKA13hBwvtHWSFQhWaaFQBmmsrhM0U1mriaGa0zVxNQSNnUkjZ0whqEzpOCNQmVqhWGQmdqxYcOEi1lY1iBazgawAaA0DPWQ2ANZxYUZ6EQBrsQTkfeQqFMYBSFRLNFNZqoQrNarNXE0VmtBcRWUQpFREjQZdKNQSNSEy6qjUikakTWNqkMhhkSztGHDiwtRaMDWIanWcGNYKY1kNYDPWUaDPQiAehFAa6FUHK9EgQYFBoqomiimiqiazWWqFxNZDQUigY1gxTO1SFQwmVUjUUakJj1TI1BGomseqo1IpGoljaMWNYiRazQ2KE6wK1QZ6zRWqzVHooNBq0JIxoRQN5kk5npQqkZCimimQopCoigELTQGgbOhEnrLoYcWGQmXVUjcEjUJj1VG5BGonWHVUjUgahMqkUTMM1qgyZZarNOGGa1WaowKaDUEEYSSA15wQ5nqEkjAoKNNAKNFZRCoihFKZULDiwaz6WGLDgY9KNQRqExphEaiWNUaBDKohEzqZpFMCs01mnAKKqKpQoqoUaCoMFBA3QknK9SkkCQNCk1Ao0UAo2dCKPWdBSPWXRSI1j0jFCTHpNQEmVJZQZVoIaEIJkyVZptZOBVmqs1SlRUKo0tC0zIGkB1UEOR6pIwAkkjTQiDZ1JI0VJI2NSRDKqEEMeikoGXRUSgZUpAM6QgEVUVCqIVmms04BWaWVQ1QqyoyENMyWUA7Uk4nqkkjKqgg01JIM6kkpnUkgyqiSNlSQgx6KiUDLopIMqkhQzqoINIopZqiFZrVZpwM1mtVmqOM1IVRoJGaSQDuSThepSSMqqEjRUkjRUkgzqSRsqkkbKkhBj0SkGVSSDKoVIIqFSNArNKUTFZqSoGRUjimWSlGAkYSSMP/9k=)`,
        backgroundSize: "cover",
        backgroundRepeat: "initial",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Lato, sans-serif",
        margin: -7,
      }}
    >
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item" onClick={scrollToAbout}>
            About
          </li>
          <li className="nav-item" onClick={scrollToProjects}>
            Projects
          </li>
          <li className="nav-item" onClick={scrollToHireMe}>
            Contact
          </li>
          {/* Other navigation items */}
        </ul>
      </nav>
      <div ref={aboutRef}>
        <AboutMe />
        <div style={{ textAlign: "center", padding: 0 }}>
          <button onClick={handleDownloadClick} className="button2">
            {" "}
            Download Resume <BsFillCloudDownloadFill />
          </button>
        </div>
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

export default App
