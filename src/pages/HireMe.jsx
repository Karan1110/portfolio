import React, { useState } from "react"
import resume from "../assets/resume.pdf"

const styles = {
  container: {
    padding: "3vw",
    marginBottom: "5vh",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    marginBottom: "7vh",
    height: "70vh",
    backgroundColor: "#fff",
    width: "85vw",
    marginLeft: "1.5vw",
  },
  title: {
    color: "#333",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  textarea: {
    width: "65vw",
    borderRadius: "5px",
    padding: "10px",
    border: "1px solid #ccc",
    resize: "none",
    fontSize: "16px",
    lineHeight: "1.5",
  },
  button: {
    backgroundColor: "#FF9900",
    color: "#fff",
    border: "none",
    margin: 7,
    borderRadius: "5px",
    padding: "12px 24px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    marginTop: "20px",
    fontSize: "18px",
    fontWeight: "bold",
  },
}

// Define the file URL
const fileUrl = "../assets/resume.pdf" // Replace with the actual file URL

const handleDownloadClick = () => {
  const anchor = document.createElement("a")
  anchor.href = resume
  anchor.download = "resume.pdf" // Optional: Set the desired file name

  anchor.click()
}

const HireMe = () => {
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")

  const url = "https://portfolio-backend-eit6.onrender.com/" // Replace with your actual API endpoint
  const sendEmail = () => {
    const emailData = {
      subject: subject,
      body: message,
      from: email,
    }
    console.log(emailData)
    // Convert the emailData object to JSON for the request body
    const requestBody = JSON.stringify(emailData)

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBody,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
      })
      .then((responseData) => {
        // Handle the response data here
        console.log("Response Data:", responseData)
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error)
      })
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Send an email!</h2>
      <input
        style={{
          height: "50px",
          margin: "10px",
          borderRadius: "30px",
          padding: 7,
          width: "65vw",
        }}
        placeholder="kindly enter the Subject"
        onChange={(e) => setSubject(e.target.value)}
      />
      <input
        style={{
          height: "50px",
          width: "65vw",
          margin: "10px",
          borderRadius: "30px",
          padding: 7,
        }}
        placeholder="Enter your email so i can get back to you"
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        style={styles.textarea}
        placeholder="Type your message here..."
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        cols={50}
      />
      <br />
      <button style={styles.button} onClick={sendEmail}>
        Send Message
      </button>
      <button onClick={handleDownloadClick} style={styles.button}>
        Download Resume
      </button>
    </div>
  )
}

export default HireMe
