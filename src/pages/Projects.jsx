import React from "react"

const ProjectsPage = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.pageTitle}>My Projects</h2>
      <div style={styles.projects}>
        <div style={styles.projectCard}>
          <img
            width="90%"
            height="300px"
            src="https://media.istockphoto.com/id/1461676039/photo/shopping-cart-full-of-groceries-on-yellow-background.webp?b=1&s=170667a&w=0&k=20&c=DlizQ_TIhXj8z2w8ZTDIEssSa_PWMnwvX44jSuv38_k="
            style={styles.image}
          />
          <h3 style={styles.projectTitle}>Full Stack E-Commerce Store</h3>
          <p style={styles.projectDescription}>
            worked on a Full Stack E-commerce platform, leveraging Node.js,
            Express, MongoDB, React, and Redux. I prioritized user experience
            with a responsive UI, advanced routing, and visually appealing
            design using Tailwind CSS. Additionally, I ensured robust security,
            data integrity, and efficient debugging through various techniques
            like input validation, authentication with JWT, and comprehensive
            error logging.
          </p>
          <a target="_blank" href="https://github.com/karan1110/e-com-client">
            <button style={styles.button}> View on Github</button>
          </a>
        </div>
        <div style={styles.projectCard}>
          <img
            width="90%"
            height="300px"
            src="https://media.istockphoto.com/id/1225823416/photo/abstract-financial-graph-with-uptrend-line.webp?b=1&s=170667a&w=0&k=20&c=9ijt0jiklRpnI8C0tFgOYajak5LlEVlhLjanNyfu_Kg="
            style={styles.image}
          />
          <h3 style={styles.projectTitle}>Employee Manager</h3>
          <p style={styles.projectDescription}>
            I developed an advanced Jira clone with optimal SQL performance,
            utilizing TRIGGERS, EVENTS, and INDEXING. I implemented real-time
            chat using Web Sockets and calculated employee punctuality scores
            with math formulas and database techniques. The project leveraged
            Express.js, Sequelize, and PostgreSQL for efficient data management,
            including email verification through node-mailer.
          </p>{" "}
          <a target="_blank" href="https://github.com/karan1110/veera">
            <button style={styles.button}> View on Github</button>
          </a>
        </div>
        <div style={styles.projectCard}>
          <img
            width="90%"
            height="300px"
            src="https://media.istockphoto.com/id/1327834811/photo/classic-vhs-videotape-on-a-yellow-background.webp?b=1&s=170667a&w=0&k=20&c=RBljxPMH-9TLc_LmB_jxZfxn8aMUKMUc5xACC-lIPXA="
            style={styles.image}
          />
          <h3 style={styles.projectTitle}>Video Rental Store API</h3>
          <p style={styles.projectDescription}>
            I undertook a freelance backend project to create a robust API for a
            physical video rental store, employing Express.js and Mongoose for
            efficient implementation. I ensured data integrity with MongoDB
            transactions using Fawn and prioritized security through
            comprehensive input validation, JWT-based authentication, and
            authorization. Additionally, I implemented logging, error handling,
            and followed Test-Driven Development practices with Unit and
            Integration testing.
          </p>
          <a target="_blank" href="https://github.com/karan1110/vidly-api-node">
            <button style={styles.button}> View on Github</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage

// CSS in JSX
const styles = {
  container: {
    width: "70vw",
    margin: "0 auto",
    marginRight: "10vw",
    padding: "0.5rem",
    marginLeft: "1vw",
  },
  pageTitle: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "2rem",
    color: "#333",
  },
  image: {
    borderRadius: 10,
    marginLeft: 15,
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
    backgroundColor: "purple",
    borderRadius: "15px",
    padding: "0.5rem",
    transition: "background-color 0.3s ease", // Add a smooth transition for the hover effect
    cursor: "pointer",
  },
  projects: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "2rem",
  },
  projectCard: {
    backgroundColor: "#f9f9f9",
    padding: "2rem",
    borderRadius: "70px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  projectTitle: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    color: "#555",
  },
  projectDescription: {
    fontSize: "1.2rem",
    color: "#777",
  },
}
