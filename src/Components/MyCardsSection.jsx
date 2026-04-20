import React from "react";
import { useNavigate } from "react-router-dom";
import master from '../imgs/Mastercard.png'

const MyCardsSection = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/carduser");
  };

  return (
    <>
      <div className="container bg-white w-full max-w-md mx-auto p-4 pb-24">
        <div id="return-button" className="mt-2 mb-2">
          <button type="button" onClick={() => navigate("/PersonalInfo")}>
            <p className="text-4xl">←</p>
          </button>
        </div>
        <div className="w-full h-auto gap-[4px] opacity-100">
          <div className="heading">
            <h2 className="font-aeonik font-bold text-[28px] leading-[140%] tracking-normal">
              My Cards
            </h2>
          </div>
          <div className="subtext">
            <p className="font-normal text-base pt-2 leading-[140%] tracking-normal text-[#98A2B3]">
              Manage selected card
            </p>
          </div>
        </div>

        <div className="w-full bg-white rounded-2xl">
          <button className="w-full flex items-center justify-between p-3 pl-0 text-left">
            <div className="flex items-center gap-3">
              <img
                src={master}
                alt="Mastercard"
                className="w-5 h-6 object-contain"
              />
              <div>
                <h2 className=" text-gray-800 font-aeonik font-normal text-base leading-[140%] tracking-normal">
                  56**-****-****-***7
                </h2>
                <p className="font-aeonik font-normal text-[11px] leading-[140%] tracking-normal">
                  John Doe
                </p>
              </div>
            </div>
            <button onClick={handleNavigate} type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-400 navigate-icon"
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
                src={master}
                alt="Mastercard"
                className="w-5 h-6 object-contain"
              />
              <div>
                <h2 className=" text-gray-800 font-aeonik font-normal text-base leading-[140%] tracking-normal">
                  80**-****-****-***0
                </h2>
                <p className="font-aeonik font-normal text-[11px] leading-[140%] tracking-normal">
                  John Doe
                </p>
              </div>
            </div>
            <button type="button" onClick={handleNavigate}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </button>
        </div>
      </div>
    </>
  );
};

export default MyCardsSection;
