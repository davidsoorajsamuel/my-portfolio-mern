import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">
      <span className="logo">My Portfolio</span>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}

export default Navbar
