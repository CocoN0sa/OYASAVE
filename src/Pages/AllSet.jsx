import img18 from "../imgs/image 18.png";
import { Navigate, useNavigate } from "react-router-dom";


export default function AllSet() {
    const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-white font-aeonik">
      <div
        className="mx-auto flex min-h-screen w-full max-w-[393px] flex-col px-[22px]"
        onClick={() => navigate("/home")}
      >
        <section className="flex flex-1 flex-col items-center justify-center text-center py-24">
          <img
            src={img18}
            alt="Success"
            className="mx-auto h-[130px] w-[130px] object-contain"
          />

          <h1 className="mt-10 text-[28px] font-bold leading-[36px] text-[#393F4A]">
            Congratulations
          </h1>
          <p className="mt-2 text-[28px] font-bold leading-[36px] text-[#393F4A]">
            John Doe, you're all set!
          </p>

          <p className="mt-4 text-[15px] leading-6 text-[#98A2B3]">
            Preparing your dashboard...
          </p>
        </section>
      </div>
    </main>
  );
}
