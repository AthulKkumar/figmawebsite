import React from "react";

import notification from "../../assests/notification.svg";
import Image from "next/image";

const TopBar = () => {
  return (
    <nav className="flex justify-between w-full py-4 border-2 border-white border-b-gray-500">
      <section className="ml-4">
        <h1 className="font-bold text-[22px]">Manage Vendor</h1>
      </section>
      <section className="flex items-center gap-4">
        <div className="border-2 p-2 rounded-full">
          <Image src={notification} alt="notification" />
        </div>
        <hr />
        <div className="mr-4 flex gap-4">
          <Image
            src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
            alt="user"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex flex-col gap-1">
            <h1 className="font-semibold text-sm">John Doe</h1>
            <p className=" text-[9px]">jhon@gmail.com</p>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default TopBar;
