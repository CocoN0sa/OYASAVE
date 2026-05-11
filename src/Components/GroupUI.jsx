import { teal, tealLight } from "../data/groupsData.jsx";

export function GroupIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1e2d3d" strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function StarRating({ value }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="11" height="11" viewBox="0 0 24 24"
          fill={i <= Math.floor(value) ? "#f59e0b" : i - 0.5 <= value ? "url(#half)" : "none"}
          stroke="#f59e0b" strokeWidth="2">
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </span>
  );
}

export function MemberAvatars({ count }) {
  const show = Math.min(count, 5);
  const extra = count - show;
  return (
    <div className="flex items-center" style={{ marginLeft: "4px" }}>
      {Array.from({ length: show }).map((_, i) => (
        <div
          key={i}
          className="w-9 h-9 rounded-full bg-gray-200 border-2 border-white"
          style={{ marginLeft: i === 0 ? 0 : "-10px", zIndex: show - i }}
        />
      ))}
      {extra > 0 && (
        <div
          className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
          style={{ background: "#1D9E75", marginLeft: "-10px", zIndex: 0 }}
        >
          +{extra}
        </div>
      )}
    </div>
  );
}

export function BackArrow({ onClick }) {
  return (
    <button onClick={onClick} className="mb-4 text-gray-500 hover:text-gray-800 transition-colors cursor-pointer">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <line x1="19" y1="12" x2="5" y2="12" />
        <polyline points="12 19 5 12 12 5" />
      </svg>
    </button>
  );
}

export function StatusBadge({ status }) {
  if (status === "Received") {
    return (
      <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: teal }}>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
          <circle cx="7.5" cy="7.5" r="7.5" fill={teal} />
          <path d="M4 7.5L6.5 10L11 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Received
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1 text-xs font-semibold text-amber-500">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="animate-spin" style={{ animationDuration: "2s" }}>
        <circle cx="7" cy="7" r="6" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="20 16" strokeLinecap="round" />
      </svg>
      Pending
    </span>
  );
}

function ConfettiDot({ style }) {
  return <div className="absolute rounded-full" style={style} />;
}

export function SuccessIcon() {
  const dots = [
    { top: "8%", left: "20%", width: 6, height: 6, color: "#FFD166", delay: 0 },
    { top: "12%", right: "22%", width: 5, height: 5, color: "#06D6A0", delay: 0.1 },
    { top: "30%", left: "5%", width: 4, height: 4, color: "#EF476F", delay: 0.15 },
    { top: "30%", right: "5%", width: 5, height: 5, color: "#118AB2", delay: 0.2 },
    { bottom: "28%", left: "12%", width: 6, height: 6, color: "#FFD166", delay: 0.05 },
    { bottom: "28%", right: "12%", width: 4, height: 4, color: "#EF476F", delay: 0.25 },
    { bottom: "10%", left: "35%", width: 5, height: 5, color: "#06D6A0", delay: 0.1 },
    { bottom: "10%", right: "35%", width: 6, height: 6, color: "#118AB2", delay: 0.3 },
  ];
  return (
    <div className="relative w-28 h-28 mx-auto mb-6">
      {dots.map((d, i) => (
        <ConfettiDot key={i} style={{ position: "absolute", width: d.width, height: d.height, backgroundColor: d.color, top: d.top, left: d.left, right: d.right, bottom: d.bottom, animation: `popIn 0.4s ease ${d.delay}s both` }} />
      ))}
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mx-auto"
        style={{ backgroundColor: tealLight, border: `2px solid ${teal}`, animation: "scaleIn 0.4s cubic-bezier(0.34,1.56,0.64,1) both" }}
      >
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M8 18L15 25L28 11" stroke={teal} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ animation: "drawCheck 0.4s ease 0.3s both" }} />
        </svg>
      </div>
    </div>
  );
}
