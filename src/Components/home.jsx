import { useState } from "react";
import { useNavigate } from "react-router-dom";

const goals = [
  { icon: "🎓", label: "School Fees", remaining: "₦20,000 Remaining", progress: 60 },
  { icon: "✈️", label: "Vacation Fund", remaining: "₦100,000 Remaining", progress: 30 },
  { icon: "🏠", label: "House Rent", remaining: "₦80,000 Remaining", progress: 45 },
];

const ajoGroups = [
  { icon: "💎", label: "Diamond", members: "5 Members", freq: "Yearly", color: "#0F6E56", bg: "#EFF1F5" },
  { icon: "🥇", label: "Gold", members: "8 Members", freq: "Monthly", color: "#854F0B", bg: "#EFF1F5" },
  { icon: "🥈", label: "Silver", members: "4 Members", freq: "Weekly", color: "#185FA5", bg: "#EFF1F5" },
  { icon: "🥉", label: "Bronze", members: "2 Members", freq: "Daily", color: "#993C1D", bg: "#EFF1F5" },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5 mt-1">
      {[1, 2, 3].map((i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i <= count ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" className={i <= count ? "text-yellow-400" : "text-gray-300"}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function FinanceApp() {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 pt-8 pb-12 px-4">
      <div
        className="w-full max-w-sm bg-white rounded-3xl overflow-hidden shadow-2xl"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >

        <div className="px-5 pt-7 pb-4">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v2h20v-2c0-3.3-6.7-5-10-5z"/></svg>
            </div>
            <div>
              {/* <p className="text-xs text-gray-400 font-medium tracking-wide">WELCOME BACK</p> */}
              <h1 className="text-xl font-bold text-gray-800">Hi Username</h1>
            </div>
          </div>

          {/* Balance Card */}
          <div
            className="rounded-2xl p-5 mb-5 relative overflow-hidden bg-gradient-to-br from-[#0D5C63] to-[#0D5C63] h-[170px]"
          >
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-10 bg-white" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full opacity-10 bg-white" />
            <p className="text-xs text-teal-200 font-semibold tracking-widest uppercase mb-1">Available Balance</p>
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-3xl font-bold text-white tracking-tight">
                {balanceVisible ? "₦200,000.00" : "₦" + "•".repeat(9)}
              </h2>
              <button
                onClick={() => setBalanceVisible(!balanceVisible)}
                className="p-1 rounded-full text-teal-200 hover:text-white transition-colors relative z-10"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {balanceVisible ? (
                    <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>
                  ) : (
                    <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></>
                  )}
                </svg>
              </button>
            </div>
            <p className="text-sm text-teal-100 mb-3">Current Savings Balance: ₦50,000</p>
            <div className="w-full h-1.5 bg-white bg-opacity-20 rounded-full">
              <div className="h-full bg-white rounded-full" style={{ width: "75%" }} />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {[
              { label: "Add Money", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /> },
              { label: "Withdraw", icon: <><rect x="2" y="5" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="10" x2="22" y2="10"/></> },
            ].map(({ label, icon }) => (
              <button
                key={label}
                className="text-[#44A1A0] bg-[#EFF1F5] flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold active:scale-95 transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{icon}</svg>
                {label}
              </button>
            ))}
          </div>

          {/* Quick Access */}
          {/* <div className="flex items-center justify-between mb-3">
            <p className="font-semibold text-gray-800 text-sm">Quick Access</p>
            <button className="text-xs font-semibold" style={{ color: "#1D9E75" }}>Edit</button>
          </div>
          <div className="flex gap-2 mb-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-12 h-12 rounded-xl bg-gray-100 flex-shrink-0" />
            ))}
          </div> */}

          {/* Goals */}
          <div className="flex items-center justify-between mb-3">
            <p className="font-bold text-gray-800 text-base">Your Goals</p>
            <button onClick={() => navigate("/Goals")} className="text-[13px] text-[#44A1A0] font-bold">View Goals</button>
          </div>
          <div className="space-y-3 mb-4">
            {goals.map(({ icon, label, remaining, progress }) => (
              <div key={label} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-xl shadow-sm flex-shrink-0">
                  {icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800">{label}</p>
                  <div className="flex items-center justify-between mt-0.5">
                    <p className="text-xs font-medium text-gray-400">{remaining}</p>
                  </div>
                  {/* <div className="w-full h-1 bg-gray-200 rounded-full mt-1.5">
                    <div className="h-full rounded-full" style={{ width: `${progress}%`, background: "#1D9E75" }} />
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          <button
            className="w-full py-3.5 rounded-2xl text-white font-bold text-sm mb-6 active:scale-95 transition-all bg-[#44A1A0]"
            // style={{ background: "linear-gradient(135deg, #0F5C50 0%, #1D9E75 100%)" }}
          >
           Create a Goal
          </button>

          {/* Ajo Groups */}
          <div className="flex items-center justify-between mb-3">
            <p className="font-bold text-gray-800 text-base">Ajo Groups</p>
            <button className="text-sm font-bold text-[#44A1A0] " >Explore</button>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {ajoGroups.map(({ icon, label, members, freq, bg }) => (
              <div key={label} className="rounded-2xl p-4 border border-gray-100" style={{ background: bg }}>
                <div className="text-2xl mb-2">{icon}</div>
                <p className="font-bold text-sm text-[black] " >{label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{members}</p>
                <p className="text-xs text-gray-400">{freq}</p>
                {/* <StarRating count={stars} /> */}
              </div>
            ))}
          </div>

          {/* Bottom Buttons */}
          <div className="grid grid-cols-2 gap-3 pb-6">
            <button
              onClick={() => navigate("/CreateGroup")}
              className="flex items-center justify-center gap-2 py-2.5 rounded-2xl text-white text-sm font-bold active:scale-95 transition-all  bg-[#44A1A0]"
              // style={{ background: "linear-gradient(135deg, #0F5C50 0%, #1D9E75 100%)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Create a Group
            </button>
            <button onClick={() => navigate("/ExploreGroup")} className="flex items-center justify-center gap-2 py-2.5 rounded-2xl text-sm font-bold border border-gray-200 text-gray-600 hover:bg-gray-50 active:scale-95 transition-all">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              Join Group
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
