import React from "react"
import "./css.css"
import { AiFillGithub } from "react-icons/ai"
import { GoProjectSymlink } from "react-icons/go"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { FcManager } from "react-icons/fc"
import { AiFillVideoCamera } from "react-icons/ai"

const ProjectsPage = () => {
  return (
    <div style={styles.container}>
      <h2 className="pageTitle" style={styles.pageTitle}>
        My Projects <GoProjectSymlink />
      </h2>
      <div className="projects" style={styles.projects}>
        {/** Card 1 */}
        <div className="card" style={styles.projectCard}>
          <img
            src={
              "https://plus.unsplash.com/premium_photo-1670863088251-500151f2117b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlJTIwaWNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
            style={styles.image}
            alt="Project 1"
            className="image"
          />
          <div style={styles.text}>
            <h3 style={styles.projectTitle}>
              Full Stack E-Commerce Store <AiOutlineShoppingCart />
            </h3>
            <p style={styles.projectDescription}>
              Worked on a Full Stack E-commerce platform, leveraging Node.js,
              Express, MongoDB, React, and Redux. I prioritized user experience
              with a responsive UI, advanced routing, and visually appealing
              design using Tailwind CSS. Additionally, I ensured robust
              security, data integrity, and efficient debugging through various
              techniques like input validation, authentication with JWT, and
              comprehensive error logging.
            </p>
            <ul className="skill">
              <li style={styles.skill}>REACT.JS</li>
              <li style={styles.skill}>NODE.JS</li>
              <li style={styles.skill}>MONGODB</li>
              <li style={styles.skill}>MONGODB</li>
              <li style={styles.skill}>MONGODB</li>
              <li style={styles.skill}>MONGODB</li>
              <li style={styles.skill}>MONGODB</li>
            </ul>
            <a target="_blank" href="https://github.com/karan1110/e-com-client">
              <button style={styles.button}>
                View on Github <AiFillGithub />
              </button>
            </a>
          </div>
        </div>

        {/** Card 2 */}
        <div style={styles.projectCard} className="card">
          <img
            width="90%"
            height="300px"
            src="https://media.istockphoto.com/id/1225823416/photo/abstract-financial-graph-with-uptrend-line.webp?b=1&s=170667a&w=0&k=20&c=9ijt0jiklRpnI8C0tFgOYajak5LlEVlhLjanNyfu_Kg="
            style={styles.image}
            className="image"
            alt="Project 2"
          />
          <div style={styles.text}>
            <h3 style={styles.projectTitle}>
              Employee Manager <FcManager />
            </h3>
            <p style={styles.projectDescription}>
              I developed an advanced Jira clone with optimal SQL performance,
              utilizing TRIGGERS, EVENTS, and INDEXING. I implemented real-time
              chat using Web Sockets and calculated employee punctuality scores
              with math formulas and database techniques. The project leveraged
              Express.js, Sequelize, and PostgreSQL for efficient data
              management, including email verification through node-mailer.
            </p>
            <ul className="skill">
              <li style={styles.skill}>REACT.JS</li>
              <li style={styles.skill}>NODE.JS</li>
              <li style={styles.skill}>MONGODB</li>
            </ul>
            <a target="_blank" href="https://github.com/karan1110/veera">
              <button style={styles.button}>
                View on Github <AiFillGithub />{" "}
              </button>
            </a>
          </div>
        </div>

        {/** Card 3 */}
        <div className="card" style={styles.projectCard}>
          <img
            width="90%"
            height="300px"
            src="https://media.istockphoto.com/id/1327834811/photo/classic-vhs-videotape-on-a-yellow-background.webp?b=1&s=170667a&w=0&k=20&c=RBljxPMH-9TLc_LmB_jxZfxn8aMUKMUc5xACC-lIPXA="
            style={styles.image}
            alt="Project 3"
            className="image"
          />
          <div style={styles.text}>
            <h3 style={styles.projectTitle}>
              Video Rental Store API <AiFillVideoCamera />
            </h3>
            <p style={styles.projectDescription}>
              I undertook a freelance backend project to create a robust API for
              a physical video rental store, employing Express.js and Mongoose
              for efficient implementation. I ensured data integrity with
              MongoDB transactions using Fawn and prioritized security through
              comprehensive input validation, JWT-based authentication, and
              authorization. Additionally, I implemented logging, error
              handling, and followed Test-Driven Development practices with Unit
              and Integration testing.
            </p>
            <ul className="skill">
              <li style={styles.skill}>REACT.JS</li>
              <li style={styles.skill}>NODE.JS</li>
              <li style={styles.skill}>MONGODB</li>
            </ul>
            <a
              className="butt"
              target="_blank"
              href="https://github.com/karan1110/vidly-api-node"
            >
              <button style={styles.button}>
                View on Github <AiFillGithub />{" "}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage

// CSS in JSX
const styles = {
  container: {
    textAlign: "center",
  },
  pageTitle: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#333",
  },
  image: {
    borderRadius: 10,
    height: "40vh",
    width: "28vw",
    marginBottom: "13vh",
  },
  navList: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0,
    margin: 0,
  },
  navItem: {
    color: "#fff",
    fontSize: "1.2rem",
    fontWeight: "bold",
    cursor: "pointer",
  },
  active: {
    textDecoration: "underline",
  },
  button: {
    fontWeight: "bold",
    backgroundColor: "#4285F4",
    borderRadius: "15px",
    borderColor: "#4285F4",
    padding: "10px 20px",
    color: "#ffffff",
    cursor: "pointer",
    textAlign: "center",
    marginBottom: "1.7rem",
    position: "relative",
    left: "3vw",
    border: "none",
  },
  projects: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  projectCard: {
    marginLeft: "1rem",
    marginRight: "1rem",
    textAlign: "justify",
    backgroundColor: "white",
    borderRadius: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "3vh",
  },
  projectTitle: {
    marginLeft: "1vw",
    height: "2vh",
    whiteSpace: "nowrap",
    fontSize: "1.3rem",

    fontWeight: "bold",
    color: "#555",
    marginBottom: "0.7rem",
  },
  projectDescription: {
    // fontSize: "1rem",
    color: "#777",
    margin: "1vw",
    whiteWrap: "no-space",
    textAlign: "justify",
  },
  text: {
    fontWeight: "bold",
    textAlign: "justify",
    display: "flex",
    flexDirection: "column",
  },
  skill: {
    borderRadius: "1000px",
    paddingLeft: "0.5rem",
    paddingBottom: "0.2rem",
    paddingTop: "0.2rem",
    paddingRight: "0.5rem",
    margin: "0.7vw",
    display: "inline-block",
    color: "darkcyan",
    fontSize: "0.8rem",
    fontWeight: "bold",
    cursor: "pointer",
    backgroundColor: "aquamarine",
  },
}
