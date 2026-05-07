import React from "react";
import { Bell, ChevronRight, Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";
import profile from "../imgs/profile.png";
import card from "../imgs/credit-card.png";
import security from "../imgs/lock-password.png";
import settings from "../imgs/settings-01.png";
import support from "../imgs/customer-service-01.png";
import savings from "../imgs/bookmark-02.png";

const profileGroups = [
  [
    { icon: profile, label: "Updates Personal Information" },
    { icon: card, label: "My Cards" },
    { icon: security, label: "Security & Privacy" },
  ],
  [
    { icon: settings, label: "App Preferences" },
    { icon: support, label: "Support/FAQs" },
    { icon: savings, label: "Savings History" },
  ],
];

const MyProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#eef8f8] px-1">
      <div className="container min-h-screen w-full max-w-md bg-white mx-auto px-4 pt-5 pb-28 shadow-[0_10px_40px_rgba(71,109,119,0.08)]">
        <div className="mb-6 mt-7 flex items-center justify-between">
          <div>
            <h1 className="text-[28px] font-bold leading-tight text-[#393F4A]">
              My Profile
            </h1>
            <p className="mt-2 text-[16px] text-[#98A2B3]">
              View and edit your profile
            </p>
          </div>
          <button
            type="button"
            aria-label="Notifications"
            className="flex h-9 w-9 items-center justify-center rounded-full text-[#49a9af]"
          >
            <Bell
              size={24}
              strokeWidth={1.8}
              onClick={() => navigate("/Notifications")}
            />
          </button>
        </div>

        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-[57px] w-[57px] items-center justify-center rounded-full bg-[#f2f4f7] text-[#d5dce1]"></div>
            <span className="text-[19px] font-bold text-[#393F4A]">
              John Doe
            </span>
          </div>

          <button
            type="button"
            onClick={() => navigate("/EditProfile")}
            aria-label="Edit profile"
            className="flex h-[31px] w-[31px] items-center justify-center rounded-full bg-[#49a9af] text-white shadow-[0_6px_16px_rgba(73,169,175,0.35)]"
          >
            <Pencil
              size={19}
              strokeWidth={2.2}
              onClick={() => navigate("/EditProfile")}
            />
          </button>
        </div>

        <div className="mb-3">
          <p className="text-[16px] font-semibold text-[#393F4A]">
            Other Settings
          </p>
        </div>

        <div className="space-y-4">
          {profileGroups.map((group, groupIndex) => (
            <section
              key={groupIndex}
              className="rounded-[18px] bg-[#44A1A0] px-4 py-2.5 text-white shadow-[0_8px_24px_rgba(73,169,175,0.24)]"
            >
              {group.map(({ icon, label }, index) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => {
                    if (label === "Updates Personal Information") {
                      navigate("/PersonalInfo");
                    }
                    if (label === "My Cards") {
                      navigate("/MyCardsSection");
                    }
                  }}
                  className={`flex w-full items-center justify-between py-3 text-left ${
                    index !== group.length - 1
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <img src={icon} alt="" className="h-6 w-6 object-contain" />
                    <span className="text-[13px] font-bold tracking-[0.01em]">
                      {label}
                    </span>
                  </div>
                  <ChevronRight size={16} strokeWidth={2.1} />
                </button>
              ))}
            </section>
          ))}
        </div>

        <button
          type="button"
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#B3261E] px-4 py-3 text-[16px] font-medium text-white shadow-[0_10px_24px_rgba(197,42,32,0.22)]"
        >
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
