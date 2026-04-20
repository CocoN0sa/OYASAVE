import React from "react";
import { useNavigate } from "react-router-dom";
import { Progress } from "@mantine/core";

const SigninWelcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Progress color="cyan" size="xs" value={50} />
      <div className="mx-auto flex min-h-[calc(100vh-4px)] w-full max-w-md flex-col px-4 pb-6 pt-12 sm:px-6 sm:pt-16">
        <div className="flex flex-1 flex-col justify-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#44A1A0] sm:h-[103px] sm:w-[103px]">
            <span className="text-[36px] font-bold text-white sm:text-[40px]">
              D
            </span>
          </div>
          <div className="mb-4 mt-3 text-center text-[14px] text-[#98A2B3] sm:text-[16px]">
            johndoe@gmail.com
          </div>
          <div className="text-center text-[24px] font-bold leading-tight text-[#393F4A] sm:text-[28px]">
            Welcome to OyaSave <br />
            John Doe
          </div>
          <div className="mt-3 text-center text-[14px] leading-6 text-[#6C7280] sm:text-[16px]">
            Select features you are most interested in on <br /> the next page to
            personalize your savings <br /> experience
          </div>
        </div>

        <div className="flex justify-center pt-8">
          <button
            type="button"
            onClick={() => navigate("/Experience")}
            className="h-12 w-full rounded-[12px] bg-[#44A1A0] px-4 text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SigninWelcome;
