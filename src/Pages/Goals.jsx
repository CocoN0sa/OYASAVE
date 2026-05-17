import { useState } from "react";
import { Link } from "react-router-dom";

const goalsData = [
  {
    id: 1,
    name: "School Fees",
    category: "Education",
    target: 200000,
    saved: 100000,
    frequency: "Weekly",
    status: "Pending",
    image: "/school-fees.svg",
  },
  {
    id: 2,
    name: "Vacation Fund",
    category: "Travel",
    target: 400000,
    saved: 300000,
    frequency: "Weekly",
    status: "Pending",
    image: "/vacation.svg",
  },
  {
    id: 3,
    name: "House Rent",
    category: "Business",
    target: 700000,
    saved: 700000,
    frequency: "Monthly",
    status: "Completed",
    image: "/house-rent.svg",
  },
  {
    id: 4,
    name: "Car",
    category: "Business",
    target: 5200000,
    saved: 5200000,
    frequency: "Monthly",
    status: "Completed",
    image: "/car.svg",
  },
];

const formatAmount = (amount) =>
  "N" + amount.toLocaleString("en-NG", { minimumFractionDigits: 2 });

const Goals = () => {
  const [view, setView] = useState("dashboard");
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [goals, setGoals] = useState(goalsData);

  // FIX 2: Working toggle states
  const [notificationsOn, setNotificationsOn] = useState(true);
  const [badgesOn, setBadgesOn] = useState(false);

  // FIX 4: Eye/blur toggle
  const [amountHidden, setAmountHidden] = useState(false);

  const [newGoal, setNewGoal] = useState({
    name: "",
    target: "",
    description: "",
    category: "Education", // FIX 5: category in form state
    startDate: "",
    endDate: "",
    paymentMethod: "",
  });

  const filters = ["All", "Education", "Travel", "Business"];
  const categories = ["Education", "Travel", "Business"];

  const filteredGoals =
    activeFilter === "All"
      ? goals
      : goals.filter((g) => g.category === activeFilter);

  const handleGoalClick = (goal) => {
    setAmountHidden(false);
    setSelectedGoal(goal);
    setView("detail");
  };

  const handleCreateGoal = () => {
    if (!newGoal.name || !newGoal.target) return;
    const created = {
      id: goals.length + 1,
      name: newGoal.name,
      category: newGoal.category, // FIX 5: uses selected category
      target: parseFloat(newGoal.target),
      saved: 0,
      frequency: "Monthly",
      status: "Pending",
      image: "/school-fees.svg",
    };
    setGoals([...goals, created]);
    setNewGoal({
      name: "",
      target: "",
      description: "",
      category: "Education",
      startDate: "",
      endDate: "",
      paymentMethod: "",
    });
    setView("success");
  };

  // ── DASHBOARD VIEW ──
  if (view === "dashboard") {
    return (
      // FIX 1: pb-24 stops buttons being cut off by nav bar
      <div className="flex flex-col px-6 py-10 pb-24 max-w-[400px] mx-auto font-aeonik">
        <div className="mb-6">
          <h1 className="text-[28px] font-bold text-[#393F4A]">Goals</h1>
          <p className="text-[13px] text-[#393F4A] mt-1">
            Keep Track &nbsp;|&nbsp; Set New Goals
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-3 py-1 rounded-full text-[13px] font-medium border transition-all ${
                activeFilter === f
                  ? "bg-[#0D9488] text-white border-[#0D9488]"
                  : "bg-white text-[#393F4A] border-[#D1D5DB]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <p className="text-[14px] font-bold text-[#393F4A] mb-3">Your Goals</p>
        <div className="flex flex-col gap-3 mb-8">
          {filteredGoals.map((goal) => {
            const remaining = goal.target - goal.saved;
            return (
              <div
                key={goal.id}
                onClick={() => handleGoalClick(goal)}
                className="flex items-center justify-between cursor-pointer py-3 border-b border-[#F3F4F6]"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E6F7F6] flex items-center justify-center">
                    <span className="text-[16px]">
                      {goal.category === "Education"
                        ? "🎓"
                        : goal.category === "Travel"
                        ? "✈️"
                        : "🏠"}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[14px] font-semibold text-[#393F4A]">
                      {goal.name}
                    </p>
                    <p className="text-[12px] text-[#6B7280]">
                      {goal.status === "Completed"
                        ? formatAmount(goal.target)
                        : `${formatAmount(remaining)} Remaining`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {goal.status === "Completed" ? (
                    <span className="text-[12px] text-[#0D9488] font-medium flex items-center gap-1">
                      ✅ Completed
                    </span>
                  ) : (
                    <span className="text-[12px] text-[#9CA3AF] flex items-center gap-1">
                      ⏳ Pending
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => setView("create")}
          className="w-full bg-[#0D9488] text-white py-4 rounded-xl text-[16px] font-semibold"
        >
          Create a Goal
        </button>
      </div>
    );
  }

  // ── DETAIL VIEW ──
  if (view === "detail" && selectedGoal) {
    const progress = Math.min(
      (selectedGoal.saved / selectedGoal.target) * 100,
      100
    );
    const remaining = selectedGoal.target - selectedGoal.saved;

    return (
      <div className="flex flex-col px-6 py-10 pb-24 max-w-[400px] mx-auto font-aeonik">
        {/* FIX 3: cursor-pointer on back button */}
        <div className="mb-4">
          <button
            onClick={() => setView("dashboard")}
            className="cursor-pointer"
          >
            <img src="/arrow.svg" alt="Back" className="w-4 h-2.5" />
          </button>
        </div>

        <p className="text-[13px] text-[#393F4A] mb-1">
          Keep Track &nbsp;|&nbsp; Set New Goals
        </p>
        <h1 className="text-[24px] font-bold text-[#393F4A] mb-4">
          {selectedGoal.name}
        </h1>

        <div className="w-full h-[160px] rounded-xl bg-[#0D9488] mb-4 flex items-center justify-center overflow-hidden">
          <img
            src={selectedGoal.image}
            alt={selectedGoal.name}
            className="w-full h-full object-cover"
            onError={(e) => { e.target.style.display = "none"; }}
          />
        </div>

        <div className="flex items-center justify-between mb-1">
          <p className="text-[13px] text-[#6B7280]">
            Goal for {selectedGoal.name}
          </p>
          <span
            className={`text-[12px] font-medium flex items-center gap-1 ${
              selectedGoal.status === "Completed" ? "text-[#0D9488]" : "text-[#9CA3AF]"
            }`}
          >
            {selectedGoal.status === "Completed" ? "✅" : "⏳"} {selectedGoal.status}
          </span>
        </div>

        {/* FIX 4: Eye icon blurs/unblurs the amount */}
        <div className="flex items-center justify-between mb-1">
          <h2 className={`text-[26px] font-bold text-[#393F4A] transition-all ${amountHidden ? "blur-sm select-none" : ""}`}>
            {amountHidden ? "••••••" : formatAmount(selectedGoal.target)}
          </h2>
          <button
            onClick={() => setAmountHidden(!amountHidden)}
            className="text-[#9CA3AF] text-[18px] cursor-pointer"
          >
            {amountHidden ? "🙈" : "👁"}
          </button>
        </div>

        <p className="text-[12px] text-[#6B7280] mb-2">
          Saved {formatAmount(selectedGoal.saved)} {selectedGoal.frequency}
          &nbsp;|&nbsp; Remaining {formatAmount(Math.max(remaining, 0))}
        </p>

        <div className="w-full h-2 bg-[#E5E7EB] rounded-full mb-6">
          <div
            className="h-2 bg-[#0D9488] rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex flex-col gap-3 mb-3 min-[360px]:flex-row">
          {selectedGoal.status === "Completed" ? (
            <>
              <button className="flex-1 bg-[#0D9488] text-white py-3 rounded-xl text-[14px] font-semibold">
                Withdraw
              </button>
              <button
                onClick={() => setView("create")}
                className="flex-1 border border-[#0D9488] text-[#0D9488] py-3 rounded-xl text-[14px] font-semibold"
              >
                Create New Goal
              </button>
            </>
          ) : (
            <button
              onClick={() => setView("create")}
              className="flex-1 bg-[#0D9488] text-white py-3 rounded-xl text-[14px] font-semibold"
            >
              Create a Goal
            </button>
          )}
        </div>

        <div className="flex flex-col gap-3 mb-3 min-[360px]:flex-row">
          <button className="flex-1 border border-[#E5E7EB] text-[#393F4A] py-3 rounded-xl text-[13px] font-medium flex items-center justify-center gap-2">
            ✏️ Edit Goal
          </button>
          <button className="flex-1 border border-[#E5E7EB] text-[#393F4A] py-3 rounded-xl text-[13px] font-medium flex items-center justify-center gap-2">
            ⏸ Pause Goal
          </button>
        </div>

        <div className="flex flex-col gap-3 mb-6 min-[360px]:flex-row">
          <button className="flex-1 border border-[#E5E7EB] text-[#393F4A] py-3 rounded-xl text-[13px] font-medium flex items-center justify-center gap-2">
            ✅ Complete
          </button>
          <button className="flex-1 border border-[#E5E7EB] text-[#393F4A] py-3 rounded-xl text-[13px] font-medium flex items-center justify-center gap-2">
            ➕ Top-Up
          </button>
        </div>

        <p className="text-center text-[12px] text-[#6B7280] mb-3">
          Invite a Friend to get points
        </p>
        <button className="w-full bg-[#0D9488] text-white py-4 rounded-xl text-[16px] font-semibold">
          Invite friend
        </button>
      </div>
    );
  }

  // ── CREATE GOAL VIEW ──
  if (view === "create") {
    const paymentMethods = [
      { label: "Card Payment", icon: "💳" },
      { label: "Bank Transfer", icon: "🏦" },
      { label: "Cash Deposit", icon: "💵" },
      { label: "USSD", icon: "#️⃣" },
    ];

    return (
      <div className="flex flex-col px-6 py-10 pb-24 max-w-[400px] mx-auto font-aeonik">
        {/* FIX 3: cursor-pointer on back button */}
        <div className="mb-4">
          <button
            onClick={() => setView("dashboard")}
            className="cursor-pointer"
          >
            <img src="/arrow.svg" alt="Back" className="w-4 h-2.5" />
          </button>
        </div>

        <h1 className="text-[24px] font-bold text-[#393F4A] mb-6">
          Create a New Goal
        </h1>

        <div className="mb-4">
          <label className="text-[13px] font-semibold text-[#393F4A] mb-1 block">
            Goal Name
          </label>
          <input
            type="text"
            placeholder="Enter Goal Name"
            value={newGoal.name}
            onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
            className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-[14px] text-[#393F4A] outline-none focus:border-[#0D9488]"
          />
        </div>

        <div className="mb-4">
          <label className="text-[13px] font-semibold text-[#393F4A] mb-1 block">
            Target Amount
          </label>
          <input
            type="number"
            placeholder="Enter Target Amount"
            value={newGoal.target}
            onChange={(e) => setNewGoal({ ...newGoal, target: e.target.value })}
            className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-[14px] text-[#393F4A] outline-none focus:border-[#0D9488]"
          />
        </div>

        <div className="mb-4">
          <label className="text-[13px] font-semibold text-[#393F4A] mb-1 block">
            Description
          </label>
          <textarea
            placeholder="Enter Goal Description"
            value={newGoal.description}
            onChange={(e) => setNewGoal({ ...newGoal, description: e.target.value })}
            rows={3}
            className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-[14px] text-[#393F4A] outline-none focus:border-[#0D9488] resize-none"
          />
        </div>

        {/* FIX 5: Category selector */}
        <div className="mb-4">
          <label className="text-[13px] font-semibold text-[#393F4A] mb-2 block">
            Category
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setNewGoal({ ...newGoal, category: cat })}
                className={`px-3 py-2 rounded-xl text-[13px] font-medium border transition-all ${
                  newGoal.category === cat
                    ? "bg-[#0D9488] text-white border-[#0D9488]"
                    : "bg-white text-[#393F4A] border-[#D1D5DB]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FIX 2: Working toggles */}
        <div className="mb-4">
          <p className="text-[13px] font-bold text-[#393F4A] mb-2">
            Motivation & Reminders
          </p>
          <div className="flex items-center justify-between mb-2">
            <p className="text-[13px] text-[#393F4A]">Enable Notifications</p>
            <button
              onClick={() => setNotificationsOn(!notificationsOn)}
              className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors duration-200 ${
                notificationsOn ? "bg-[#0D9488]" : "bg-[#E5E7EB]"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-all duration-200 ${
                  notificationsOn ? "right-0.5" : "left-0.5"
                }`}
              />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[13px] text-[#393F4A]">Enable Encouragement Badges</p>
            <button
              onClick={() => setBadgesOn(!badgesOn)}
              className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors duration-200 ${
                badgesOn ? "bg-[#0D9488]" : "bg-[#E5E7EB]"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-all duration-200 ${
                  badgesOn ? "right-0.5" : "left-0.5"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-[13px] font-bold text-[#393F4A] mb-1">
            Automate Your Savings
          </p>
          <Link
            to="/AutomatedSavings"
            className="text-[13px] text-[#0D9488] underline"
          >
            Set Up Automated Savings
          </Link>
        </div>

        <div className="mb-4">
          <p className="text-[13px] font-bold text-[#393F4A] mb-2">
            Savings Duration
          </p>
          <div className="mb-3">
            <label className="text-[12px] text-[#6B7280] mb-1 block">Start Date</label>
            <input
              type="date"
              value={newGoal.startDate}
              onChange={(e) => setNewGoal({ ...newGoal, startDate: e.target.value })}
              className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-[14px] text-[#393F4A] outline-none focus:border-[#0D9488]"
            />
          </div>
          <div>
            <label className="text-[12px] text-[#6B7280] mb-1 block">End Date</label>
            <input
              type="date"
              value={newGoal.endDate}
              onChange={(e) => setNewGoal({ ...newGoal, endDate: e.target.value })}
              className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-[14px] text-[#393F4A] outline-none focus:border-[#0D9488]"
            />
          </div>
        </div>

        <div className="mb-6">
          <p className="text-[13px] font-bold text-[#393F4A] mb-2">
            Select Payment Method
          </p>
          <div className="grid grid-cols-2 gap-3">
            {paymentMethods.map((method) => (
              <button
                key={method.label}
                onClick={() => setNewGoal({ ...newGoal, paymentMethod: method.label })}
                className={`flex flex-col items-center justify-center py-4 rounded-xl border text-[12px] font-medium gap-1 transition-all ${
                  newGoal.paymentMethod === method.label
                    ? "border-[#0D9488] text-[#0D9488] bg-[#E6F7F6]"
                    : "border-[#E5E7EB] text-[#393F4A]"
                }`}
              >
                <span className="text-[20px]">{method.icon}</span>
                {method.label}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleCreateGoal}
          className="w-full bg-[#0D9488] text-white py-4 rounded-xl text-[16px] font-semibold"
        >
          Save Goal
        </button>
      </div>
    );
  }

  // ── SUCCESS VIEW ──
  if (view === "success") {
    return (
      <div className="flex flex-col items-center justify-center px-6 py-10 pb-24 max-w-[400px] mx-auto font-aeonik min-h-[60vh]">
        <div className="w-20 h-20 rounded-full bg-[#E6F7F6] flex items-center justify-center mb-6">
          <span className="text-[40px]">✅</span>
        </div>
        <h2 className="text-[22px] font-bold text-[#393F4A] mb-2 text-center">
          Goal Created Successfully
        </h2>
        <p className="text-[14px] text-[#6B7280] text-center mb-8">
          Your new savings goal has been set up. Start saving today!
        </p>
        <div className="flex w-full flex-col gap-3 min-[360px]:flex-row">
          <button
            onClick={() => {
              setSelectedGoal(goals[goals.length - 1]);
              setView("detail");
            }}
            className="flex-1 bg-[#0D9488] text-white py-3 rounded-xl text-[14px] font-semibold"
          >
            View Goal
          </button>
          <button
            onClick={() => setView("dashboard")}
            className="flex-1 border border-[#0D9488] text-[#0D9488] py-3 rounded-xl text-[14px] font-semibold"
          >
            Back to Goals
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default Goals;
