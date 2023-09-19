import React, { useState } from "react"
import { AiOutlineSend } from "react-icons/ai"
import "./css.css"
import { MdMarkEmailRead } from "react-icons/md"

const styles = {
  container: {
    padding: "1vw",
    textAlign: "center",
    height: "70vh",
    width: "85vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-10vh",
  },
  title: {
    color: "#333",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  textarea: {
    width: "65vw",
    borderRadius: "50px",
    padding: "20px",
    border: "1px solid #ccc",
    resize: "none",
    fontSize: "16px",
    lineHeight: "1.5",

    borderColor: "aqua",
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
      <h2 style={styles.title}>
        Send me an E-Mail! <MdMarkEmailRead />{" "}
      </h2>
      <input
        style={{
          height: "30px",
          borderRadius: "30px",
          padding: 7,
          width: "65vw",
          borderColor: "aqua",
        }}
        placeholder="kindly enter the Subject"
        onChange={(e) => setSubject(e.target.value)}
      />
      <input
        style={{
          height: "30px",
          width: "65vw",
          margin: "10px",
          borderRadius: "100px",
          padding: 10,
          // color: "black",
          borderColor: "aqua",
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
      <button className="button2" onClick={sendEmail}>
        Send Email <AiOutlineSend />
      </button>
    </div>
  )
}

export default HireMe
