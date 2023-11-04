import React, { useContext, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Link, useLocation, NavLink } from "react-router-dom";
import logo from "../assets/images/sheout.png";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { ShopContext } from "./shopcontext";
import wishlist from "../assets/images/wishlist.svg";
import user from "../assets/images/user.svg";
import { TbWorldDollar } from "react-icons/tb";

const header = () => {
  const location = useLocation();
  const { getTotalCartProducts } = useContext(ShopContext);
  const totalProducts = getTotalCartProducts();
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Link to={"/shop"}>
        <header className="header-top-strip "></header>
      </Link>

      <header className="navbar-middle sticky-top p-2 text-sm-center  p-md-2 p-lg-2 shadow-sm">
        <div className="container-xxl">
          <div className="row ">
            <nav
              className="col-md-2 my-auto d-flex justify-content-center"
              role="navigation"
            >
              <div
                className="navbar-toggler d-md-none "
                type="button"
                onClick={toggleMenu}
              >
                <span className="navbar-toggler-icon">
                  {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
                </span>
              </div>

              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                  width={124}
                  height={26}
                
                />
              </Link>

              <div className="cart-span fs-2 d-md-none p-0 ">
                <Link
                  to="cart"
                  className={
                    location.pathname === "/cart" ? "active" : "inactive"
                  }
                >
                  <AiOutlineShoppingCart />
                  <b>
                    <span>{totalProducts}</span>
                  </b>
                </Link>
              </div>

              <div className="cart-span-2 fs-2 p-0 d-md-none ">
                <Link
                  to="login"
                  className={
                    location.pathname === "/login" ? "active" : "inactive"
                  }
                >
                  <AiOutlineUser />
                </Link>
              </div>
            </nav>

            <div className=" col-md-8 row col-lg-8  ms-2 ">
              <div className="col-md-3 d-md-none d-lg-flex ">
                <div className="input-group d-none d-md-flex  ">
                  <input
                    type="text"
                    className="form-control text-start ps-2 "
                    placeholder="Search ..."
                    aria-label="Search ..."
                    aria-describedby="basic-addon2"
                  />
                  <button role="button"
                    className="input-group-text fs-4 pt-2"
                    id="basic-addon2" aria-label="Name"
                  >
                    <BiSearch />
                  </button>
                </div>
              </div>

              <div className="nav-links col-6 col-md-6 col-lg-6 text-center m-auto d-none d-md-flex  align-item-center justify-content-between mx-md-0 my-md-auto mx-2 ps-3 ">
                <div className="mx-2">
                  <NavLink
                    to="/"
                    className={
                      location.pathname === "/" ? "active" : "not-active"
                    }
                    onClick={toggleMenu}
                  >
                    HOME
                  </NavLink>
                </div>
                <div className="mx-2">
                  <NavLink
                    to="/shop"
                    className={
                      location.pathname === "/shop" ? "active" : "not-active"
                    }
                    onClick={toggleMenu}
                  >
                    SHOP
                  </NavLink>
                </div>

                <div className="mx-2">
                  <NavLink
                    to="/women"
                    className={
                      location.pathname === "/women" ? "active" : "not-active"
                    }
                    onClick={toggleMenu}
                  >
                    WOMEN
                  </NavLink>
                </div>
                <div className="mx-2">
                  <NavLink
                    to="/men"
                    className={
                      location.pathname === "/men" ? "active" : "not-active"
                    }
                    onClick={toggleMenu}
                  >
                    MEN
                  </NavLink>
                </div>
                <div className="mx-2">
                  <NavLink
                    to="/learnblog"
                    className={
                      location.pathname === "/learnblog" ? "active" : "not-active"
                    }
                    onClick={toggleMenu}
                  >
                    BLOG
                  </NavLink>
                </div>
                <div className="mx-2">
                  <NavLink
                    to="/about"
                    className={
                      location.pathname === "/about" ? "active" : "not-active"
                    }
                    onClick={toggleMenu}
                  >
                    ABOUT
                  </NavLink>
                </div>
                <div className="mx-2">
                  <NavLink
                    to="/contact"
                    className={
                      location.pathname === "/contact" ? "active" : "not-active"
                    }
                    onClick={toggleMenu}
                  >
                    CONTACT
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="nav-links-nav col-lg-2 col-md-1 d-none d-md-flex d-lg-flex  align-items-center justify-content-lg-end my-auto ">
              <Link
                onClick={toggleMenu}
                to={"login"}
                className={
                  location.pathname === "/login" ? "inactive" : "active"
                }
              >
                <div className="d-flex">
                  <span
                    data-tooltip-id="my-tooltip-1"
                    style={{ backgroundColor: "#fdfdfd" }}
                  >
                    <AiOutlineUser className="fs-3 mx-1" />
                  </span>
                </div>
              </Link>

              <Link
                onClick={toggleMenu}
                to={"cart"}
                className={
                  location.pathname === "/cart" ? "inactive" : "active"
                }
              >
                <div className="d-flex ">
                  <span
                    data-tooltip-id="my-tooltip-2"
                    style={{ backgroundColor: "#fdfdfd" }}
                  >
                    <AiOutlineShoppingCart className="fs-3 ms-2 " />
                  </span>

                  <p>
                    {" "}
                    <span className="text-danger me-2">
                      {totalProducts > 0 && `(${totalProducts})`}
                    </span>
                  </p>
                </div>
              </Link>
              <Link
                onClick={toggleMenu}
                to={"wishlist"}
                className={
                  location.pathname === "/wishlist" ? "inactive" : "active"
                }
              >
                <div className="d-flex ">
                  <span
                    className="tool"
                    data-tooltip-id="my-tooltip-3"
                    style={{ backgroundColor: "#fdfdfd" }}
                  >
                    <TbWorldDollar className="fs-3 mx-1" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {showMenu && (
          <div className="col-md-10 d-md-none mt-3">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control text-start"
                placeholder="Find products ..."
                aria-label="Find products ..."
                aria-describedby="basic-addon2"
              />
              <button className="input-group-text" id="basic-addon2">
                search
              </button>
            </div>
            <div className="menu-links mt-2">
              <div className="mb-2">
                <NavLink
                  className={
                    location.pathname === "/" ? "active" : "not-active"
                  }
                  to="/"
                  onClick={toggleMenu}
                >
                  HOME
                </NavLink>
              </div>
              <div className="mb-2">
                <NavLink
                  className={
                    location.pathname === "/shop" ? "active" : "not-active"
                  }
                  to="/shop"
                  onClick={toggleMenu}
                >
                  SHOP
                </NavLink>
              </div>
              <div className="mb-2">
                <NavLink
                  className={
                    location.pathname === "/WOMEN" ? "active" : "not-active"
                  }
                  to="/WOMEN"
                  onClick={toggleMenu}
                >
                  WOMEN
                </NavLink>
              </div>
              <div className="mb-2">
                <NavLink
                  className={
                    location.pathname === "/MEN" ? "active" : "not-active"
                  }
                  to="/MEN"
                  onClick={toggleMenu}
                >
                  MEN
                </NavLink>
              </div>
              <div className="mb-2">
                <NavLink
                  className={
                    location.pathname === "/learnblog" ? "active" : "not-active"
                  }
                  to="/learnblog"
                  onClick={toggleMenu}
                >
                  BLOG
                </NavLink>
              </div>
              <div className="mb-2">
                <NavLink
                  className={
                    location.pathname === "/about" ? "active" : "not-active"
                  }
                  to="/about"
                  onClick={toggleMenu}
                >
                  ABOUT
                </NavLink>
              </div>
              <div className="mb-2">
                <NavLink
                  className={
                    location.pathname === "/contact" ? "active" : "not-active"
                  }
                  to="/contact"
                  onClick={toggleMenu}
                >
                  CONTACT
                </NavLink>
              </div>
            </div>

            <div className="menu-bar__actions">
              <div className="mb-2">
                <Link
                  to=""
                  className={
                    location.pathname === "/" ? "active" : "not-active"
                  }
                  onClick={toggleMenu}
                >
                  <img src={wishlist} alt="wishlist" className="d-none" />
                  <span>Wishlist</span>
                </Link>
              </div>
              <div className="mb-2">
                <Link
                  to="/login"
                  className={
                    location.pathname === "/login" ? "active" : "not-active"
                  }
                  onClick={toggleMenu}
                >
                  <img src={user} alt="user" className="d-none" />
                  <span>Account</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default header;
