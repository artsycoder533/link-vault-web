import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary text-white py-5  border-t border-t-secondary">
    <div className="container mx-auto text-center flex items-center justify-center flex-wrap">
      <p>
        &copy; {new Date().getFullYear()} <span className="text-secondary">Link Vault. </span> All Rights Reserved.
      </p>
      <p>Made By <Link className="text-secondary" href="https://www.natashajohnson.dev/" target="_blank">Natasha Johnson</Link></p>
    </div>
  </footer>
  )
}

export default Footer