import React from 'react'
import {Link} from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">QuizApp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link "  to="/CreateQuiz">Create quiz</Link>
        <Link className="nav-link" to="/TakeQuiz">Take Quiz</Link>
        {/* <Link className="nav-link" to="#">Pricing</Link>
        <Link className="nav-link disabled">Disabled</Link> */}
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
