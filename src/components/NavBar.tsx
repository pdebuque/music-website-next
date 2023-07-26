import React from 'react'
import NavLink from './NavLink'

const NavBar = () => {

  const links = [
    '/about', '/projects', '/thoughts', '/contact'
  ]
  
  return (
    <div
      className="fixed grid grid-cols-[1fr_2fr_1fr] z-10 w-full items-start font-mono text-sm mt-4 mx-4"
    >
      <div>
      <NavLink
        href="/"
        label="Home"
      />
      </div>
      <div>
        <h1 className="text-4xl font-light font-header text-slate-900 text-center">Paolo Debuque</h1>
      </div>
      <div className = 'items-right'>
        {links.map((link, index) => (
          <NavLink
            key={index}
            href={link}
            label={link}
          />
        ))
        }
      </div>
    </div>
  )
}

export default NavBar