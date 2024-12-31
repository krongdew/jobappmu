'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNavContent from "../header/HeaderNavContent";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const t = useTranslations("Common");

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    // <!-- Main Header-->
    <header
      className={`main-header header-style-two alternate2 ${
        navbar ? "fixed-header animated slideInDown" : ""
      }`}
    >
      <div className="auto-container">
        {/* <!-- Main box --> */}
        <div className="main-box">
          {/* <!--Nav Outer --> */}
          <div className="nav-outer">
            <div className="logo-box">
              <div className="logo">
                <Link href="/">
                  <Image
                    width={40}
                    height={40}
                    src="/images/favicon.png"
                    alt="brand"
                  />
                </Link>
              </div>
            </div>
            {/* End .logo-box */}

            <HeaderNavContent />
            {/* <!-- Main Menu End--> */}
          </div>
          {/* End .nav-outer */}

          <div className="outer-box">
            <div className="btn-box">
              <a
                href="#"
                className="theme-btn btn-style-six call-modal"
                data-bs-toggle="modal"
                data-bs-target="#loginPopupModal"
              >
                {t('Login / Register')}
              </a>
              <Link
                href="/employers-dashboard/post-jobs"
                className="theme-btn btn-style-five"
              >
                {t('Job Post')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;