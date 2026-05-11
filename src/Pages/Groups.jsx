import { useNavigate } from "react-router-dom";
import { Compass, Plus } from "lucide-react";

export default function Groups() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white px-5 pt-10 pb-28 max-w-md mx-auto">
      <h1 className="text-[28px] font-bold text-[#393F4A] mb-1">Ajo Groups</h1>
      <p className="text-[15px] text-[#98A2B3] mb-8">Join, Create or Explore Ajo Groups</p>

      <div className="flex flex-col gap-5">
        <button
          onClick={() => navigate("/CreateGroup")}
          className="flex items-center gap-3 text-[#98A2B3] text-[16px] font-normal cursor-pointer"
        >
          <Plus size={20} strokeWidth={1.8} />
          Create Ajo Group
        </button>

        <button
          onClick={() => navigate("/ExploreGroup")}
          className="flex items-center gap-3 text-[#44A1A0] text-[16px] font-normal cursor-pointer"
        >
          <Compass size={20} strokeWidth={1.8} />
          Explore Ajo Group
        </button>
      </div>
    </div>
  );
}
