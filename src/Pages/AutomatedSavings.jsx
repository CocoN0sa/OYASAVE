import { Checkbox, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { useState } from "react";

const AutomatedSavings = () => {
  const [selectedFrequency, setSelectedFrequency] = useState("Daily");

  const handleSelect = (value) => {
    setSelectedFrequency(value);
  };

  return (
    <div className="flex flex-col px-6 py-10 max-w-[400px] mx-auto font-aeonik">
      {/* Back Arrow */}
      <div>
        <Link to="/personal-info">
          <img src="/arrow.svg" alt="Back" className="w-4 h-2.5" />
        </Link>
      </div>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-[28px] font-bold leading-[1.1] text-[#393F4A] mt-6">
          Set Up Automated <br /> Savings
        </h1>
        <p className="text-[16px] font-bold text-[#393F4A] mt-6">
          Select Savings Frequency
        </p>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-6 mt-4 mb-6">
        {[
          { label: "Daily", value: "Daily" },
          { label: "Weekly", value: "Weekly" },
          { label: "Monthly", value: "Monthly" },
          { label: "Set Manually", value: "Set Manually" },
        ].map((option) => (
          <div 
            key={option.value} 
            className="flex items-center gap-4 cursor-pointer"
            onClick={() => handleSelect(option.value)}
          >
            <Checkbox 
              size="md" 
              color="#44A1A0" 
              radius="sm" 
              checked={selectedFrequency === option.value}
              onChange={() => handleSelect(option.value)}
            />
            <span className={`text-[18px] font-semibold ${selectedFrequency === option.value ? 'text-[#393F4A]' : 'text-[#98A2B3]'}`}>
              {option.label}
            </span>
          </div>
        ))}
      </div>

      {/* Continue Button */}
      <Button 
        component={Link}
        to={selectedFrequency === "Weekly" ? "/WeeklyDebit" : selectedFrequency === "Monthly" ? "/MonthlyDebit" : "/Dailydebit"}
        fullWidth 
        size="xl" 
        className="bg-[#44A1A0]! hover:bg-[#3b8c8b]! text-white! rounded-[12px]! font-normal! text-[16px]! h-[48px]!"
      >
        Continue
      </Button>
    </div>
  );
};

export default AutomatedSavings