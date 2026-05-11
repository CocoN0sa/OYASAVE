import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackArrow } from "../Components/GroupUI";

const TEAL = "#2D9C8A";

function FreqTabs({ selected, onChange }) {
  const tabs = ["Daily", "Weekly", "Monthly", "Yearly"];
  return (
    <div className="flex rounded-full bg-gray-100 p-1 mt-1">
      {tabs.map(t => (
        <button
          key={t}
          onClick={() => onChange(t)}
          className="flex-1 text-sm py-1.5 rounded-full transition-all font-medium"
          style={selected === t ? { background: TEAL, color: "#fff" } : { color: "#9ca3af" }}
        >
          {t}
        </button>
      ))}
    </div>
  );
}

function InputField({ placeholder }) {
  return (
    <input
      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-400 placeholder-gray-300 focus:outline-none focus:border-gray-300 bg-white"
      placeholder={placeholder}
    />
  );
}

function TextareaField({ placeholder }) {
  return (
    <textarea
      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-300 placeholder-gray-300 focus:outline-none resize-none bg-white"
      placeholder={placeholder}
      rows={4}
    />
  );
}

function Label({ children }) {
  return <p className="text-sm font-medium text-gray-700 mt-4 mb-1.5">{children}</p>;
}

function SectionTitle({ children }) {
  return <p className="text-base font-bold text-gray-900 mt-5 mb-0.5">{children}</p>;
}

function TealButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full py-4 rounded-2xl text-white font-semibold text-base bg-[#44A1A0]"
    >
      {children}
    </button>
  );
}

function OutlineButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full py-4 rounded-2xl text-gray-400 font-semibold text-base bg-white border border-gray-200"
    >
      {children}
    </button>
  );
}

const CalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="1" y="3" width="16" height="14" rx="2" stroke="#9ca3af" strokeWidth="1.5" />
    <path d="M1 7H17" stroke="#9ca3af" strokeWidth="1.5" />
    <path d="M5 1V4M13 1V4" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ChevronIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M4 6L8 10L12 6" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function PaymentCard({ icon, label, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-start gap-2 p-4 rounded-2xl border transition-all"
      style={selected ? { background: TEAL, borderColor: TEAL } : { background: "#f9fafb", borderColor: "#e5e7eb" }}
    >
      <span style={{ color: selected ? "#fff" : "#374151" }}>{icon}</span>
      <span className="text-sm font-semibold" style={{ color: selected ? "#fff" : "#374151" }}>{label}</span>
    </button>
  );
}

const CardIcon = ({ color = "#374151" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="5" width="20" height="14" rx="3" stroke={color} strokeWidth="1.8" />
    <path d="M2 9H22" stroke={color} strokeWidth="1.8" />
    <rect x="5" y="13" width="5" height="2" rx="1" fill={color} />
  </svg>
);

const BankIcon = ({ color = "#374151" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3 21H21M3 10H21M5 10V21M19 10V21M12 3L21 10H3L12 3Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M9 10V21M15 10V21" stroke={color} strokeWidth="1.8" />
  </svg>
);

const CashIcon = ({ color = "#374151" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.8" />
    <rect x="2" y="6" width="20" height="12" rx="2" stroke={color} strokeWidth="1.8" />
    <circle cx="5" cy="12" r="1" fill={color} />
    <circle cx="19" cy="12" r="1" fill={color} />
  </svg>
);

const USSDIcon = ({ color = "#374151" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 4H10V10H4V4ZM14 4H20V10H14V4ZM4 14H10V20H4V14ZM14 14H20V20H14V14Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);

const SuccessIcon = () => (
  <div className="relative flex items-center justify-center">
    <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: "#e0f5ee" }}>
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="20" stroke={TEAL} strokeWidth="2.5" />
        <path d="M13 22L19 28L31 16" stroke={TEAL} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    {[...Array(12)].map((_, i) => {
      const angle = (i * 30) * Math.PI / 180;
      const r = 46;
      const x = 50 + r * Math.cos(angle);
      const y = 50 + r * Math.sin(angle);
      const colors = ["#f59e0b", "#10b981", "#3b82f6", "#ef4444", "#8b5cf6", "#f97316"];
      return (
        <div key={i} className="absolute rounded-full" style={{
          left: `${x}%`, top: `${y}%`,
          transform: "translate(-50%, -50%)",
          background: colors[i % colors.length],
          width: i % 3 === 0 ? "6px" : "4px",
          height: i % 3 === 0 ? "6px" : "4px",
        }} />
      );
    })}
  </div>
);

function GroupForm({ freq, setFreq, children, paymentSelected }) {
  return (
    <>
      <Label>Group Name</Label>
      <InputField placeholder="Enter Ajo Group Name" />

      <Label>Group Rules</Label>
      <TextareaField placeholder="Define group rules or guidelines here" />

      <SectionTitle>Contribution Frequency</SectionTitle>
      <FreqTabs selected={freq} onChange={setFreq} />

      <Label>Amount</Label>
      <InputField placeholder="Enter Fixed Amount" />

      <Label>Currency</Label>
      <div className="relative">
        <InputField placeholder="Select currency" />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"><ChevronIcon /></span>
      </div>

      <Label>Duration</Label>
      <div className="relative">
        <InputField placeholder="Set Duration" />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"><CalendarIcon /></span>
      </div>

      {children}
    </>
  );
}

// Screen 1: Create Group (no payment selected)
function Screen1({ onNext }) {
  const navigate = useNavigate();
  const [freq, setFreq] = useState("Daily");
  return (
    <div className="flex flex-col h-full">
      <div className="px-5 pt-4"><BackArrow onClick={() => navigate(-1)} /></div>
      <div className="flex-1 overflow-y-auto px-5 pb-6">
        <h1 className="text-2xl font-bold text-gray-900 mt-1">Create Ajo Group</h1>
        <p className="text-sm text-gray-400 mt-0.5 mb-2">Create your own Ajo group</p>
        <GroupForm freq={freq} setFreq={setFreq}>
          <div className="mt-5">
            <TealButton onClick={onNext}>Create group</TealButton>
          </div>
          <SectionTitle>Select Payment Method</SectionTitle>
          <div className="grid grid-cols-2 gap-3 mt-2">
            <PaymentCard icon={<CardIcon />} label="Card Payment" selected={false} onClick={onNext} />
            <PaymentCard icon={<BankIcon />} label="Bank Transfer" selected={false} onClick={() => {}} />
            <PaymentCard icon={<CashIcon />} label="Cash Deposit" selected={false} onClick={() => {}} />
            <PaymentCard icon={<USSDIcon />} label="USSD" selected={false} onClick={() => {}} />
          </div>
        </GroupForm>
      </div>
    </div>
  );
}

// Screen 2: Card Payment selected
function Screen2({ onBack, onAddCard, onCreateGroup }) {
  const [freq, setFreq] = useState("Daily");
  return (
    <div className="flex flex-col h-full">
      <div className="px-5 pt-4"><BackArrow onClick={onBack} /></div>
      <div className="flex-1 overflow-y-auto px-5 pb-6">
        <h1 className="text-2xl font-bold text-gray-900 mt-1">Create Ajo Group</h1>
        <p className="text-sm text-gray-400 mt-0.5 mb-2">Create your own Ajo group</p>
        <GroupForm freq={freq} setFreq={setFreq}>
          <SectionTitle>Select Payment Method</SectionTitle>
          <p className="text-xs text-gray-400 mb-2">Select your preferred method for contributions.</p>
          <div className="grid grid-cols-2 gap-3">
            <PaymentCard icon={<CardIcon color="#fff" />} label="Card Payment" selected={true} onClick={() => {}} />
            <PaymentCard icon={<BankIcon />} label="Bank Transfer" selected={false} onClick={() => {}} />
            <PaymentCard icon={<CashIcon />} label="Cash Deposit" selected={false} onClick={() => {}} />
            <PaymentCard icon={<USSDIcon />} label="USSD" selected={false} onClick={() => {}} />
          </div>
        </GroupForm>
      </div>
      <div className="px-5 pb-5 flex flex-col gap-2">
        <TealButton onClick={onAddCard}>+ Add Card</TealButton>
        <OutlineButton onClick={onCreateGroup}>+ Create a Group</OutlineButton>
      </div>
    </div>
  );
}

// Screen 3: Add Card
function Screen3({ onBack, onSave }) {
  return (
    <div className="flex flex-col h-full">
      <div className="px-5 pt-4"><BackArrow onClick={onBack} /></div>
      <div className="flex-1 overflow-y-auto px-5 pb-6">
        <h1 className="text-2xl font-bold text-gray-900 mt-1">Add Card</h1>
        <p className="text-sm text-gray-400 mt-0.5 mb-2">Add your Card for seamless savings</p>

        <Label>Cardholder Name</Label>
        <InputField placeholder="Enter Cardholder Name" />

        <Label>Cardholder Number</Label>
        <InputField placeholder="Enter Cardholder Number" />

        <Label>Expiration Date (MM/YY)</Label>
        <div className="relative">
          <InputField placeholder="Enter Expiration Date (MM/YY)" />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"><CalendarIcon /></span>
        </div>

        <div className="flex items-center gap-2 mt-4 mb-1.5">
          <span className="text-sm font-medium text-gray-700">CVV</span>
          <span className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-500 cursor-pointer">?</span>
        </div>
        <div className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-300 tracking-widest bg-white">•••</div>

        <div className="flex gap-3 mt-6">
          <button onClick={onSave} className="flex-1 py-4 rounded-2xl text-white font-semibold text-base bg-[#44A1A0]">
            Save Card
          </button>
          <button onClick={onBack} className="flex-1 py-4 rounded-2xl text-gray-500 font-semibold text-base bg-gray-100">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

// Screen 4: Card Saved Successfully
function Screen4({ onContinue }) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex items-center justify-center px-5">
        <div className="w-full bg-gray-50 rounded-3xl p-8 flex flex-col items-center text-center">
          <SuccessIcon />
          <h2 className="text-xl font-bold text-gray-900 mt-5 mb-1">Card Saved Successfully</h2>
          <p className="text-sm text-gray-400 mb-6">You have successfully added your card</p>
          <TealButton onClick={onContinue}>Continue</TealButton>
        </div>
      </div>
    </div>
  );
}

// Screen 5: Confirm Group (card added)
function Screen5({ onBack, onCreate }) {
  const [freq, setFreq] = useState("Daily");
  return (
    <div className="flex flex-col h-full">
      <div className="px-5 pt-4"><BackArrow onClick={onBack} /></div>
      <div className="flex-1 overflow-y-auto px-5 pb-6">
        <h1 className="text-2xl font-bold text-gray-900 mt-1">Create Ajo Group</h1>
        <p className="text-sm text-gray-400 mt-0.5 mb-2">Create your own Ajo group</p>
        <GroupForm freq={freq} setFreq={setFreq}>
          <SectionTitle>Select Payment Method</SectionTitle>
          <div className="grid grid-cols-2 gap-3 mt-2">
            <PaymentCard icon={<CardIcon color="#fff" />} label="Card Payment" selected={true} onClick={() => {}} />
            <PaymentCard icon={<BankIcon />} label="Bank Transfer" selected={false} onClick={() => {}} />
            <PaymentCard icon={<CashIcon />} label="Cash Deposit" selected={false} onClick={() => {}} />
            <PaymentCard icon={<USSDIcon />} label="USSD" selected={false} onClick={() => {}} />
          </div>
        </GroupForm>
      </div>
      <div className="px-5 pb-5">
        <TealButton onClick={onCreate}>Create Group</TealButton>
      </div>
    </div>
  );
}

// Screen 6: Group Created Successfully
function Screen6({ onContinue }) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex items-center justify-center px-5">
        <div className="w-full bg-gray-50 rounded-3xl p-8 flex flex-col items-center text-center">
          <SuccessIcon />
          <h2 className="text-xl font-bold text-gray-900 mt-5 mb-1">Group Created<br />Successfully</h2>
          <p className="text-sm text-gray-400 mb-6">You have successfully created <span className="font-semibold text-gray-600">[Group Name]</span>!</p>
          <TealButton onClick={onContinue}>Continue</TealButton>
        </div>
      </div>
    </div>
  );
}

// Screen 7: Welcome to Your Group
function Screen7() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto px-5 pb-4 pt-5">
        <h1 className="text-2xl font-bold text-gray-900 mt-3">Welcome to Your Group!</h1>
        <p className="text-sm text-gray-400 mt-1 mb-4">Your group is set up but has not started saving yet.</p>

        <p className="text-sm font-bold text-gray-900">Group Name</p>
        <p className="text-sm text-gray-400 mt-0.5 mb-3">[Group Name Here]</p>

        <p className="text-sm font-bold text-gray-900">Contribution Frequency</p>
        <p className="text-sm text-gray-400 mt-0.5 mb-3">Monthly Contributions of [Amount Here]</p>

        <p className="text-sm font-bold text-gray-900">Group Rules</p>
        <ol className="list-decimal pl-5 mt-1 mb-4 space-y-0.5">
          <li className="text-sm text-gray-400">Be punctual</li>
          <li className="text-sm text-gray-400">Respect fellow members</li>
          <li className="text-sm text-gray-400">Keep contributions confidential</li>
        </ol>

        <button className="w-full py-4 rounded-2xl text-gray-400 font-semibold text-base bg-gray-100 mb-3">
          Start contribution now
        </button>

        <p className="text-center text-sm font-semibold mb-3" style={{ color: TEAL }}>Explore More Groups</p>

        <p className="text-center text-xs text-gray-400 mb-2">Invite Members to join your group!</p>
        <TealButton onClick={() => {}}>Invite Members</TealButton>
      </div>
      <div className="px-5 pb-5 flex gap-3">
        <button
          onClick={() => navigate("/GroupDashboard")}
          className="flex-1 py-3.5 rounded-2xl text-white font-semibold text-sm bg-[#44A1A0]"
        >
          View Group Dashboard
        </button>
        <button className="flex-1 py-3.5 rounded-2xl text-gray-700 font-semibold text-sm bg-gray-100">
          Refer Friends
        </button>
      </div>
    </div>
  );
}

export default function CreateGroup() {
  const [screen, setScreen] = useState(1);

  const screens = {
    1: <Screen1 onNext={() => setScreen(2)} />,
    2: <Screen2 onBack={() => setScreen(1)} onAddCard={() => setScreen(3)} onCreateGroup={() => setScreen(5)} />,
    3: <Screen3 onBack={() => setScreen(2)} onSave={() => setScreen(4)} />,
    4: <Screen4 onContinue={() => setScreen(5)} />,
    5: <Screen5 onBack={() => setScreen(2)} onCreate={() => setScreen(6)} />,
    6: <Screen6 onContinue={() => setScreen(7)} />,
    7: <Screen7 />,
  };

  return (
    <div className="min-h-screen bg-white max-w-md mx-auto">
      {screens[screen]}
    </div>
  );
}
