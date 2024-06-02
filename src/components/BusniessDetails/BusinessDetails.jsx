import React from "react";

import styles from "./business.module.css";

const BusinessDetails = () => {
  return (
    <div className=" p-4 flex flex-col gap-4">
      <section className="mb-3 border-4 border-white border-l-red-500 ">
        <h2 className=" font-bold text-[14px] ml-4">Business Details</h2>
      </section>
      <section className="flex  gap-4 mr-2">
        {/* Top Section */}
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />

        <FifthSection />
      </section>
      <div className="flex flex-col gap-1">
        <label className="text-[13px]">Vendor address</label>
        <input type="text" className=" rounded-md w-1/4 p-2" />
      </div>
    </div>
  );
};

function FirstSection() {
  const inputField = ["Vendor ID", "Legal Name*", "Trade Name*"];
  const selectField = ["Vendor State*", "Vendor Location*"];
  return (
    <>
      <div className="flex  flex-col gap-8">
        <div className="flex flex-col">
          <label className="text-[13px]">Vendor ID</label>
          <input type="text" className=" rounded-md p-2" />
        </div>
        <div className="flex flex-col  gap-1">
          <label className="text-[13px] ">GST Registred</label>
          <input checked="true" type="checkbox" className={styles.switch} />
        </div>
      </div>
    </>
  );
}

function SecondSection() {
  return (
    <>
      <div className="flex  flex-col gap-8 ">
        <div className="flex flex-col">
          <label className="text-[13px]">Legal Name*</label>
          <input type="text" className=" rounded-md p-2" />
        </div>

        <div class="grid items-center gap-1.5">
          <label className="text-[13px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            GST Certificate*
          </label>
          <input
            id="picture"
            type="file"
            className="flex  rounded-md border border-input bg-white p-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
          />
        </div>
      </div>
    </>
  );
}

function ThirdSection() {
  return (
    <>
      <div className="flex flex-col gap-8 ">
        <div className="flex flex-col">
          <label className="text-[13px]">Trader Name*</label>
          <input type="text" className=" rounded-md p-2" />
        </div>
        <div className="flex flex-col">
          <label className="text-[13px]">Payment Terms</label>
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
        <div className="flex flex-col gap-1">
          <label className="text-[13px]">Vendor State*</label>
          <select name="" id="" className=" rounded-md p-2">
            <option value="">Karnataka</option>
            <option value="">Retail</option>
            <option value="">Wholesale</option>
            <option value="">Manufacturing</option>
            <option value="">Service</option>
          </select>
        </div>
        <div class="grid items-center gap-1.5">
          <label className="text-[13px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            PAN Attachment*
          </label>
          <input
            id="picture"
            type="file"
            className="flex  rounded-md border border-input bg-white p-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
          />
        </div>
      </div>
    </>
  );
}

function FifthSection() {
  return (
    <>
      <div className="flex flex-col gap-8 ">
        <div className="flex flex-col gap-1">
          <label className="text-[13px]">Vendor Loaction*</label>
          <select name="" id="" className=" rounded-md p-2">
            <option value="">Banglore</option>
            <option value="">Retail</option>
            <option value="">Wholesale</option>
            <option value="">Manufacturing</option>
            <option value="">Service</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[13px]">Policy*</label>
          <select name="" id="" className=" rounded-md p-2">
            <option value="">Select Business Type</option>
            <option value="">Retail</option>
            <option value="">Wholesale</option>
            <option value="">Manufacturing</option>
            <option value="">Service</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default BusinessDetails;
