import React from 'react'
import './footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer id="footer">
        Copyright &copy; {year} Nagarajan. All rights received.
    </footer>
  )
}

export default Footer