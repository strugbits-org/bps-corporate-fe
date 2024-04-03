import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {

  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center",
     flexFlow:"column" }}>
      <h1 className="ml-4 mt-3-cs fs--20">404 | Page Not Found</h1>
      <Link to="/">Go Back</Link>
    </div>
  )
}

export default PageNotFound