import React from 'react'

const Footer = () => {
  let footerStyle = {
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    backgroundColor: "#212529",
    color: "#f8f9fa",
    padding: "15px 0",
    textAlign: "center",
    zIndex: "1000",
    boxShadow: "0 -2px 10px rgba(0,0,0,0.1)"
  }

  return (
    <footer style={footerStyle}>
      <p className="mb-0">
        Copyright &copy; {new Date().getFullYear()} MyTodoList.com
      </p>
    </footer>
  )
}

export default Footer