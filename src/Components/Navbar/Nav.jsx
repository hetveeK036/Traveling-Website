import "react";
import navCSS from "./../Navbar/Nav.module.css";
import { useRef } from "react";

const Nav = () => {
  const menu = useRef();

  const ToggleMenu = () => {
    menu.current.classList.toggle(navCSS.activeMenu);
  };

  return (
    <>
      <div className={navCSS.nav_Wrapper}>
        <div className={navCSS.logo}>
          <a href="#">
            Travelia <span>.</span>
          </a>
        </div>
        <ul ref={menu}>
          <li>
            <a href="#"> Home</a>{" "}
          </li>
          <li>
            <a href="#"> Trips</a>{" "}
          </li>
          <li>
            <a href="#"> Destination</a>{" "}
          </li>
          <li>
            <a href="#"> Searches</a>{" "}
          </li>
          <li>
            <a href="#"> About us</a>{" "}
          </li>
          <li>
            <a href="#"> Popular Destination</a>{" "}
          </li>
        </ul>
        <div className={navCSS.nav_btns}>
          <div className={navCSS.search_wrapper}>
            <i className="ri-search-line"></i>
            <input type="text" name="text" id="" placeholder="Search Here." />
          </div>
          <div className={navCSS.CallBtn}>
            <i className="ri-phone-line"></i>
            <p>
              +91 1234 567 890 <small>Call your Travel Agent</small>
            </p>
          </div>
          <i
            className="ri-menu-2-line"
            id={navCSS.navBar}
            onClick={ToggleMenu}
          ></i>
        </div>
      </div>
    </>
  );
};

export default Nav;
