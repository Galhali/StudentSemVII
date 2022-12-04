import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Students Application</Link>
            <Link className='btn btn-outline-light' to="addStudent">Add Student</Link>
        </div>
    </nav>
  )
}
