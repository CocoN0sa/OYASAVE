import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import CardSaved from "./CardSaved";

const Automatic = () => {
  const navigate = useNavigate();
  const [expiry, setExpiry] = useState("");

  return (
    <main className="flex min-h-screen justify-center bg-white">
      <div className="flex min-h-screen w-full max-w-md flex-col px-4 pb-28 pt-10 sm:px-6 sm:pt-14">
        <button
          type="button"
          onClick={() => navigate("/Experience")}
          className="self-start"
        >
          <p className="text-4xl text-[#44A1A0]">←</p>
        </button>
        <h1 className="w-full text-[26px] font-bold leading-tight text-[#393F4A] sm:text-[28px]">
          Automated Savings
        </h1>

        <div className="mt-4 w-full">
          <h2 className="text-[18px] font-bold text-[#393F4A]">Add Card</h2>
          <p className="mt-1 text-[15px] leading-6 text-[#98A2B3] sm:text-[16px]">
            Add your Card for seamless savings
          </p>
        </div>

        <form className="mt-5 flex w-full flex-1 flex-col">
          <div className="w-full">
            <label
              htmlFor="cardholder-name"
              className="text-[16px] text-[#393F4A]"
            >
              Cardholder Name
            </label>
            <input
              type="text"
              id="cardholder-name"
              name="cardholderName"
              placeholder="Enter Cardholder Name"
              className="mt-1 h-[48px] w-full rounded-[12px] border border-[#D0D5DD] px-3 placeholder:text-[14px] placeholder:font-normal placeholder:leading-4 placeholder:text-[#98A2B3]"
            />
          </div>

          <div className="mt-4 w-full">
            <label htmlFor="card-number" className="text-[16px] text-[#393F4A]">
              Card Number
            </label>
            <input
              type="text"
              id="card-number"
              name="cardNumber"
              inputMode="numeric"
              placeholder="Enter Card Number"
              className="mt-1 h-[48px] w-full rounded-[12px] border border-[#D0D5DD] px-3 placeholder:text-[14px] placeholder:font-normal placeholder:leading-4 placeholder:text-[#98A2B3]"
            />
          </div>

          <div className="mt-4 w-full">
            <label
              htmlFor="expiration-date"
              className="text-[16px] text-[#393F4A]"
            >
              Expiration Date (MM/YY)
            </label>
            <input
              type="text"
              id="expiration-date"
              name="expirationDate"
              inputMode="numeric"
              placeholder="MM/YY"
              maxLength={5}
              value={expiry}
              onChange={e => {
                const raw = e.target.value.replace(/\D/g, "").slice(0, 4);
                setExpiry(raw.length > 2 ? raw.slice(0, 2) + "/" + raw.slice(2) : raw);
              }}
              className="mt-1 h-[48px] w-full rounded-[12px] border border-[#D0D5DD] px-3 placeholder:text-[14px] placeholder:font-normal placeholder:leading-4 placeholder:text-[#98A2B3]"
            />
          </div>

          <div className="mt-4 w-full">
            <label htmlFor="cvv" className="text-[16px] text-[#393F4A]">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              inputMode="numeric"
              maxLength={4}
              placeholder="..."
              className="mt-1 h-[48px] w-full rounded-[12px] border border-[#D0D5DD] px-3 placeholder:px-3 placeholder:text-[30px] placeholder:leading-4 placeholder:text-[#98A2B3]"
            />
          </div>

          <div className="mt-auto flex w-full flex-col items-center pt-8">
            <button
              type="submit"
              className="h-[48px] w-full rounded-[12px] border border-[#44A1A0] bg-[#44A1A0] px-3 text-[16px] text-white"
              onClick={() => navigate("/CardSaved")}
            >
              Save card
            </button>

            <div className="my-4 flex w-full items-center gap-3">
              <span className="h-px flex-1 bg-[#D0D5DD]" />
              <span className="text-[14px] text-[#98A2B3]">or</span>
              <span className="h-px flex-1 bg-[#D0D5DD]" />
            </div>

            <button
              type="button"
              className="h-[48px] w-full rounded-[12px] border border-[#D0D5DD] bg-[#EFF1F5] px-3 text-[16px] text-[#393F4A]"
            >
              Skip
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Automatic;
