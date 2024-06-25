import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary text-white py-8  border-t border-t-secondary">
    <div className="container mx-auto text-center">
      <p>
        &copy; {new Date().getFullYear()} <span className="text-secondary">Link Vault.</span> All rights reserved.
      </p>
    </div>
  </footer>
  )
}

export default Footer