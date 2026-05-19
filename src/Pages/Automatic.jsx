import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Automatic = () => {
  const navigate = useNavigate();
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSkip = () => {
    navigate("/allset", { state: { redirectTo: "/home" } });
  };

  const handleSaveCard = (event) => {
    event.preventDefault();

    if (
      !cardholderName.trim() ||
      !cardNumber.trim() ||
      !expiry.trim() ||
      !cvv.trim()
    ) {
      alert("Please fill in all card details before continuing");
      return;
    }

    navigate("/CardSaved");
  };

  return (
    <main className="flex min-h-screen justify-center bg-white">
      <div className="flex min-h-screen w-full max-w-md flex-col px-4 pb-28 pt-10 sm:px-6 sm:pt-14">
        <button
          type="button"
          onClick={() => navigate("/Experience")}
          className="self-start text-black"
          style={{ color: "#000000" }}
        >
          <span className="text-4xl text-black" style={{ color: "#000000" }}>
            ←
          </span>
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

        <form className="mt-5 flex w-full flex-1 flex-col" onSubmit={handleSaveCard}>
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
              value={cardholderName}
              onChange={(e) => setCardholderName(e.currentTarget.value)}
              required
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
              value={cardNumber}
              onChange={(e) =>
                setCardNumber(e.currentTarget.value.replace(/\D/g, ""))
              }
              required
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
              required
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
              value={cvv}
              onChange={(e) =>
                setCvv(e.currentTarget.value.replace(/\D/g, "").slice(0, 4))
              }
              required
              className="mt-1 h-[48px] w-full rounded-[12px] border border-[#D0D5DD] px-3 placeholder:px-3 placeholder:text-[30px] placeholder:leading-4 placeholder:text-[#98A2B3]"
            />
          </div>

          <div className="mt-auto flex w-full flex-col items-center pt-8">
            <button
              type="submit"
              className="h-[48px] w-full rounded-[12px] border border-[#44A1A0] bg-[#44A1A0] px-3 text-[16px] text-white transition-all duration-300 ease-out hover:border-[#3b8c8b] hover:bg-[#3b8c8b]"
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
              onClick={handleSkip}
              className="flex h-[48px] w-full items-center justify-center rounded-[12px] border border-[#D0D5DD] bg-[#EFF1F5] px-3 text-[16px] text-[#393F4A]"
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
