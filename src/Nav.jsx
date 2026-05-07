import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  House,
  UsersRound,
  PiggyBank,
  UserRound,
  TargetIcon,
} from "lucide-react";

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
      </nav>
    </div>
  );
};

export default Nav;
