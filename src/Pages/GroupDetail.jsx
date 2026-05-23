import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { typeConfig } from "../data/groupsData.jsx";
import { BackArrow, StarRating, MemberAvatars } from "../Components/GroupUI";
import { JoinGroupConfirmation, JoinedSuccessfully } from "./JoinFlow";

const JOIN_SCREENS = { DETAIL: "detail", CONFIRM: "confirm", SUCCESS: "success" };

export default function GroupDetail({ group, onBack }) {
  const cfg = typeConfig[group.type];
  const [joinScreen, setJoinScreen] = useState(JOIN_SCREENS.DETAIL);
  const navigate = useNavigate();

  if (joinScreen === JOIN_SCREENS.CONFIRM) {
    return <JoinGroupConfirmation group={group} onConfirm={() => setJoinScreen(JOIN_SCREENS.SUCCESS)} onCancel={() => setJoinScreen(JOIN_SCREENS.DETAIL)} />;
  }
  if (joinScreen === JOIN_SCREENS.SUCCESS) {
    return <JoinedSuccessfully group={group} onViewDashboard={() => navigate("/GroupDashboard")} />;
  }

  return (
    <div className="flex flex-col min-h-full">
      <div className="px-5 pt-6 flex-1">
        <BackArrow onClick={onBack} />

        <h1 className="text-3xl font-bold text-gray-900 mb-1">{group.name}</h1>
        <p className="text-sm text-gray-400 mb-5">{group.description}</p>

        <div className="flex items-center gap-2 mb-5">
          <p className="text-sm text-gray-400 font-medium">Group Type:</p>
          <span className="flex items-center gap-1.5">
            <span className="text-xl">{cfg.emoji}</span>
            <span className="text-sm font-semibold" style={{ color: cfg.color }}>{group.type}</span>
          </span>
        </div>

        <div className="mb-7">
          <MemberAvatars count={group.members} />
        </div>

        <div className="space-y-4">
          {[
            { label: "Member Count:", value: group.members },
            {
              label: "Average Rating:",
              value: (
                <span className="flex items-center gap-1.5">
                  {group.stars} ({group.reviews} reviews)
                  <StarRating value={group.stars} />
                </span>
              ),
            },
            { label: "Requirement:", value: group.requirement },
            { label: "Duration:", value: group.duration },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-start gap-2">
              <p className="text-sm text-gray-400 font-medium whitespace-nowrap">{label}</p>
              <p className="text-sm text-gray-700 font-medium">{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 pb-6 pt-4">
        <button
          onClick={() => setJoinScreen(JOIN_SCREENS.CONFIRM)}
          className="w-full py-4 rounded-2xl text-white font-bold text-sm tracking-wide active:scale-95 transition-all cursor-pointer bg-[#44A1A0]"
        >
          Join Group
        </button>
      </div>
    </div>
  );
}
