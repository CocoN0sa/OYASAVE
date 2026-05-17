import React, { useMemo, useState } from "react";
import { Progress } from "@mantine/core";
import img from "../imgs/Group 48095456.jpg";
import img2 from "../imgs/Group 48095456 (1).jpg";
import img3 from "../imgs/Group 48095456 (2).jpg";
import img4 from "../imgs/Group 48095456 (3).jpg";
import { useNavigate } from "react-router-dom";

const Experience = () => {
  const navigate = useNavigate();
  const [selectedGoals, setSelectedGoals] = useState([]);

  const featureCards = useMemo(
    () => [
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
    ],
    [],
  );

  const toggleGoal = (id) => {
    setSelectedGoals((current) =>
      current.includes(id)
        ? current.filter((goalId) => goalId !== id)
        : [...current, id],
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Progress color="cyan" size="xs" value={50} />
      <div className="mx-auto flex min-h-[calc(100vh-4px)] w-full max-w-md flex-col justify-center px-4 pb-6 pt-10 sm:px-6">
        <div className="text-center">
          <div className="text-[24px] font-bold leading-tight text-[#393F4A] sm:text-[28px]">
            Personalize Your Saving <br />
            Experience
          </div>
          <div className="mt-3 text-[14px] leading-6 text-[#6C7280] sm:text-[16px]">
            Tap each goal to activate it. You can choose one or all goals.
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-4">
          {featureCards.map((card) => {
            const isSelected = selectedGoals.includes(card.id);
            return (
              <button
                key={card.id}
                type="button"
                onClick={() => toggleGoal(card.id)}
                className={`min-h-[120px] rounded-[8px] p-3 text-left transition-colors duration-200 sm:min-h-[111px] sm:p-4 ${
                  isSelected
                    ? "bg-[#44A1A0] text-white"
                    : "bg-[#EFF1F5] hover:bg-[#dce3ec]"
                }`}
              >
                {card.img}
                <h6
                  className={`pt-3 text-[13px] font-bold ${
                    isSelected ? "text-white" : "text-[#393F4A]"
                  }`}
                >
                  {card.title}
                </h6>
                <p
                  className={`pt-1 text-[11px] leading-4 ${
                    isSelected ? "text-white" : "text-[#98A2B3]"
                  }`}
                >
                  {card.description}
                </p>
              </button>
            );
          })}
        </div>

        <div className="mt-3 flex justify-center pt-8">
          <button
            type="button"
            onClick={() =>
              navigate("/Automatic", { state: { selectedGoals } })
            }
            className="h-12 w-full rounded-[12px] bg-[#44A1A0] px-4 text-white"
            disabled={selectedGoals.length === 0}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
