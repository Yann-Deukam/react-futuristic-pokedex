import React from "react"
import Icon from "../assets/pokeball-icon.png"
import { MenuIcon } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const location = useLocation()
  const navigationRoutes = [
    { name: "Search", route: "/search" },
    { name: "Compare", route: "/compare" },
    { name: "Pokemon", route: "/pokemon" },
    { name: "My List", route: "/list" },
    { name: "About", route: "/about" },
  ]

  return (
    <nav>
      <div className="block">
        <img src={Icon} alt="pokeball-icon" />
      </div>
      <div className="data">
        <ul>
          {navigationRoutes.map(({ name, route }, index) => {
            const isActive = location.pathname === route
            return (
              <Link
                to={route}
                key={index}
                className={`nav-item ${isActive ? "active" : ""}`}
              >
                <li>{name}</li>
              </Link>
            )
          })}
        </ul>
      </div>
      <div className="block">
        <MenuIcon />
      </div>
    </nav>
  )
}

export default Navbar
