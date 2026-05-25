export const teal = "#3AAFA9";
export const tealDark = "#2B9A94";
export const tealLight = "#E8F7F6";

export const groups = [
  { id: 1, name: "Group Name 1", members: 5, stars: 4.5, reviews: 10, type: "Diamond", description: "Group Description", requirement: "₦5,000,000 Contribution, Yearly", duration: "5 Years" },
  { id: 2, name: "Group Name 2", members: 8, stars: 3.5, reviews: 7, type: "Gold", description: "Group Description", requirement: "₦100,000 Contribution, Monthly", duration: "8 Months" },
  { id: 3, name: "Group Name 3", members: 5, stars: 2.5, reviews: 4, type: "Silver", description: "Group Description", requirement: "₦50,000 Contribution, Weekly", duration: "6 Months" },
  { id: 4, name: "Group Name 4", members: 2, stars: 1, reviews: 2, type: "Bronze", description: "Group Description", requirement: "₦10,000 Contribution, Daily", duration: "3 Months" },
];

export const typeConfig = {
  Diamond: {
    color: "#1D9E75",
    emoji: "💎",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2">
        <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.58a2.41 2.41 0 0 0 3.41 0l7.58-7.58a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" />
      </svg>
    ),
  },
  Gold: {
    color: "#BA7517",
    emoji: "🥇",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </svg>
    ),
  },
  Silver: {
    color: "#185FA5",
    emoji: "🥈",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#185FA5" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  Bronze: {
    color: "#993C1D",
    emoji: "🥉",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#993C1D" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
};

export const dashboardMembers = [
  { name: "Charles Amadi", contrib: "2/10", status: "Received" },
  { name: "Didi Ahmed", contrib: "2/10", status: "Received" },
  { name: "Tolu Christain", contrib: "2/10", status: "Pending" },
];
