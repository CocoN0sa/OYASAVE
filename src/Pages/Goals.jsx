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
    image: "/schoolfees.png",
  },
  {
    id: 2,
    name: "Vacation Fund",
    category: "Travel",
    target: 400000,
    saved: 300000,
    frequency: "Weekly",
    status: "Pending",
    image: "/vacationfund.png",
  },
  {
    id: 3,
    name: "House Rent",
    category: "Business",
    target: 700000,
    saved: 700000,
    frequency: "Monthly",
    status: "Completed",
    image: "/houserent.png",
  },
  {
    id: 4,
    name: "Car",
    category: "Business",
    target: 5200000,
    saved: 5200000,
    frequency: "Monthly",
    status: "Completed",
    image: "/car.png",
  },
];

const formatAmount = (amount) =>
  "N" + amount.toLocaleString("en-NG", { minimumFractionDigits: 2 });

const Goals = () => {
  const [view, setView] = useState("dashboard");
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [goals, setGoals] = useState(goalsData);
  const [amountHidden, setAmountHidden] = useState(false);
  const [newGoal, setNewGoal] = useState({
    name: "",
    target: "",
    description: "",
    category: "Education",
    startDate: "",
    endDate: "",
    paymentMethod: "",
  });
  const [cardDetails, setCardDetails] = useState({
    cardholderName: "",
    expirationDate: "",
    cvv: "",
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
  const handleSaveGoal = () => {
    if (!newGoal.name || !newGoal.target) return;
    setView("addcard");
  };
  const handleSaveCard = () => {
    const created = {
      id: goals.length + 1,
      name: newGoal.name,
      category: newGoal.category,
      target: parseFloat(newGoal.target),
      saved: 0,
      frequency: "Monthly",
      status: "Pending",
      image: "/schoolfees.png",
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
    setCardDetails({ cardholderName: "", expirationDate: "", cvv: "" });
    setView("success");
  };

  if (view === "dashboard") {
    return (
      <div className="flex flex-col px-6 py-10 pb-24 max-w-[400px] mx-auto font-aeonik">
        <div className="mb-6">
          <h1 className="text-[28px] font-bold text-[#393F4A]">Goals</h1>
          <p className="text-[13px] text-[#393F4A] mt-1">
            Keep Track &nbsp;|&nbsp; Set New Goals
          </p>
        </div>
        <div className="flex gap-2 mb-6">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-3 py-1 rounded-full text-[13px] font-medium border transition-all ${activeFilter === f ? "bg-[#0D9488] text-white border-[#0D9488]" : "bg-white text-[#393F4A] border-[#D1D5DB]"}`}
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
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E6F7F6] flex items-center justify-center">
                    <span className="text-[16px]">
                      {goal.category === "Education"
                        ? "🎓"
                        : goal.category === "Travel"
                          ? "✈️"
                          : "🏠"}
                    </span>
                  </div>
                  <div>
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
                <div>
                  {goal.status === "Completed" ? (
                    <span className="text-[12px] text-[#0D9488] font-medium">
                      ✅ Completed
                    </span>
                  ) : (
                    <span className="text-[12px] text-[#9CA3AF]">
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

  if (view === "detail" && selectedGoal) {
    const progress = Math.min(
      (selectedGoal.saved / selectedGoal.target) * 100,
      100,
    );
    const remaining = selectedGoal.target - selectedGoal.saved;
    return (
      <div className="flex flex-col px-6 py-10 pb-24 max-w-[400px] mx-auto font-aeonik">
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
        <div className="w-full h-[160px] rounded-xl bg-[#0D9488] mb-4 overflow-hidden">
          <img
            src={selectedGoal.image}
            alt={selectedGoal.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-between mb-1">
          <p className="text-[13px] text-[#6B7280]">
            Goal for {selectedGoal.name}
          </p>
          <span
            className={`text-[12px] font-medium ${selectedGoal.status === "Completed" ? "text-[#0D9488]" : "text-[#9CA3AF]"}`}
          >
            {selectedGoal.status === "Completed" ? "✅" : "⏳"}{" "}
            {selectedGoal.status}
          </span>
        </div>
        <div className="flex items-center justify-between mb-1">
          <h2
            className={`text-[26px] font-bold text-[#393F4A] ${amountHidden ? "blur-sm select-none" : ""}`}
          >
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
          Saved {formatAmount(selectedGoal.saved)} {selectedGoal.frequency}{" "}
          &nbsp;|&nbsp; Remaining {formatAmount(Math.max(remaining, 0))}
        </p>
        <div className="w-full h-2 bg-[#E5E7EB] rounded-full mb-6">
          <div
            className="h-2 bg-[#0D9488] rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex gap-3 mb-3">
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
        <div className="flex gap-3 mb-3">
          <button className="flex-1 border border-[#E5E7EB] text-[#393F4A] py-3 rounded-xl text-[13px] font-medium flex items-center justify-center gap-2">
            ✏️ Edit Goal
          </button>
          <button className="flex-1 border border-[#E5E7EB] text-[#393F4A] py-3 rounded-xl text-[13px] font-medium flex items-center justify-center gap-2">
            ⏸ Pause Goal
          </button>
        </div>
        <div className="flex gap-3 mb-6">
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

  if (view === "create") {
    const paymentMethods = [
      { label: "Card Payment", icon: "💳" },
      { label: "Bank Transfer", icon: "🏦" },
      { label: "Cash Deposit", icon: "💵" },
      { label: "USSD", icon: "#️⃣" },
    ];
    return (
      <div className="flex flex-col px-6 py-10 pb-24 max-w-[400px] mx-auto font-aeonik">
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
        <div className="w-full h-[140px] rounded-xl border-2 border-dashed border-[#D1D5DB] bg-[#F9FAFB] flex flex-col items-center justify-center mb-6 cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-[#E5E7EB] flex items-center justify-center mb-2">
            <span className="text-[20px]">🖼️</span>
          </div>
          <p className="text-[12px] text-[#9CA3AF]">Upload Goal Image</p>
        </div>
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
            onChange={(e) =>
              setNewGoal({ ...newGoal, description: e.target.value })
            }
            rows={3}
            className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-[14px] text-[#393F4A] outline-none focus:border-[#0D9488] resize-none"
          />
        </div>
        <div className="mb-4">
          <label className="text-[13px] font-semibold text-[#393F4A] mb-2 block">
            Category
          </label>
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setNewGoal({ ...newGoal, category: cat })}
                className={`px-3 py-2 rounded-xl text-[13px] font-medium border transition-all ${newGoal.category === cat ? "bg-[#0D9488] text-white border-[#0D9488]" : "bg-white text-[#393F4A] border-[#D1D5DB]"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <p className="text-[13px] font-bold text-[#393F4A] mb-1">
            Motivation & Reminders
          </p>
          <Link to="#" className="text-[13px] text-[#0D9488] underline">
            Enable Notifications And Encouragement Badges
          </Link>
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
            <label className="text-[12px] text-[#6B7280] mb-1 block">
              Start Date
            </label>
            <input
              type="date"
              value={newGoal.startDate}
              onChange={(e) =>
                setNewGoal({ ...newGoal, startDate: e.target.value })
              }
              className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-[14px] text-[#393F4A] outline-none focus:border-[#0D9488]"
            />
          </div>
          <div>
            <label className="text-[12px] text-[#6B7280] mb-1 block">
              End Date
            </label>
            <input
              type="date"
              value={newGoal.endDate}
              onChange={(e) =>
                setNewGoal({ ...newGoal, endDate: e.target.value })
              }
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
                onClick={() =>
                  setNewGoal({ ...newGoal, paymentMethod: method.label })
                }
                className={`flex flex-col items-center justify-center py-4 rounded-xl border text-[12px] font-medium gap-1 transition-all ${newGoal.paymentMethod === method.label ? "border-[#0D9488] text-[#0D9488] bg-[#E6F7F6]" : "border-[#E5E7EB] text-[#393F4A]"}`}
              >
                <span className="text-[20px]">{method.icon}</span>
                {method.label}
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={handleSaveGoal}
          className="w-full bg-[#0D9488] text-white py-4 rounded-xl text-[16px] font-semibold"
        >
          Save Goal
        </button>
      </div>
    );
  }

  if (view === "addcard") {
    return (
      <div className="flex flex-col px-6 py-10 pb-24 max-w-[400px] mx-auto font-aeonik">
        <div className="mb-4">
          <button onClick={() => setView("create")} className="cursor-pointer">
            <img src="/arrow.svg" alt="Back" className="w-4 h-2.5" />
          </button>
        </div>
        <h1 className="text-[24px] font-bold text-[#393F4A] mb-1">Add Card</h1>
        <p className="text-[13px] text-[#6B7280] mb-6">
          Add your Card for seamless savings
        </p>
        <div className="mb-4">
          <label className="text-[13px] font-semibold text-[#393F4A] mb-1 block">
            Cardholder Name
          </label>
          <input
            type="text"
            placeholder="Enter Cardholder Name"
            value={cardDetails.cardholderName}
            onChange={(e) =>
              setCardDetails({ ...cardDetails, cardholderName: e.target.value })
            }
            className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-[14px] text-[#393F4A] outline-none focus:border-[#0D9488]"
          />
        </div>
        <div className="mb-4">
          <label className="text-[13px] font-semibold text-[#393F4A] mb-1 block">
            Expiration Date (MM/YY)
          </label>
          <input
            type="text"
            placeholder="Enter Expiration Date (MM/YY)"
            value={cardDetails.expirationDate}
            onChange={(e) =>
              setCardDetails({ ...cardDetails, expirationDate: e.target.value })
            }
            className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-[14px] text-[#393F4A] outline-none focus:border-[#0D9488]"
          />
        </div>
        <div className="mb-8">
          <label className="text-[13px] font-semibold text-[#393F4A] mb-1 block">
            CVV
          </label>
          <input
            type="password"
            placeholder="•••"
            value={cardDetails.cvv}
            onChange={(e) =>
              setCardDetails({ ...cardDetails, cvv: e.target.value })
            }
            className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-[14px] text-[#393F4A] outline-none focus:border-[#0D9488]"
          />
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleSaveCard}
            className="flex-1 bg-[#0D9488] text-white py-4 rounded-xl text-[15px] font-semibold"
          >
            Save Card
          </button>
          <button
            onClick={() => setView("create")}
            className="flex-1 border border-[#D1D5DB] text-[#393F4A] py-4 rounded-xl text-[15px] font-semibold"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  if (view === "success") {
    const createdGoalName = goals[goals.length - 1]?.name || "your goal";
    return (
      <div className="flex flex-col items-center justify-center px-6 py-10 pb-24 max-w-[400px] mx-auto font-aeonik min-h-[60vh]">
        <div className="w-20 h-20 rounded-full bg-[#0D9488] flex items-center justify-center mb-6">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M10 20L17 27L30 13"
              stroke="white"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2 className="text-[22px] font-bold text-[#393F4A] mb-2 text-center">
          Goal Created Successfully
        </h2>
        <p className="text-[14px] text-[#6B7280] text-center mb-8">
          You have successfully Created {createdGoalName}!
        </p>
        <div className="flex gap-3 w-full mb-6">
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
            className="flex-1 border border-[#D1D5DB] text-[#393F4A] py-3 rounded-xl text-[14px] font-semibold"
          >
            Back to Dashboard
          </button>
        </div>
        <p className="text-[13px] text-[#6B7280]">
          Invite a Friend to get points
        </p>
      </div>
    );
  }

  return null;
};

export default Goals;
