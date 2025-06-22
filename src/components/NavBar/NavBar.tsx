import { NavLink } from "react-router";
import useWindowSize from "../../custom_hooks/useWindowSize";
import ShinyText from "../ShinyText/ShinyText";
import { useState } from "react";
import MobileHeader from "../MobileHeader/MobileHeader";

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
];

const NavBar = () => {
  const window_size = useWindowSize();

  const [openSideNav, setOpenSideNav] = useState(false);

  return (
    <>
      {window_size >= 1024 ? (
        <ul className="h-14 bg-gray sticky top-0 flex justify-end items-center">
          {LINKS.map(({ url, url_display_name }, index) => (
            <li key={index}>
              <NavLink
                to={url}
                // className={({ isActive, isPending }) =>
                //     isPending ? "pending" : isActive ? "active" : ""
                // }
              >
                {url_display_name}
              </NavLink>
            </li>
          ))}
        </ul>
      ) : (
        <div className="relative bg-violet-400 w-screen h-screen">
          <MobileHeader header_name="Test" setOpenSideNav={setOpenSideNav} />
          
          {openSideNav && (
            <div className="h-full w-52 bg-gray flex absolute top-0">
              <MobileHeader
                header_name="Test"
                setOpenSideNav={setOpenSideNav}
              />

            </div>
          )}
        </div>
      )}
    </>
  );
};

export default NavBar;
