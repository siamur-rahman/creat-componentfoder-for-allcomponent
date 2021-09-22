import React from 'react';
import './Header.css';
const Header = () => {
   return (
      <div>
         <nav className="menu">
            <a href="/home">Home</a>
            <a href="/counties">Countries</a>
            <a href="/about">About</a>
         </nav>
         <p className="TEST">test css</p>
      </div>
   );
};

export default Header;