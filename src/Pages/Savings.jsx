import { createElement } from "react";
import { useNavigate } from "react-router-dom";
import { UsersRound, PiggyBank, ChevronRight } from "lucide-react";

const Savings = () => {
  const navigate = useNavigate();

  const options = [
    {
      icon: UsersRound,
      label: "Ajo",
      description: "Join, Create or Explore Ajo Groups",
      path: "/Groups",
    },
    {
      icon: PiggyBank,
      label: "Savings Goal",
      description: "Set new goals, keep track of goals",
      path: "/Goals",
    },
  ];

  return (
    <div className="flex flex-col px-6 py-10 pb-24 max-w-[400px] mx-auto font-aeonik">
      <div className="mb-10">
        <h1 className="text-[28px] font-bold text-[#393F4A] leading-tight">
          How would you like to save?
        </h1>
        <p className="text-[13px] text-[#A09CAB] mt-1">
          Explore Ajo & Create savings goals
        </p>
      </div>

      <div className="flex flex-col gap-1">
        {options.map(({ icon, label, description, path }) => (
          <button
            key={label}
            onClick={() => navigate(path)}
            className="flex items-center justify-between py-4 border-b border-[#F3F4F6] w-full text-left"
          >
            <div className="flex items-center gap-4">
              {createElement(icon, { size: 28, strokeWidth: 1.5, color: "#A09CAB" })}
              <div>
                <p className="text-[15px] font-semibold text-[#393F4A]">{label}</p>
                <p className="text-[12px] text-[#A09CAB]">{description}</p>
              </div>
            </div>
            <ChevronRight size={18} color="#A09CAB" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Savings;
