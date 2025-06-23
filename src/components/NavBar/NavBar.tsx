import { NavLink } from "react-router";
import useWindowSize from "../../custom_hooks/useWindowSize";
import { useState } from "react";
import MobileHeader from "../MobileHeader/MobileHeader";
import Logo from "../MyLogo/Logo";

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
    url: "/resume",
    url_display_name: "Resume",
  },
  {
    url: "/contact",
    url_display_name: "Contact",
  },
];

const NavBar = () => {
  const window_size = useWindowSize();

  console.log(window_size);

  const [openSideNav, setOpenSideNav] = useState(false);

  return (
    <>
      {window_size >= 768 ? (
        <div className="h-8 bg-gray sticky top-0 flex flex-col justify-center">
          <div className="absolute ml-5  text-[16px]">
            <Logo />
          </div>

          <div className="flex gap-1 pr-5 h-full text-[11px] self-end">
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
        </div>
      ) : (
        <>
          <MobileHeader header_name="{-_-}" setOpenSideNav={setOpenSideNav} />
          <div
            className={`h-full w-full absolute top-0  ${
              openSideNav ? "bg-black/50 z-10" : "-z-10 delay-75"
            }`}
          >
            <div
              className={`bg-gray w-36 h-full duration-75 ${
                openSideNav
                  ? "transition-transform ease-linear"
                  : " -translate-x-full transition-transform ease-linear"
              }`}
            >
              <MobileHeader
                header_name="{-_-}"
                setOpenSideNav={setOpenSideNav}
              />

              <div className="w-full text-[11px]">
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
        </>
      )}
    </>
  );
};

export default NavBar;
