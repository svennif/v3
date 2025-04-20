import { NavLink } from "react-router";

export default function Navbar(){
  return(
    <nav className="flex justify-between font-medium text-xl">
      <NavLink to="/">Sven Ingar Frantzen</NavLink>
      <div className="flex gap-4">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </div>
    </nav>
  )
}