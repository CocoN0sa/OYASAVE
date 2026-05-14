import React from "react";
import { Progress } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
import img from "../imgs/Group 48095456.jpg";
import img2 from "../imgs/Group 48095456 (1).jpg";
import img3 from "../imgs/Group 48095456 (2).jpg";
import img4 from "../imgs/Group 48095456 (3).jpg";

const featureCards = [
  {
    id: 1,
    img: (
      <img
        src={img}
        alt="Savings Goals"
        className="h-6 w-6"
        style={{ mixBlendMode: "multiply" }}
      />
    ),
    title: "Savings Goals",
    description: "Set and track your saving milestones.",
  },
  {
    id: 2,
    img: (
      <img
        src={img2}
        alt="Ajo Groups"
        className="h-6 w-6"
        style={{ mixBlendMode: "multiply" }}
      />
    ),
    title: "Ajo Groups",
    description: (
      <>
        Join collaborative saving <br /> groups.
      </>
    ),
  },
  {
    id: 3,
    img: (
      <img
        src={img3}
        alt="Automated Savings"
        className="h-6 w-6"
        style={{ mixBlendMode: "multiply" }}
      />
    ),
    title: "Automated Savings",
    description: (
      <>
        Automate your savings <br /> effortlessly.
      </>
    ),
  },
  {
    id: 4,
    img: (
      <img
        src={img4}
        alt="Investment Options"
        className="h-6 w-6"
        style={{ mixBlendMode: "multiply" }}
      />
    ),
    title: "Investment Options",
    description: (
      <>
        Explore available <br /> investment opportunities.
      </>
    ),
  },
];

const ActiveExperience = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedGoals = location.state?.selectedGoals ?? [];

  return (
    <div className="min-h-screen bg-white">
      <Progress color="#44A1A0" size="xs" value={75} />
      <div className="mx-auto flex min-h-[calc(100vh-4px)] w-full max-w-md flex-col px-4 pb-6 pt-[180px] sm:px-6 sm:pt-14">
        <div className="text-center">
          <div className="text-[24px] font-bold leading-tight text-[#163A11] sm:text-[28px]">
            Active Saving Goals
          </div>
          <div className="mt-3 text-[14px] leading-6 text-[#4B5563] sm:text-[16px]">
            Your selected goals are now active in green. You can still review
            and confirm the goals you chose.
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-5 sm:gap-4">
          {featureCards.map((card) => {
            const isActive = selectedGoals.includes(card.id);
            return (
              <div
                key={card.id}
                className={`min-h-[120px] rounded-[8px] p-3 sm:min-h-[111px] sm:p-4 transition-colors duration-200 ${
                  isActive ? "bg-[#44A1A0] text-white" : "bg-[#EFF1F5]"
                }`}
              >
                {card.img}
                <h6
                  className={`pt-3 text-[13px] font-bold ${
                    isActive ? "text-white" : "text-[#393F4A]"
                  }`}
                >
                  {card.title}
                </h6>
                <p
                  className={`pt-1 text-[11px] leading-4 ${
                    isActive ? "text-white" : "text-[#98A2B3]"
                  }`}
                >
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-3 flex flex-col gap-3 pt-8">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="h-12 w-full rounded-[12px] border border-[#22C55E] bg-white px-4 text-[#166534]"
          >
            Back to Experience
          </button>
          <button
            type="button"
            onClick={() => navigate("/Automatic")}
            className="h-12 w-full rounded-[12px] bg-[#44A1A0] px-4 text-white"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActiveExperience;
