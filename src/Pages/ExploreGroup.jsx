import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { groups } from "../data/groupsData.jsx";
import { GroupIcon, BackArrow } from "../Components/GroupUI";
import GroupDetail from "./GroupDetail";

function ExploreScreen({ onBack, onPreview }) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = groups.filter((g) =>
    g.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-full">
      <div className="px-5 pt-6 pb-4">
        <BackArrow onClick={onBack} />

        <h1 className="text-3xl font-bold text-gray-900 mb-1">Explore Ajo Groups</h1>
        <p className="text-sm text-gray-400 mb-6">Explore Thousands of People in the Ajo Savings Community</p>

        <p className="text-sm font-semibold text-gray-700 mb-2">Explore Ajo Groups</p>

        <div className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2.5 bg-white mb-4">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search Ajo Group"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setSelected(null); }}
            className="flex-1 text-sm outline-none bg-transparent text-gray-700 placeholder-gray-400"
          />
          {search && (
            <button onClick={() => { setSearch(""); setSelected(null); }} className="text-gray-400 hover:text-gray-600">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>

        <div className="space-y-1">
          {filtered.map((g) => {
            const isSelected = selected?.id === g.id;
            return (
              <button
                key={g.id}
                onClick={() => setSelected(isSelected ? null : g)}
                className="w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all text-left cursor-pointer"
                style={{
                  border: isSelected ? "1.5px solid #44A1A0" : "1.5px solid transparent",
                  background: isSelected ? "none" : "transparent",
                }}
              >
                <div className="flex-shrink-0 opacity-70">
                  <GroupIcon />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{g.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {g.members} {g.members === 1 ? "Member" : "Members"}&nbsp;&nbsp;
                    <span className="font-semibold" style={{ color: "#1D9E75" }}>{g.stars} Stars</span>
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex-1" />

      <div
        className="px-5 pb-6 transition-all duration-300"
        style={{
          opacity: selected ? 1 : 0,
          transform: selected ? "translateY(0)" : "translateY(20px)",
          pointerEvents: selected ? "auto" : "none",
        }}
      >
        <button
          onClick={() => selected && onPreview(selected)}
          className="w-full py-4 rounded-2xl text-white font-bold text-sm tracking-wide active:scale-95 transition-all cursor-pointer bg-[#44A1A0]"
        >
          Preview Group
        </button>
      </div>
    </div>
  );
}

export default function ExploreGroup() {
  const navigate = useNavigate();
  const [screen, setScreen] = useState("explore");
  const [activeGroup, setActiveGroup] = useState(null);

  const handlePreview = (group) => {
    setActiveGroup(group);
    setScreen("detail");
  };

  return (
    <div className="min-h-screen bg-white max-w-md mx-auto relative overflow-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @keyframes popIn { from { opacity: 0; transform: scale(0); } to { opacity: 1; transform: scale(1); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.5); } to { opacity: 1; transform: scale(1); } }
        @keyframes drawCheck { from { stroke-dasharray: 0 50; } to { stroke-dasharray: 50 0; } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <div
        className="absolute inset-0 flex flex-col transition-all duration-300"
        style={{
          transform: screen === "detail" ? "translateX(-100%)" : "translateX(0)",
          opacity: screen === "detail" ? 0 : 1,
          pointerEvents: screen === "detail" ? "none" : "auto",
        }}
      >
        <ExploreScreen onBack={() => navigate("/Groups")} onPreview={handlePreview} />
      </div>

      <div
        className="absolute inset-0 flex flex-col transition-all duration-300"
        style={{
          transform: screen === "detail" ? "translateX(0)" : "translateX(100%)",
          opacity: screen === "detail" ? 1 : 0,
          pointerEvents: screen === "detail" ? "auto" : "none",
        }}
      >
        {activeGroup && (
          <GroupDetail group={activeGroup} onBack={() => setScreen("explore")} />
        )}
      </div>
    </div>
  );
}
