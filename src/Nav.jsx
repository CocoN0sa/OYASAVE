import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  House,
  UsersRound,
  PiggyBank,
  TargetIcon,
  UserRound,
} from "lucide-react";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Home", icon: House, path: "/home" },
    { label: "Savings", icon: PiggyBank, path: "/home" },
    { label: "Goals", icon: TargetIcon, path: "/Goals" },
    { label: "Groups", icon: UsersRound, path: "/Groups", matchPaths: ["/Groups", "/ExploreGroup"] },
    {
      label: "Profile",
      icon: UserRound,
      path: "/MyProfile",
      matchPaths: [
        "/MyProfile",
        "/my-profile",
        "/EditProfile",
        "/Notifications",
        "/Goals",
        "/PersonalInfo",
        "/personal-info",
        "/MyCardsSection",
        "/carduser",
      ],
    },
  ];

  return (
    <div>
      <nav className="fixed bottom-3 left-0 right-0 z-50 mx-auto flex w-full max-w-md items-center justify-between bg-white px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-2 shadow-[0_-2px_12px_rgba(0,0,0,0.08)] min-[360px]:px-6">
        {navItems.map(({ label, icon, path, matchPaths }) => {
          const isActive = (matchPaths || [path]).includes(location.pathname);
          const itemColor = isActive ? "#44A1A0" : "#A09CAB";

          return (
            <button
              key={label}
              type="button"
              onClick={() => navigate(path)}
              className="flex min-w-0 flex-1 flex-col items-center gap-2"
            >
              {React.createElement(icon, {
                size: 20,
                strokeWidth: 1.8,
                style: { color: itemColor },
              })}
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
