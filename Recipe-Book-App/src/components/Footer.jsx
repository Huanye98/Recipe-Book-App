import React from 'react'
import githubLogo  from "../assets/Octicons-mark-github.svg"
function Footer() {
  return (
    <footer>
      <img src={githubLogo} alt="" />
      <a href="https://github.com/Huanye98/Recipe-Book-App">
      GitHub Repository
      </a>
    </footer>
  )
}

export default Footer