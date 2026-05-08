import { Link } from "react-router-dom";
import { IconCheck } from "@tabler/icons-react";
import img18 from "../imgs/image 18.png"

export default function CardSaved() {
  return (
    <main className="min-h-screen bg-white font-aeonik">
      <div className="mx-auto flex min-h-screen w-full max-w-[393px] flex-col px-[22px]">
        <section className="flex flex-1 flex-col items-center pt-[273px] text-center">
          <img src={img18} alt="" srcset="" />

          <h1 className="mt-5 text-[28px] font-bold leading-none text-[#393F4A]">
            Card Saved Successfully
          </h1>

          <p className="mt-3 text-[15px] leading-none text-[#98A2B3]">
            You have successfully added your card
          </p>

          <Link
            to=""
            className="mt-7 flex h-[46px] w-full items-center justify-center rounded-[8px] bg-[#44A1A0] text-[16px] font-normal text-white"
          >
            Continue
          </Link>
        </section>
      </div>
    </main>
  );
}
