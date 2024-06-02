import React from "react";

import styles from "./supply.module.css";

const Supply = () => {
  return (
    <div className=" p-4 flex flex-col gap-4">
      <section className=" border-3 border-l-red mb-3 border-4 border-white border-l-red-500">
        <h2 className=" font-bold text-[14px] ml-4">
          Additional Location For Supply
        </h2>
      </section>
      <section className="flex justify-between gap-4 mr-2">
        {/* Top Section */}
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
      </section>
      <div className="flex flex-col gap-1">
        <label className="text-[13px]">Address*</label>
        <input type="text" className=" rounded-md w-1/4 p-2" />
      </div>
    </div>
  );
};

function FirstSection() {
  return (
    <>
      <div className="flex flex-col gap-8 ">
        <div className="flex flex-col gap-1">
          <label className="text-[13px]"> Select State*</label>
          <select name="" id="" className=" rounded-md p-2">
            <option value="">Select Business Type</option>
            <option value="">Retail</option>
            <option value="">Wholesale</option>
            <option value="">Manufacturing</option>
            <option value="">Service</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[13px]">POC Name*</label>
          <input type="text" className=" rounded-md p-2" />
        </div>
      </div>
    </>
  );
}

function SecondSection() {
  return (
    <>
      <div className="flex items-center flex-col gap-8 ">
        <div className="flex flex-col gap-1">
          <label className="text-[13px]">Location</label>
          <input type="text" className=" rounded-md p-2" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[13px]"> POC Desigination</label>
          <input type="text" className=" rounded-md p-2" />
        </div>
      </div>
    </>
  );
}

function ThirdSection() {
  return (
    <>
      <div className="flex  flex-col gap-8 ">
        <div className="flex flex-col gap-1">
          <label className="text-[13px]">Location GSTin</label>
          <input type="text" className=" rounded-md p-2" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[13px]">POC Email ID*</label>
          <input type="text" className=" rounded-md p-2" />
        </div>
      </div>
    </>
  );
}

function FourthSection() {
  return (
    <>
      <div className="flex  flex-col gap-8 ">
        <div class="grid items-center gap-1.5">
          <label className="text-[13px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Location GST Certificate*
          </label>
          <input
            id="picture"
            type="file"
            className="flex  rounded-md border border-input bg-white p-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[13px]">POC Mobile Number*</label>
          <input type="text" className=" rounded-md p-2" />
        </div>
      </div>
    </>
  );
}

export default Supply;
