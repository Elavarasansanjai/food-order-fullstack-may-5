import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BsCartFill } from 'react-icons/bs';
import { IoMdContact } from 'react-icons/io';
import { useSelector } from 'react-redux';
const Header = () => {
  const totalQuantity = useSelector(({ cart }) => cart.totalQuantity);
  return (
    <div className="header-container">
      <div className="header">
        <div className="logo">
          <Link to="#" className="link">
            <h1>Nandu Milk</h1>
          </Link>
        </div>
        <div className="links">
          <div className="pages-link">
            <ul>
              <li>
                <NavLink
                  end
                  to="/"
                  className={({ isActive }) => (isActive ? 'active' : 'link')}
                >
                  <p>Home</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu"
                  className={({ isActive }) => (isActive ? 'active' : 'link')}
                >
                  <p>Menu</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contect"
                  className={({ isActive }) => (isActive ? 'active' : 'link')}
                >
                  <p>Contect</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? 'active' : 'link')}
                >
                  <p>About</p>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="logo-link">
            <div className="logos">
              <div>
                <Link to="/cart" className="link">
                  <BsCartFill />
                </Link>
                <div className="total-product">{totalQuantity}</div>
              </div>
              <div>
                <Link to="/login" className="link">
                  <IoMdContact />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
