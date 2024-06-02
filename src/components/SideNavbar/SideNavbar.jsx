import React from "react";
import Image from "next/image";

import logo from "../../assests/logo.svg";
import explore from "../../assests/explore.svg";
import doc from "../../assests/doc.svg";
import route from "../../assests/route.svg";
import settings from "../../assests/settings.svg";

const SideNavbar = () => {
  return (
    <nav className="flex flex-col my-4 bg-[#F7FCFF] gap-4 w-20 min-h-screen items-center">
      <Image src={logo} alt="logo" />
      <ul className="flex flex-col gap-8 mt-8">
        <li>
          <Image src={explore} alt="explore" />
        </li>
        <li className=" bg-blue">
          <Image src={doc} alt="doc" />
        </li>
        <li>
          <Image src={route} alt="route" />
        </li>
        <li>
          <Image src={settings} alt="settings" />
        </li>
      </ul>
    </nav>
  );
};

export default SideNavbar;
