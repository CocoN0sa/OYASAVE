<<<<<<< HEAD
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
=======
>>>>>>> 8c9e537acc605bc205eeff511fe9c7c2a2ed8ec9
import {
  House,
  UsersRound,
  PiggyBank,
  UserRound,
  TargetIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Home", icon: House, path: "/" },
    { label: "Goals", icon: TargetIcon, path: "/Goals" },
    { label: "Groups", icon: UsersRound, path: "/Groups" },
    { label: "Savings", icon: PiggyBank, path: "/Savings" },
    {
      label: "Profile",
      icon: UserRound,
      path: "/MyProfile",
      matchPaths: [
        "/MyProfile",
        "/EditProfile",
        "/PersonalInfo",
        "/MyCardsSection",
        "/carduser",
      ],
    },
  ];

  return (
    <div>
      <nav className="fixed pb-6 pt-2 bottom-0 left-0 right-0 z-50 flex w-full items-center justify-between shadow-[0_-2px_12px_rgba(0,0,0,0.08)] bg-white px-7 py-1 max-w-md mx-auto">
        {navItems.map(({ label, icon: Icon, path, matchPaths }) => {
          const isActive = (matchPaths || [path]).includes(location.pathname);
          const itemColor = isActive ? "#44A1A0" : "#A09CAB";

<<<<<<< HEAD
          return (
            <button
              key={label}
              type="button"
              onClick={() => navigate(path)}
              className="flex flex-col items-center gap-[8px]"
            >
              <Icon size={20} strokeWidth={1.8} style={{ color: itemColor }} />
              <span
                className="text-[11px] leading-none"
                style={{
                  color: itemColor,
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                {label}
              </span>
            </button>
          );
        })}
=======
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
>>>>>>> 8c9e537acc605bc205eeff511fe9c7c2a2ed8ec9
      </nav>
    </div>
  );
};

export default Nav;
