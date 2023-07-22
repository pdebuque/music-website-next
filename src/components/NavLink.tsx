import React from 'react'
import Link from 'next/link'

type Props = {
  href: string;
  label: string
}

const NavLink = (props: Props) => {

  const { href, label } = props

  return (
    <Link
      href={href}
      className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
    >{label}</Link>
  )
}

export default NavLink