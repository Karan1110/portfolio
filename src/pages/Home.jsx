import React from "react"

const HomePage = () => {
  return (
    <div style={styles.container}>
      <div className="text-center">
        <h3 className="text-6xl font-bold text-white mb-4">
          Welcome to My Portfolio
        </h3>
      </div>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: 300,
    maxHeight: 5,
    marginTop: 10,
    margin: "0 auto",
    padding: "0.5rem 1.0875rem 1.45rem",
    backgroundColor: "pink",
    display: "flex",
    alignItems: "center",
    borderRadius: "70px",
    justifyContent: "center",
    alignText: "center",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
  },
}

export default HomePage
