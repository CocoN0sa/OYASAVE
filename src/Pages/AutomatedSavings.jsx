import React from "react";

const AutomatedSavings = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto flex min-h-[calc(100vh-4px)] w-full max-w-md flex-col px-4 pb-6 pt-12 sm:px-6 sm:pt-16">
        <div className="w-full text-[28px] font-bold">Automated Savings</div>

        <div className="mt-4 w-full">
          <h6 className="font-bold text-[#393F4A]">Add Card</h6>
          <p className="text-[16px] text-[#98A2B3]">
            Add your Card for seamless savings
          </p>
        </div>
        <div className="userData mt-5 flex w-full flex-col items-">
          <div className="w-full max-w-[342px]">
            <label htmlFor="" className="text-[16px] text-[#393F4A]">
              Cardholder Name
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Cardholder Name"
              className="mt-1 h-[48px] w-full rounded-[12px] border border-[#D0D5DD] px-3 placeholder:text-[14px] placeholder:font-normal placeholder:leading-4 placeholder:text-[#98A2B3]"
            />
          </div>
          <div className="mt-4 w-full max-w-[342px]">
            <label htmlFor="" className="text-[16px] text-[#393F4A]">
              Cardholder Number
            </label>
            <input
              type="number"
              name=""
              id=""
              placeholder="Enter Cardholder Number"
              className="mt-1 h-[48px] w-full rounded-[12px] border border-[#D0D5DD] px-3 placeholder:text-[14px] placeholder:font-normal placeholder:leading-4 placeholder:text-[#98A2B3]"
            />
          </div>
          <div className="mt-4 w-full max-w-[342px]">
            <label htmlFor="" className="text-[16px] text-[#393F4A]">
              Expiration Date (MM/YY)
            </label>
            <input
              type="month"
              name=""
              id=""
              placeholder="Enter Cardholder Name"
              className="mt-1 h-[48px] w-full rounded-[12px] border border-[#D0D5DD] px-3 placeholder:text-[14px] placeholder:font-normal placeholder:leading-4 placeholder:text-[#98A2B3]"
            />
          </div>
          <div className="mt-4 w-full max-w-[342px]">
            <label htmlFor="" className="text-[16px] text-[#393F4A]">
              CVV
            </label>
            <input
              type="number"
              name=""
              id=""
              placeholder="..."
              className="mt-1 h-[48px] w-full rounded-[12px] border border-[#D0D5DD] px-3 placeholder:px-3 placeholder:text-[30px] placeholder:leading-4 placeholder:text-[#98A2B3]"
            />
          </div>

          <div className="buttons mt-5 flex w-full max-w-[342px] flex-col items-center">
            <button
              type="submit"
              className="h-[48px] w-full rounded-[12px] border border-[#D0D5DD] bg-[#44A1A0] px-3 text-white placeholder:text-[14px] placeholder:font-normal placeholder:leading-4 placeholder:text-[#98A2B3]"
            >
              save card
            </button>
            <div className="flex justify-center items-center my-4">
              ____________________<p>or</p>____________________
            </div>
            <button
              type="submit"
              className="h-[48px] w-full rounded-[12px] border border-[#D0D5DD] bg-[#EFF1F5] px-3 placeholder:text-[14px] placeholder:font-normal placeholder:leading-4 placeholder:text-[#98A2B3]"
            >
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomatedSavings;
