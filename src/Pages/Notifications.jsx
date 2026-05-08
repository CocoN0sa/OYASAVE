import React from "react";
import { ArrowLeft } from "lucide-react";
import { Switch } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Notifications = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#eef8f8] px-1">
      <div className="container min-h-screen w-full max-w-md bg-white mx-auto px-4 pt-5 pb-12 shadow-[0_10px_40px_rgba(71,109,119,0.08)]">
        <button type="button" onClick={() => navigate("/MyProfile")}>
          <p className="text-4xl text-[#44A1A0]">←</p>
        </button>

        <div className="mt-7">
          <h1 className="text-[28px] font-bold text-[#393F4A]">
            Motivation & Reminders
          </h1>
        </div>
        <div>
          <p className="mt-1 font-normal text-[16px] text-[#98A2B3]">
            Enable Notifications And Encouragement <br /> Badges
          </p>
        </div>

        <div className="space-y-3 mt-5">
          <div className="flex items-center justify-between">
            <span className="text-[16px] font-bold text-[#3f4653]">
              Enable Notifications
            </span>
            <Switch
              defaultChecked
              color="#44A1A0"
              size="md"
              aria-label="Enable Notifications"
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[16px] font-bold text-[#3f4653]">
              Enable Encouragement Badges
            </span>
            <Switch
              defaultChecked
              color="#44A1A0"
              size="md"
              aria-label="Enable Encouragement Badges"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
