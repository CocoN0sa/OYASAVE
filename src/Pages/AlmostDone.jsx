import React from "react";
import { useNavigate } from "react-router-dom";
import OnboardingProgress from "../Components/OnboardingProgress";

export default function AlmostDone() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-white font-aeonik">
      <div className="mx-auto w-full max-w-md px-4 pt-10 sm:px-6 sm:pt-14">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="self-start"
        >
          <p className="text-4xl text-black">←</p>
        </button>
      </div>

      <OnboardingProgress step={4} />

      <div className="mx-auto flex min-h-[calc(100vh-112px)] w-full max-w-md flex-col px-4 pb-28 sm:px-6">
        <section className="flex flex-1 flex-col items-center justify-center text-center">
          <div className="mt-6 w-full">
            <h1 className="text-[28px] font-bold text-[#393F4A]">
              Almost Done
            </h1>
            <p className="mt-3 text-[14px] text-[#98A2B3]">
              Click finish to start your savings journey
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/personal-info")}
            className="mt-10 h-[46px] w-full rounded-[12px] bg-[#44A1A0] text-[16px] font-medium text-white transition-all duration-300 ease-out hover:bg-[#3b8c8b]"
          >
            Fill in personal information
          </button>

          <div className="my-6 flex w-full items-center gap-3">
            <span className="h-px flex-1 bg-[#DCE3EA]" />
            <span className="text-[14px] text-[#98A2B3]">or</span>
            <span className="h-px flex-1 bg-[#DCE3EA]" />
          </div>

          <button
            type="button"
            onClick={() => navigate("/allset")}
            className="h-[46px] w-full rounded-[12px] bg-[#F2F4F7] text-[16px] font-medium text-[#393F4A]"
          >
            Skip
          </button>
        </section>
      </div>
    </main>
  );
}
