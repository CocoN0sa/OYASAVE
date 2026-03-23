import React from "react";
import { useNavigate } from "react-router-dom";

const CardUser = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/onboarding");
  };
  return (
    <>
      <div className="container bg-white w-full max-w-md mx-auto p-4 pb-24">
        <div id="return-button" className="mt-2 mb-2">
          <button type="button" onClick={handleNavigate}>
            <p className="text-4xl text-[#44A1A0]">←</p>
          </button>
        </div>
        <div className="w-full h-auto gap-[4px] opacity-100 flex flex-col items-center justify-center py-8">
          <img
            src="/src/imgs/Frame 1618868492.png"
            alt="Mastercard"
            className="w-[139px] h-[139px] object-contain"
          />
          <div id="sub-text" className="text-center mt-4">
            <h4 className="font-aeonik font-bold text-[28px] leading-[140%] tracking-normal text-center text-[#393F4A]">
              John Doe
            </h4>
            <p className="font-aeonik font-normal text-base leading-[140%] tracking-normal text-center text-[#44A1A0]">
              Show Card Details
            </p>
          </div>
        </div>

        <div className="carduseroptions mt-4 w-full h-auto gap-[16px] opacity-100">
          <button className="w-full flex items-center justify-between p-3 pl-0 text-left">
            <div className="flex items-center gap-3">
              <img
                src="/src/imgs/Group 6847.png"
                alt="Mastercard"
                className="w-5 h-6 object-contain"
              />
              <div className="ml-[-6px]">
                <h2 className="font-aeonik font-bold text-base leading-[140%] tracking-normal align-middle text-[#393F4A]">
                  Update Card
                </h2>
                <p className="font-aeonik font-normal text-[11px] leading-[140%] tracking-normal text-[#98A2B3]">
                  Update card details
                </p>
              </div>
            </div>
            <button type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-[#393F4A] navigate-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </button>

          <button className="w-full flex items-center justify-between p-3 pl-0 text-left">
            <div className="flex items-center gap-3">
              <img
                src="/src/imgs/unavailable.png"
                alt="Mastercard"
                className="w-5 h-6 object-contain"
              />
              <div className="ml-[-6px]">
                <h2 className="font-aeonik font-bold text-base leading-[140%] tracking-normal align-middle text-[#393F4A]">
                  Block Card
                </h2>
                <p className="font-aeonik font-normal text-[11px] leading-[140%] tracking-normal text-[#98A2B3]">
                  Temporarily disable this card
                </p>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-[#393F4A]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          <button className="w-full flex items-center justify-between p-3 pl-0 text-left">
            <div className="flex items-center gap-3">
              <img
                src="/src/imgs/check-list.png"
                alt="Mastercard"
                className="w-5 h-6 object-contain"
              />
              <div className="ml-[-6px]">
                <h2 className="font-aeonik font-bold text-base leading-[140%] tracking-normal align-middle text-[#393F4A]">
                  Manage Card Payment
                </h2>
                <p className="font-aeonik font-normal text-[11px] leading-[140%] tracking-normal text-[#98A2B3]">
                  Manage Card Automated Payment
                </p>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-[#393F4A]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default CardUser;
