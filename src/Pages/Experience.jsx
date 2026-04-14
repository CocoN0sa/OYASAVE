import React from "react";
import { Progress } from "@mantine/core";
import img from "../imgs/Group 48095456.jpg";
import { useNavigate } from "react-router-dom";


const Experience = () => {
  const navigate = useNavigate();
  
  const featureCards = Array.from({ length: 4 }, (_, index) => ({
    id: index,
    title: "Savings Goals",
    description: "Set and track your saving milestones",
  }));

  return (
    <div className="min-h-screen bg-white">
      <Progress color="cyan" size="xs" value={50} />
      <div className="mx-auto flex min-h-[calc(100vh-4px)] w-full max-w-md flex-col px-4 pb-6 pt-[180px] sm:px-6 sm:pt-14">
        <div className="text-center">
          <div className="text-[24px] font-bold leading-tight text-[#393F4A] sm:text-[28px]">
            Personalize Your Saving Experience
          </div>
          <div className="mt-3 text-[14px] leading-6 text-[#6C7280] sm:text-[16px]">
            Select the features you'd like to explore to get started!
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
          {featureCards.map((card) => (
            <div
              key={card.id}
              className="min-h-[120px] rounded-[8px] bg-[#EFF1F5] p-3 sm:min-h-[111px] sm:p-4"
            >
              <img src={img} alt="" className="h-6 w-6" />
              <h6 className="pt-3 text-[13px] font-bold text-[#393F4A]">
                {card.title}
              </h6>
              <p className="pt-1 text-[11px] leading-4 text-[#98A2B3]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-auto flex justify-center pt-8">
          <button
            type="button"
            onClick={() => navigate("/AutomatedSavings")}
            className="h-12 w-full rounded-[12px] bg-[#44A1A0] px-4 text-white"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
