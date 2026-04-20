import { TextInput, Button, Text, Select } from "@mantine/core";
import { IconCalendar } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const WeeklyDebit = () => {
  const [dayOfWeek, setDayOfWeek] = useState("");
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
        <h1 className="text-[28px] font-bold text-[#393F4A]">Set Weekly Debit</h1>
      </div>

      {/* Amount Input */}
      <div className="mb-6">
        <Text className="text-[16px]! font-normal! text-[#344054]! mb-1!">
          Weekly Debit Amount
        </Text>
        <TextInput
          placeholder="Enter Weekly Debit Amount"
          size="lg"
          radius="12px"
          classNames={{
            input: "!h-[50px] !text-[16px] !border-[#D0D5DD] !border-[1px] !placeholder:text-[#98A2B3] !font-normal",
          }}
        />
      </div>

      {/* Day of The Week Mock */}
      <div className="mb-6">
        <Text className="text-[16px]! font-normal! text-[#344054]! mb-1!">
          Day of The Week
        </Text>
        <Select
          placeholder="Select Day of The Week"
          size="lg"
          radius="12px"
          value={dayOfWeek}
          onChange={setDayOfWeek}
          data={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']}
          rightSection={<IconCalendar stroke={1.5} color="#98A2B3" />}
          classNames={{
            input: "!h-[50px] !text-[16px] !border-[#D0D5DD] !border-[1px] !placeholder:text-[#98A2B3] !font-normal",
          }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <Button 
          component={Link}
          to="/JoinedSuccessful?type=Weekly"
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

export default WeeklyDebit;
