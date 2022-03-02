import React from 'react'
import turtle from '../images/turtle.png'

const Header = () => {
    return (
        <header className="App-header">
      
        {/* image from https://i.pinimg.com/originals/82/8a/15/828a159fb6b44e8fee62c2410b315b53.png */}
          
          <img src={turtle} className="App-logo" alt="cartoon turtle" />
          <p>
            Here is my new blog
          </p>
          
          <a
            className="App-link"
            href="https://github.com/LioraW"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/liorawachsstock/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </header>
    )
}

export default Header