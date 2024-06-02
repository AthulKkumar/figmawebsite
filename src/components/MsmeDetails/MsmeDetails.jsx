import React from "react";

import styles from "./msme.module.css";

const MsmeDetails = () => {
  return (
    <div className=" p-5 flex flex-col gap-4 border-2">
      <section className="mb-3 border-4 border-white border-l-red-500">
        <h2 className=" font-bold text-[14px] ml-4">MSME Details</h2>
      </section>
      <section className="flex justify-between gap-4 mr-2">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
      </section>
    </div>
  );
};

function FirstSection() {
  return (
    <>
      <div className="flex  flex-col justify-between gap-8 ">
        <div className="flex flex-col  gap-1">
          <label className="text-[13px] ">MSME Registred</label>
          <input checked="true" type="checkbox" className={styles.switch} />
        </div>
        <div className="flex flex-col">
          <label className="text-[13px]">LDC Start Date*</label>
          <input type="date" className=" rounded-md p-2 w-60" />
        </div>
      </div>
    </>
  );
}

function SecondSection() {
  return (
    <>
      <div className="flex  flex-col gap-8 ">
        <div class="grid items-center gap-1.5">
          <label className="text-[13px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            MSME Attachment*
          </label>
          <input
            id="picture"
            type="file"
            className="flex  rounded-md border border-input bg-white p-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[13px]">LDC End Date*</label>
          <input type="date" className=" rounded-md p-2" />
        </div>
      </div>
    </>
  );
}

function ThirdSection() {
  return (
    <>
      <div className="flex  flex-col gap-8 ml-2 mr-2">
        <div className="flex flex-col  gap-1">
          <label className="text-[13px] w-max">Lower Exception</label>
          <input checked="true" type="checkbox" className={styles.switch} />
        </div>
      </div>
    </>
  );
}

function FourthSection() {
  return (
    <>
      <div className="flex flex-col gap-8 ">
        <div class="grid items-center gap-1.5">
          <label className="text-[13px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Lower Exception Certificate
          </label>
          <input
            id="picture"
            type="file"
            className="flex  rounded-md border border-input bg-white p-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
          />
        </div>
        <div class="grid items-center gap-1.5">
          <label className="text-[13px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Lower Exception Certificate
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
        <div className="flex flex-col">
          <label className="text-[13px]">LDC Upper Limit</label>
          <input type="text" className=" rounded-md p-2" />
        </div>
        <div className="flex flex-col">
          <label className="text-[13px]">PAN Number</label>
          <input type="text" className=" rounded-md p-2" />
        </div>
      </div>
    </>
  );
}

export default MsmeDetails;
