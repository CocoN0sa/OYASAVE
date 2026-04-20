import { Switch, Button, Text } from "@mantine/core";
import { Link } from "react-router-dom";

export default function MotivationAndReminders() {
  return (
    <div className="flex flex-col px-6 py-10 max-w-[400px] mx-auto font-aeonik">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-[28px] leading-tight font-bold text-[#393F4A] mb-2">Motivation & Reminders</h1>
        <Text className="text-[15px] text-[#98A2B3]">
          Enable Notifications And Encouragement Badges
        </Text>
      </div>

      {/* Switches Area */}
      <div className="flex flex-col gap-6 mb-10">
        <div className="flex items-center justify-between border-b-2 border-dashed border-transparent pb-4">
          <Text className="text-[16px] font-bold text-[#393F4A]">Enable Notifications</Text>
          <Switch 
            size="md" 
            color="#44A1A0"
            classNames={{
              track: "cursor-pointer",
            }}
          />
        </div>

        <div className="flex items-center justify-between">
          <Text className="text-[16px] font-bold text-[#393F4A]">Enable Encouragement Badges</Text>
          <Switch 
            size="md" 
            color="#44A1A0"
            classNames={{
              track: "cursor-pointer",
            }}
          />
        </div>
      </div>

      <Button
        component={Link}
        to="/home"
        fullWidth
        className="bg-[#44A1A0]! hover:bg-[#3b8c8b]! text-white! rounded-[12px]! font-medium! text-[18px]! h-[52px]! mt-4"
      >
        Continue
      </Button>
    </div>
  );
}
