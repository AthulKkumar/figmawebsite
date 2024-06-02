"use client";
import React from "react";

import arrow from "../../assests/arrow.svg";
import backAction from "../../assests/backAction.svg";
import commentAction from "../../assests/commentAction.svg";
import docAction from "../../assests/docAction.svg";
import downloadAction from "../../assests/downloadAction.svg";
import historyAction from "../../assests/historyAction.svg";
import infoAction from "../../assests/infoAction.svg";
import rightArrow from "../../assests/rightArrow.svg";
import saveDraft from "../../assests/saveDraft.svg";
import Image from "next/image";

const PageSettings = () => {
  const actions = [
    infoAction,
    docAction,
    historyAction,
    commentAction,
    downloadAction,
    backAction,
  ];

  return (
    <div className="flex justify-between items-center mt-4">
      <section className="flex gap-4 ml-4">
        <div className="flex justify-center items-center gap-4">
          <Image src={arrow} alt="arrow" />
          <h2 className=" font-bold text-[18px]">
            Ola Money Technologies Pvt Ltd
          </h2>
        </div>
        <div className="bg-[#F5F4FE] p-2 rounded-lg border-2 border-[#5E4CFE] ml-2 mr-2">
          <p className=" text-[#5E4CFE] font-bold text-[9px]">
            Awaiting Buissness Approval
          </p>
        </div>
        <div className="flex items-center justify-center gap-8">
          {actions.map((action) => (
            <Image src={action} alt="action" />
          ))}
        </div>
      </section>
      <section className="flex gap-8 items-center mr-8">
        <button className="flex items-center justify-center gap-2 bg-[#F5FAF4] p-2 rounded-lg">
          <Image src={saveDraft} alt="saveDraft" />
          <p className=" text-[#0A920A] font-bold text-[14px]">Save Draft</p>
        </button>
        <button className="flex items-center justify-center gap-2 bg-[#017194] p-2 rounded-lg">
          <p className="text-[white] text-[14px] font-bold">Submit</p>
          <Image src={rightArrow} alt="rightArrow" />
        </button>
      </section>
    </div>
  );
};

export default PageSettings;
