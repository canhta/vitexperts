import Link from "next/link";
import logo2 from "../../../public/assets/img/logo-2.png";
import Social from "@/components/data/social";
import Image from "next/image";
import { contactConfig } from "@/configs/contact";

type Props = {
  isOpen: boolean;
  setIsOpen: any;
};

const SideBar = ({ isOpen, setIsOpen }: Props) => {
  return (
    <>
      <div
        className={`header__area-menubar-right-sidebar-popup ${
          isOpen ? "active" : ""
        }`}
      >
        <div className="sidebar-close-btn" onClick={() => setIsOpen(false)}>
          <i className="fal fa-times"></i>
        </div>
        <div className="header__area-menubar-right-sidebar-popup-logo">
          <Link href="/">
            <Image className="logo_one" src={logo2} alt="logo" />
          </Link>
        </div>
        <p>
          The insurance company assumes the financial risk of covering these
          events in exchange for the premiums paid by the policyholder. There
          are many different types of insurance,
        </p>
        <div className="header__area-menubar-right-sidebar-popup-contact">
          <h4 className="mb-30">Get In Touch</h4>
          <div className="header__area-menubar-right-sidebar-popup-contact-item">
            <div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
              <i className="fal fa-phone-alt icon-animation"></i>
            </div>
            <div className="header__area-menubar-right-sidebar-popup-contact-item-content">
              <span>Call Now</span>
              <h6>
                <Link href={`tel:${contactConfig.phone}`}>
                  {contactConfig.phone}
                </Link>
              </h6>
            </div>
          </div>
          <div className="header__area-menubar-right-sidebar-popup-contact-item">
            <div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
              <i className="fal fa-envelope"></i>
            </div>
            <div className="header__area-menubar-right-sidebar-popup-contact-item-content">
              <span>Email</span>
              <h6>
                <Link href={`mailto:${contactConfig.email}`}>
                  {contactConfig.email}
                </Link>
              </h6>
            </div>
          </div>
          <div className="header__area-menubar-right-sidebar-popup-contact-item">
            <div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
              <i className="fal fa-map-marker-alt"></i>
            </div>
            <div className="header__area-menubar-right-sidebar-popup-contact-item-content">
              <span>Address</span>
              <h6>
                <Link href="https://google.com/maps" target="_blank">
                  {contactConfig.address}
                </Link>
              </h6>
            </div>
          </div>
        </div>
        <div className="header__area-menubar-right-sidebar-popup-social social__icon">
          <Social />
        </div>
      </div>
      <div className={`sidebar-overlay ${isOpen ? "show" : ""}`}></div>
    </>
  );
};

export default SideBar;
