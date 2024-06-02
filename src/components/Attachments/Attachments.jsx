import React from "react";

import attchments from "../../assests/attachments.svg";
import Image from "next/image";

const Attachments = () => {
  return (
    <div className="border-2 flex-[1] rounded-lg mr-3">
      <section className="flex justify-between p-2">
        <h3 className="text-[#2E5A75] text-[13px] font-bold">Attachments</h3>
        <Image src={attchments} alt="attachments" />
      </section>
      <section className="border-2 flex flex-col gap-4">
        <div className="flex flex-col gap-2 p-2">
          <h1 className=" font-bold text-[13px] ">GST Certificate</h1>
          <div className=" bg-[#d8e9ef] p-1 rounded-md">
            <p className="text-[12px]">vv.pdf</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-2">
          <h1 className=" font-bold text-[13px] ">Pan Number</h1>
          <div className=" bg-[#d8e9ef] p-1 rounded-md">
            <p className="text-[12px]">vv.pdf</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-2 mb-4">
          <h1 className=" font-bold text-[13px] ">MSMSE Certificate</h1>
          <div className=" bg-[#d8e9ef] p-1 rounded-md">
            <p className="text-[12px]">vv.pdf</p>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 p-2">
          <h1 className=" font-bold text-[13px] ">Vendor Contract</h1>
          <div className=" bg-[#d8e9ef] p-1 rounded-md">
            <p className="text-[12px]">vv.pdf</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-2">
          <h1 className=" font-bold text-[13px] ">Vendor Final Proposal</h1>
          <div className=" bg-[#d8e9ef] p-1 rounded-md">
            <p className="text-[12px]">vv.pdf</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Attachments;
