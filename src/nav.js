import React, { useEffect } from 'react';
import './App.css'; 

function Nav() {
  useEffect(() => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    const toggleMenu = () => {
      hamburger.classList.toggle('hamburger-active');
      navMenu.classList.toggle('hidden');
    };

    if (hamburger && navMenu) {
      hamburger.addEventListener('click', toggleMenu);
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (hamburger && navMenu) {
        hamburger.removeEventListener('click', toggleMenu);
      }
    };
  }, []);

  return (
    <header className="bg-transparent fixed top-0 left-0 w-full flex items-center z-10 bg-navy opacity-90 shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a href="#" className="font-bold text-lg text-white block py-6">Daffaaptar</a>
          </div>
          <div className="flex items-center px-4">
            <button id="hamburger" name="hamburger" type="button" className="block absolute right-4 lg:hidden">
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
            </button>
            <nav id="nav-menu" className="hidden absolute py-5 bg-navy rounded-lg max-w-[250px] w-full right-4 top-full shadow-lg lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
              <ul className="block lg:flex">
                <li className="group">
                  <a href="#" className="text-base text-white py-2 mx-8 flex">Home</a>
                </li>
                <li className="group">
                  <a href="#" className="text-base text-white py-2 mx-8 flex">About</a>
                </li>
                <li className="group">
                  <a href="../views/product.html" className="text-base text-white py-2 mx-8 flex">Product</a>
                </li>
                <li className="group">
                  <a href="#" className="text-base text-white py-2 mx-8 flex bg-oren rounded-full w-[150px] text-center justify-center items-center" type="button">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
