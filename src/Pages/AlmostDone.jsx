import React from "react";
import { useNavigate } from "react-router-dom";

export default function AlmostDone() {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-screen justify-center bg-white font-aeonik">
      <div className="flex min-h-screen w-full max-w-md flex-col px-4 pb-28 pt-10 sm:px-6 sm:pt-14">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="self-start"
        >
          <p className="text-4xl text-[#44A1A0]">←</p>
        </button>

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
            className="mt-10 h-[46px] w-full rounded-[12px] bg-[#44A1A0] text-[16px] font-medium text-white"
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
