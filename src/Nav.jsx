import {
  House,
  Globe,
  UsersRound,
  PiggyBank,
  UserRound,
  TargetIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="fixed pb-6 pt-2 bottom-0 left-0 right-0 z-50 flex w-full items-center justify-between shadow-[0_-2px_12px_rgba(0,0,0,0.08)] bg-white px-7 py-1 max-w-md mx-auto">
        <button type="button" className="flex flex-col items-center gap-[8px]">
          <House
            size={20}
            strokeWidth={1.8}
            className="text-[#A09CAB] focus:#44A1A0"
          />
          <span className="text-[11px] leading-none text-[#A09CAB]">Home</span>
        </button>

        <button type="button" className="flex flex-col items-center gap-[8px]">
          <TargetIcon size={20} strokeWidth={1.8} className="text-[#A09CAB]" />
          <span className="text-[11px] leading-none text-[#A09CAB]">Goals</span>
        </button>

        <button type="button" className="flex flex-col items-center gap-[8px]">
          <UsersRound size={20} strokeWidth={1.8} className="text-[#A09CAB]" />
          <span className="text-[11px] leading-none text-[#A09CAB]">
            Groups
          </span>
        </button>

        <Link to="/AutomatedSavings" type="button" className="flex flex-col items-center gap-[8px]">
          <PiggyBank size={20} strokeWidth={1.8} className="text-[#A09CAB]" />
          <span className="text-[11px] leading-none text-[#A09CAB]">
            Savings
          </span>
        </Link>

        <button type="button" className="flex flex-col items-center gap-[8px]">
          <UserRound size={20} strokeWidth={1.8} className="text-[#A09CAB]" />
          <span className="text-[11px] font-semibold leading-none text-[#A09CAB]">
            Profile
          </span>
        </button>
      </nav>
    </div>
  );
};

export default Nav;
