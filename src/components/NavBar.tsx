import React from 'react'
import NavLink from './NavLink'

const NavBar = () => {

  const links = [
    '/about', '/projects', '/thoughts', '/contact'

  ]
  return (
    <div
      className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"
    >
      <NavLink
        href="/"
        label="Home"
      />
      <div>
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