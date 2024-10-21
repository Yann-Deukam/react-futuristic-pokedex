import React from "react"
import Icon from "../assets/pokeball-icon.png"
import { X } from "lucide-react"

const Footer = () => {
  return (
    <footer>
      <div className="block">
        <img src={Icon} alt="pokeball-icon" />
      </div>
      <div className="data"></div>
      <div className="block">
        <X />
      </div>
    </footer>
  )
}

export default Footer
