import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = ({ handleOpen, handleRemove, openClass, addClass }) => {
  const [scroll, setScroll] = useState(0);
  const [isSearchToggled, setSearchToggled] = useState(false);
  const [isLanguageToggled, setLanguageToggled] = useState(false);
  const toggleSearchTrueFalse = () => setSearchToggled(!isSearchToggled);
  const toggleLanguageTrueFalse = () => setLanguageToggled(!isLanguageToggled);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <header
        className={`${
          scroll ? "header sticky-bar stick" : "header sticky-bar"
        } ${addClass}`}
      >
        <div className="container">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <Link className="d-flex" href="/">
                  <img alt="Ecom" src="assets/imgs/template/logo.svg" />
                </Link>
              </div>
              <div className="header-nav">
                <nav className="nav-main-menu d-none d-xl-block">
                  <ul className="main-menu">
                    <li>
                      <Link className="active" href="/">
                        {/* Home */}
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
