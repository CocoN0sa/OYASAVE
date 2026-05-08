import { TextInput, Button, Box, Text, UnstyledButton } from "@mantine/core";
import { IconClock } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Dailydebit = () => {
  const [period, setPeriod] = useState("AM");
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");

  return (
    <div className="flex flex-col px-6 py-10 max-w-[400px] mx-auto font-aeonik">
      {/* Back Arrow */}
      <div className="mb-6">
        <Link to="/AutomatedSavings">
          <img src="/arrow.svg" alt="Back" className="w-4 h-2.5" />
        </Link>
      </div>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[28px] font-bold text-[#393F4A]">Set Daily Debit</h1>
      </div>

      {/* Amount Input */}
      <div className="mb-6">
        <Text className="text-[16px]! font-normal! text-[#344054]! mb-1!">
          Daily Debit Amount
        </Text>
        <TextInput
          placeholder="Enter Daily Debit Amount"
          size="lg"
          radius="12px"
          classNames={{
            input: "!h-[22px] !text-[16px] !border-[#D0D5DD] !border-[1px] !placeholder:text-[#98A2B3] !font-normal",
          }}
        />
      </div>

      {/* Time Picker */}
      <div className="mb-6">
        <Text className="text-[16px]! font-normal! text-[#344054]! mb-1!">
          Debit Time
        </Text>
        <div className="flex items-center justify-between border border-[#D0D5DD] rounded-[12px] px-2 py-3.5">
          <div className="flex items-center gap-3">
            <IconClock stroke={1.5} color="#667085" />
          </div>
          
          <div className="flex items-center gap-2 w-[229px] h-[23px]">
            {/* Hour/Minute boxes */}
            <input
              type="text"
              maxLength={2}
              value={hour}
              onChange={(e) => setHour(e.target.value.replace(/\D/g, ""))}
              onBlur={() => {
                let parsed = parseInt(hour);
                if (isNaN(parsed) || hour === "") setHour("12");
                else if (parsed > 12) setHour("12");
                else if (parsed === 0) setHour("12");
                else setHour(parsed.toString().padStart(2, "0"));
              }}
              className="bg-[#F2F4F7]! px-1! py-1! rounded-[8px]! text-[#667085]! font-medium! w-[45px]! text-center! outline-none! focus:ring-1! focus:ring-[#44A1A0]!"
            />
            <span className="text-[#667085]! font-medium!">:</span>
            <input
              type="text"
              maxLength={2}
              value={minute}
              onChange={(e) => setMinute(e.target.value.replace(/\D/g, ""))}
              onBlur={() => {
                let parsed = parseInt(minute);
                if (isNaN(parsed) || minute === "") setMinute("00");
                else if (parsed > 59) setMinute("59");
                else setMinute(parsed.toString().padStart(2, "0"));
              }}
              className="bg-[#F2F4F7]! px-1! py-1! rounded-[8px]! text-[#667085]! font-medium! w-[45px]! text-center! outline-none! focus:ring-1! focus:ring-[#44A1A0]!"
            />

            {/* AM/PM Toggle */}
            <div className="flex bg-[#F9FAFB] rounded-[8px]  border border-[#EAECF0] ml-2">
              <UnstyledButton
                onClick={() => setPeriod("AM")}
                className={`px-3! py-1! rounded-l-[6px]! text-[14px]! font-medium! transition-all! ${
                  period === "AM" 
                  ? "bg-[#44A1A0]! text-white! shadow-sm!" 
                  : "text-[#667085]!"
                }`}
              >
                AM
              </UnstyledButton>
              <UnstyledButton
                onClick={() => setPeriod("PM")}
                className={`px-3! py-1! rounded-r-[6px]! text-[14px]! font-medium! transition-all! ${
                  period === "PM" 
                  ? "bg-[#44A1A0]! text-white! shadow-sm!" 
                  : "text-[#667085]!"
                }`}
              >
                PM
              </UnstyledButton>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <Button 
          component={Link}
          to="/JoinedSuccessful?type=Daily"
          className="bg-[#44A1A0]! hover:bg-[#3b8c8b]! text-white! rounded-[12px]! font-medium! text-[18px]! h-[52px]! flex-1"
        >
          Confirm
        </Button>
        <Button 
          variant="light"
          component={Link}
          to="/AutomatedSavings"
          className="bg-[#F2F4F7]! hover:bg-[#e4e7eb]! text-[#667085]! rounded-[12px]! font-medium! text-[18px]! h-[52px]! flex-1"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default Dailydebit;