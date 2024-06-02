import React from "react";

import styles from "./tabs.module.css";

const Tabs = ({ children }) => {
  return (
    <div className="flex flex-col border-2 flex-[4] rounded-lg ml-4">
      <section className="flex items-center gap-4 ">
        <h3 className=" font-bold text-[#2E5A75] text-[13px] p-2">
          Vendor request details
        </h3>
        <h3 className="text-[#2E5A75] font-bold text-[13px]">
          Vendor form details
        </h3>
        <h3 className="text-[13px] text-[gray]">Vendor finace details</h3>
      </section>
      <section
        className="border-2 overflow-auto h-[80vh] "
        id={styles.scrollBar}
      >
        {children}
      </section>
    </div>
  );
};

export default Tabs;
