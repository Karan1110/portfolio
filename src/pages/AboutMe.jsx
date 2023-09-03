import React from "react"

const AboutMe = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2 style={styles.title}>About Me</h2>
        <p className="description">
          I am a passionate developer who loves building amazing web
          applications. With a strong focus on user experience, I strive to
          create elegant and efficient solutions.
        </p>
        <div style={styles.skillsList}>
          <p style={styles.skillsListLi}>JavaScript</p>
          <p style={styles.skillsListLi}>React</p>
          <p style={styles.skillsListLi}>HTML</p>
          <p style={styles.skillsListLi}>CSS</p>
          <p style={styles.skillsListLi}>React</p>
          <p style={styles.skillsListLi}>Node.js</p>
          <p style={styles.skillsListLi}>Redux</p>
          <p style={styles.skillsListLi}>Django</p>
          <p style={styles.skillsListLi}>SQL</p>
          <p style={styles.skillsListLi}>MongoDB</p>
          <p style={styles.skillsListLi}>React Native</p>
          <p style={styles.skillsListLi}>Tailwind</p>
          <p style={styles.skillsListLi}>Python</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe

// CSS in JSX
const styles = {
  container: {
    marginTop: "15px",
    marginBottom: "15px",
    // width: "90vw",
    maxWidth: 600,
    padding: "2rem",
    borderRadius: "8px",
    marginLeft: "190px",
    boxShadow:
      "2px 2px 2px rgba(0.1, 0.1, 0.1, 0.1), -2px -2px 2px rgba(0.1, 0.1, 0.1, 0.1), 2px -2px 2px rgba(0.1, 0.1, 0.1, 0.1), -2px 2px 2px rgba(0.1, 0.1, 0.1, 0.1)",
  },
  content: {
    textAlign: "center",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  description: {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "1.5rem",
  },
  skillsList: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  skillsListLi: {
    margin: 4,
    backgroundColor: "#f9f9f9",
    padding: "0.5rem 1rem",
    borderRadius: "2px",
  },
}