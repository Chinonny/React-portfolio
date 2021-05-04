import React from 'react';

function Footer() {
    return (
        <footer className="navbar fixed-bottom justify-content-center" id="footer">
        <a href="/" className="text-light">
          Copyright &copy; {new Date().getFullYear()} Lifestyle. 
        </a>
      </footer>
    )
}

export default Footer;