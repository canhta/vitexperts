"use client";
import MainMenu from "../header-menu";
import Search from "../search";
import { useEffect, useState } from "react";
import SideBar from "../offcanvas";
import logo1 from "../../../../public/assets/img/logo-1.png";
import logo2 from "../../../../public/assets/img/logo-2.png";
import MobileMenuPopup from "../mobile-menu/menu-area";
import Link from "next/link";
import { contactConfig } from "@/configs/contact";
import Image from "next/image";

type Props = {
  variant?: string;
};

const Header = ({ variant }: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuSidebar, setMenuSidebar] = useState(false);
  const [search, setSearch] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);
  return (
    <>
      <div className="top__bar two">
        <div className="custom__container">
          <div className="row">
            <div className="col-xl-5 col-md-5">
              <div className="top__bar-right">
                <Link href="https://www.google.com/maps">
                  <i className="fas fa-map-marker-alt"></i>
                  {contactConfig.address}
                </Link>
              </div>
            </div>
            <div className="col-xl-7 col-md-7">
              <div className="top__bar-left">
                <span>
                  <i className="fas fa-clock"></i>Working Hours : 8AM - 10PM
                </span>
                <Link href={`mailto:${contactConfig.email}`}>
                  <i className="fas fa-envelope"></i>
                  {contactConfig.email}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`header__area ${variant ? variant : ""} header__sticky two ${
          isSticky ? "header__sticky-sticky-menu" : ""
        }`}
      >
        <div className="custom__container">
          <div className="header__area-menubar">
            <div className="header__area-menubar-left">
              <div className="header__area-menubar-left-logo">
                <Link href="/">
                  <Image src={logo1} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="header__area-menubar-center">
              <div className="header__area-menubar-center-menu">
                <MainMenu />
              </div>
            </div>
            <div className="header__area-menubar-right">
              <div className="header__area-menubar-right-box">
                <div className="header__area-menubar-right-box-search">
                  <div className="search">
                    <span
                      className="header__area-menubar-right-box-search-icon open"
                      onClick={() => setSearch(true)}
                    >
                      <i className="flaticon-loupe"></i>
                    </span>
                  </div>
                </div>
                <div className="header__area-menubar-right-box-sidebar">
                  <div
                    className="header__area-menubar-right-box-sidebar-popup-icon"
                    onClick={() => setSidebarOpen(true)}
                  >
                    <span className="bar-1"></span>
                    <span className="bar-2"></span>
                    <span className="bar-3"></span>
                  </div>
                </div>
                <div className="header__area-menubar-right-box-help">
                  <i className="flaticon-phone-call"></i>
                  <div className="header__area-menubar-right-box-help-info">
                    <span>Make a call</span>
                    {
                      <Link href={`tel:${contactConfig.phone}`}>
                        {contactConfig.phone}
                      </Link>
                    }
                  </div>
                </div>
                <div className="header__area-menubar-right-responsive-menu menu__bar">
                  <i
                    className="flaticon-menu-1"
                    onClick={() => setMenuSidebar(true)}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideBar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <MobileMenuPopup
        isOpen={menuSidebar}
        setIsOpen={setMenuSidebar}
        popupLogo={logo2}
      />
      <Search isOpen={search} setIsOpen={setSearch} />
    </>
  );
};

export default Header;
