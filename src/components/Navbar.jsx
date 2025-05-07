import { Link } from 'react-router';
import React from 'react';
import { useState } from 'react';
import DropDownMenu from './DropDownMenu';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuBar = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="text-xl font-bold ">ShopSmart</div>

        <div className="flex items-center gap-5">

          <div className="md:flex gap-5 hidden">

            <div className="space-x-4 ">
              <a href="#" className="hover:text-yellow-400">Home</a>
              <a href="#" className="hover:text-yellow-400">Products</a>
              <a href="#" className="hover:text-yellow-400">Offers</a>
            </div>

            <Link to="/cart" className="hover:text-yellow-400">
              <i className="fas fa-shopping-cart"></i> Cart
            </Link>

            <Link to='/login'> <div className="hover:text-yellow-400 cursor-pointer">
              Login / Register
            </div></Link>

          </div>
          {/* Menu Button */}
          <div
            onClick={() => { handleMenuBar() }}
            className=" items-center hover:outline-gray-600 
          border rounded-3xl px-5 py-3 flex gap-3 cursor-pointer 
          hover:shadow-2xl border-gray-300 md:hidden"
          >
            {/* <span className="material-symbols-outlined">menu</span> */}
            <i className="fa-solid fa-circle-user" id="user__icon"></i>
            <i class="fas fa-bars text-white text-2xl cursor-pointer"></i>
          </div>
        </div>

      </nav>
      {menuOpen ? (<DropDownMenu />) : ("")}
    </>
  );
};

export default Navbar;