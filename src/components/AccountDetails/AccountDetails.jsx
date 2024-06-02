import React from "react";

const AccountDetails = () => {
  return (
    <div className=" p-4 flex flex-col gap-4 border-2">
      <section className="mb-3 border-4 border-white border-l-red-500">
        <h2 className=" font-bold text-[14px] ml-4">Account Details</h2>
      </section>
      <section className="flex justify-between gap-4 mr-2">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
      </section>
    </div>
  );
};

function FirstSection() {
  return (
    <>
      <div className="flex flex-col gap-8 ">
        <div className="flex flex-col gap-1">
          <label className="text-[13px]"> Select Bank*</label>
          <select name="" id="" className=" rounded-md p-2">
            <option value="">SBI</option>
            <option value="">Retail</option>
            <option value="">Wholesale</option>
            <option value="">Manufacturing</option>
            <option value="">Service</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[13px]">IFSC Code*</label>
          <input type="text" className=" rounded-md p-2" />
        </div>
      </div>
    </>
  );
}

function SecondSection() {
  return (
    <>
      <div className="flex  flex-col gap-8 ">
        <div className="flex flex-col gap-1">
          <label className="text-[13px]">Account Name</label>
          <input type="text" className=" rounded-md p-2" />
        </div>
        <div class="grid items-center gap-1.5">
          <label className="text-[13px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Cancelled Check
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
      <div className="flex  flex-col gap-8 ">
        <div className="flex flex-col gap-1">
          <label className="text-[13px]">Account Number</label>
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
          <label className="text-[13px]">Confirm Account Number</label>
          <input type="text" className=" rounded-md p-2" />
        </div>
      </div>
    </>
  );
}

export default AccountDetails;
