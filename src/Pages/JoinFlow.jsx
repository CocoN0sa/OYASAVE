import { teal, tealDark } from "../data/groupsData.jsx";
import { SuccessIcon } from "../Components/GroupUI";

export function JoinGroupConfirmation({ group, onConfirm, onCancel }) {
  return (
    <div className="flex flex-col h-full px-6 pt-10 pb-8 bg-white">
      <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-1">Join Group Confirmation</h1>
      <p className="text-sm text-gray-500 mb-8">
        You are about to join <span className="font-semibold text-gray-800">{group.name}</span>
      </p>
      <div className="mb-8">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Group Rules:</p>
        <ul className="space-y-2 mb-3">
          {["Be respectful", "No spam", "Follow Guidelines"].map((rule) => (
            <li key={rule} className="flex items-center gap-2 text-sm text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: teal }} />
              {rule}
            </li>
          ))}
        </ul>
        <button className="text-xs font-medium" style={{ color: teal }}>View Guidelines</button>
      </div>
      <div className="flex gap-3">
        <button
          onClick={onConfirm}
          className="flex-1 py-3.5 rounded-2xl text-white text-sm font-semibold transition-all duration-200 active:scale-95 bg-[#44A1A0]"
        >
          Confirm
        </button>
        <button
          onClick={onCancel}
          className="flex-1 py-3.5 rounded-2xl bg-gray-100 text-gray-500 text-sm font-semibold transition-all duration-200 active:scale-95 hover:bg-gray-200"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export function JoinedSuccessfully({ group, onViewDashboard }) {
  return (
    <div className="flex flex-col h-full items-center justify-center px-1 pb-8 bg-white">
      <div className="w-full rounded-3xl p-8 flex flex-col items-center" style={{ backgroundColor: "#F9FAFB", animation: "fadeUp 0.5s ease both" }}>
        <SuccessIcon />
        <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">Joined Group Successfully</h2>
        <p className="text-sm text-gray-500 text-center mb-8">
          You have successfully joined <span className="font-semibold text-gray-700">{group.name}</span>!
        </p>
        <div className="flex gap-3 w-full">
          <button
            onClick={onViewDashboard}
            className="flex-1 py-3.5 px-2 rounded-2xl text-white text-sm font-semibold transition-all duration-200 active:scale-95 bg-[#44A1A0]"
          >
            View Group Dashboard
          </button>
          <button className="flex-1 py-3.5 rounded-2xl bg-gray-100 text-gray-500 text-sm font-semibold transition-all duration-200 active:scale-95 hover:bg-gray-200">
            Refer Friends
          </button>
        </div>
      </div>
    </div>
  );
}
