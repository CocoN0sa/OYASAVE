import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SplashWelcome() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/SecondSplashScreen");
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      style={{ backgroundColor: "#0d6b68" }}
      className="min-h-screen w-full flex justify-center items-center"
    >
      <span
        className="text-[#ffffff] text-[47px] font-aeonik-t text-center font-bold"
      >
        OyaSave
      </span>
    </div>
  );
}
