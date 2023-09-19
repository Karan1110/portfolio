import React from "react"
import "./css.css"
const ExperiencePage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.experienceCard} className="card">
        <h3 style={styles.company}>Youth Story</h3>
        <p style={styles.position}>Full Stack Developer</p>
        <p style={styles.duration}>2018 - Present</p>
        <ul style={styles.responsibilities}>
          <li>
            Successfully led a team of 5 backend developers in building the
            robust backend for the Youth Story website and mobile app. via
            Django
          </li>
          <li>
            Implemented a diverse range of features, including user
            authentication, product listings, purchase and subscription
            functionality, direct messaging, group messaging, and 1:1 paid video
            call mentoring. via React Native
          </li>
          <li>
            Developed a goal management system and an admin panel to oversee
            content, resulting in enhanced user engagement and a successful
            funding of 100k within a month of launch. Supported by renowned
            institutions like IIT Patna and GeeksforGeeks.
          </li>
        </ul>
      </div>
      <div style={styles.experienceCard} className="card">
        <h3 style={styles.company}>Nexstead Games</h3>
        <p style={styles.position}>Full Stack Developer</p>
        <p style={styles.duration}>2018 - Present</p>
        <ul style={styles.responsibilities}>
          <li>
            Developed an optimized file upload system in the backend, employing
            Postgres, ORM, Express, and Multer to ensure seamless and efficient
            file handling Django
          </li>
          <li>
            Implemented a CSV file serving route in the backend, skillfully
            aggregating data and combining it to create downloadable CSV files
          </li>
          <li>
            Implemented the frontend for the same route by parsing the
            downloaded csv file and developing a graph out of it's data.
          </li>
          <li>
            Engineered a high-performance route that allowed the server to
            handle client requests and perform database operations on the same
            data 3-5 times per second. Leveraged techniques like database
            pooling and indexes (caching in the database) to achieve remarkable
            response times.
          </li>
          <li>
            created a comprehensive UI/UX for the user and dealt with real-
            payments using stripe in the Backend.
          </li>
          <li>
            Designed an intuitive UI/UX for the e-commerce app, ensuring an
            enjoyable shopping experience, and successfully integrated real-
            payment functionalities using Stripe to process transactions
            securely.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ExperiencePage

// CSS in JSX
const styles = {
  container: {
    // width: "85vw",
    // marginTop: "-7vh",
    padding: "0.2rem",
    opacity: "100%",
    marginLeft: "0vw",
  },
  pageTitle: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "2vw",
    // backgroundColor: "rgb(230, 230, 255)",
    // textDecoration: "underline",
  },
  experienceCard: {
    padding: "1rem",
    borderRadius: "50px",
    boxShadow: "4px 4px 4px 4px rgba(0.2, 0.2, 0.2, 0.2)",
    marginBottom: "2rem",
    backgroundColor: "#f9f9f9",
  },
  company: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    color: "#555",
  },
  position: {
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
    color: "#777",
  },
  duration: {
    fontSize: "1rem",
    marginBottom: "1.5rem",
    color: "#999",
  },
  responsibilities: {
    listStyleType: "circle",
    marginLeft: "-2.1rem",
    color: "#555",
    fontWeight: "bold",
  },
}
