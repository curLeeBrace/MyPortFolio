import { NavLink } from "react-router";
import useWindowSize from "../../custom_hooks/useWindowSize";
import { useEffect, useState } from "react";
import MobileHeader from "../MobileHeader/MobileHeader";
import Logo from "../MyLogo/Logo";


import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";

interface ILINKS {
  url: string;
  url_display_name: string;
}

const LINKS: ILINKS[] = [
  {
    url: "/home",
    url_display_name: "Home",
  },
  {
    url: "/about-me",
    url_display_name: "About Me",
  },
  {
    url: "/my-works",
    url_display_name: "Portfolio",
  },
  {
    url: "/contact",
    url_display_name: "Contact",
  },
];

const NavBar = () => {
  const window_size = useWindowSize();
  const {scrollY} = useScroll()

  const nav_bg_color =   useTransform(scrollY, [0, 10], ["#141414", "#242424"])

  useMotionValueEvent(scrollY, "change", (current) => {
    console.log(current)
  })

  const [openSideNav, setOpenSideNav] = useState(false);

  useEffect(()=>{
      if(openSideNav){
        document.body.style.overflowY = "hidden";
        
      } 
      else {
         document.body.style.overflowY = "auto";
      }

 

  },[openSideNav])

  return (
    <>
      {window_size >= 768 ? (
        <motion.div className={`h-14 z-50 sticky top-0 right-0 flex flex-col justify-center`} style={{backgroundColor : nav_bg_color}}>
          <div className="absolute ml-5 text-[25px]">
            <Logo />
          </div>

          <div className="flex gap-1 pr-5 h-full text-[18px] self-end">
            {LINKS.map(({ url, url_display_name }, index) => (
              <NavLink
                to={url}
                key={index}
                className={({ isActive }) =>
                  `flex justify-center items-center rounded-sm px-2 h-full hover:bg-black/50 active:bg-white/10 ${
                    isActive ? "text-royal-purple" : ""
                  }`
                }
              >
                {url_display_name}
              </NavLink>
            ))}
          </div>
        </motion.div>
      ) : (
        <div className="sticky w-full top-0 z-50">
          <div className="w-full">
            <MobileHeader header_name="{-_-}" setOpenSideNav={setOpenSideNav} bg_color={nav_bg_color} />
          </div>

          <div
            className={`${
              openSideNav && "bg-black/50 h-full w-full fixed top-0"
            }`}
          >
            <div
              className={`bg-gray w-48 h-full top-0 fixed duration-75  ${
                openSideNav
                  ? "transition-transform ease-linear"
                  : " -translate-x-full transition-transform ease-linear"
              }`}
            >
              <MobileHeader
                header_name="{-_-}"
                setOpenSideNav={setOpenSideNav}
                // bg_color={nav_bg_color}
              />

              <div className="w-full text-[18px]">
                {LINKS.map(({ url, url_display_name }, index) => (
                  <NavLink
                    to={url}
                    key={index}
                    className={({ isActive }) =>
                      `block rounded-md hover:bg-black/50 active:bg-white/10 m-1 mx-2 pl-2 py-1 ${
                        isActive ? "text-royal-purple" : ""
                      }`
                    }
                  >
                    {url_display_name}
                  </NavLink>
                ))}
              </div>

              <div className="border-b-1 mt-5 mx-1 border-white/30" />

              <div></div>
            </div>
          </div>

          {/*  */}
        </div>
      )}
    </>
  );
};

export default NavBar;
