import React from "react";

const OnboardingProgress = ({ step, total = 4 }) => {
  const progress = Math.min(Math.max(step / total, 0), 1) * 100;

  return (
    <div className="mx-auto w-full max-w-md px-4 pt-9 sm:px-6">
      <div className="h-1 w-full bg-[#EEF2F4]">
        <div
          className="h-full bg-[#44A1A0]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default OnboardingProgress;
