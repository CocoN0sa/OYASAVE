import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TEAL = "#1a7f6e";
const TEAL_DARK = "#155f52";

const dashboardMembers = [
  { id: 1, name: "Charles Amadi", contributed: "2/10", status: "Received" },
  { id: 2, name: "Didi Ahmed", contributed: "2/10", status: "Received" },
  { id: 3, name: "Tolu Christain", contributed: "2/10", status: "Pending" },
  { id: 4, name: "Emeka Obi", contributed: "1/10", status: "Pending" },
  { id: 5, name: "Fatima Bello", contributed: "0/10", status: "Pending" },
];

function StatusBadge({ status }) {
  if (status === "Received") {
    return (
      <span className="flex items-center gap-1 text-sm font-semibold" style={{ color: TEAL }}>
        <span className="flex items-center justify-center w-5 h-5 rounded-full text-white text-xs" style={{ background: TEAL }}>✓</span>
        Received
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1 text-sm font-semibold text-amber-500">
      <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#f59e0b" strokeWidth="2" strokeDasharray="30 10" />
      </svg>
      Pending
    </span>
  );
}


export default function GroupDashboard({ group, onBack }) {
  const navigate = useNavigate();
  const handleBack = onBack ?? (() => navigate(-1));
  const [showAllMembers, setShowAllMembers] = useState(false);
  const visibleMembers = showAllMembers ? dashboardMembers : dashboardMembers.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-white" style={{ fontFamily: "'DM Sans', 'Nunito', sans-serif" }}>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pb-2">

        {/* Back arrow */}
        <div className="px-5 pt-4 pb-1">
          <button onClick={handleBack} className="text-gray-700">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
        </div>

        {/* Hero card */}
        <div
          className="mx-4 mb-6 rounded-2xl p-5 text-white relative overflow-hidden bg-gradient-to-br from-[#0D5C63] to-[#0D5C63] h-[170px]"
        >
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10" style={{ background: "white", transform: "translate(30%, -30%)" }} />
          <div className="flex justify-between items-start mb-1">
            <h2 className="text-2xl font-bold tracking-tight">{group?.name ?? "[Group Name 1]"}</h2>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
              <path d="M12 2C12 2 4 8 4 14C4 17.31 7.58 20 12 20C16.42 20 17.31 20 20 14C20 8 12 2 12 2Z" />
            </svg>
          </div>
          <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.75)" }}>{group?.description ?? "Group Description"}</p>
          <div className="flex items-center gap-4 text-sm mb-4">
            <span className="flex items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <b>{group?.members ?? 5}</b>
            </span>
            <span className="flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <b>{group?.stars ?? 4.5}</b>
            </span>
            <span className="opacity-80">{group?.reviews ?? 10} Reviews</span>
            <span className="flex items-center gap-1 opacity-80">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              {group?.duration ?? "5 Years"}
            </span>
          </div>
          <div className="w-full h-2 rounded-full" style={{ background: "rgba(255,255,255,0.25)" }}>
            <div className="h-2 rounded-full" style={{ width: "40%", background: "white" }} />
          </div>
        </div>

        {/* Members */}
        <div className="px-5 mb-5">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-gray-900 text-base">Members</h3>
            <button className="text-sm font-semibold" style={{ color: TEAL }}>View All Members</button>
          </div>
          <div>
            {visibleMembers.map((m, i) => (
              <div key={m.id}>
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{i + 1}. {m.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">Contributed: {m.contributed}</p>
                  </div>
                  <StatusBadge status={m.status} />
                </div>
                {i < visibleMembers.length - 1 && <div className="border-b border-gray-100" />}
              </div>
            ))}
          </div>
          {!showAllMembers && (
            <button
              onClick={() => setShowAllMembers(true)}
              className="w-full flex items-center justify-center gap-2 pt-3 text-sm text-gray-500 font-medium"
            >
              View More
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 5L7 9L11 5" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </div>

        <div className="mx-5 border-t border-gray-100 mb-5" />

        {/* Info sections */}
        <div className="px-5 space-y-5 mb-4">
          <div>
            <h4 className="font-bold text-gray-900 text-sm mb-1">Your Individual Contribution Progress</h4>
            <p className="text-sm text-gray-500">Your Contribution: <span className="font-semibold text-gray-700">{group?.requirement ?? "₦5,000,000"}</span></p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm mb-1">Contribution Schedule</h4>
            <p className="text-sm text-gray-500">Next Contribution: <span className="font-semibold text-gray-700">{group?.requirement ?? "₦5,000,000"}</span> is due on January 1st 2026</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm mb-1">Your Position</h4>
            <p className="text-sm font-semibold text-gray-700">4/{group?.members ?? 10}</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm mb-2">Group Rules</h4>
            <ol className="space-y-1">
              {["Be punctual", "Respect fellow members", "Keep contributions confidential"].map((r, i) => (
                <li key={i} className="text-sm text-gray-500">{i + 1}. {r}</li>
              ))}
            </ol>
          </div>
        </div>

        {/* Countdown */}
        <div className="flex justify-center items-center gap-3 py-3">
          <span className="text-sm font-semibold" style={{ color: "#f59e0b" }}>28 Days to Next Contribution</span>
          <span className="font-mono text-sm text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md">00:00</span>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 px-5 pb-24 mt-1">
          <button
            className="flex-1 py-3.5 rounded-2xl font-bold text-sm transition-all bg-gray-100  bg-opacity-20 text-gray-600"
          >
            Contribute
          </button>
          <button
            className="flex-1 py-3.5 rounded-2xl font-bold text-sm text-white transition-all active:scale-95 bg-[#44A1A0]"
          >
            Refer Friends
          </button>
        </div>
      </div>
    </div>
  );
}
