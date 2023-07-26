'use client'

import React from 'react'
import Link from 'next/link'

type Props = {
  href: string;
  label: string
}

//todo: connect the onclick to a scroll position on the page. 

const NavLink = (props: Props) => {

  const { href, label } = props

  const handleClick = () => {
    console.log('clicked', href)
  }

  return (
    <button
      // href={href}
      className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
      onClick = {handleClick}
    >
      {label}
    </button>
  )
}

export default NavLink