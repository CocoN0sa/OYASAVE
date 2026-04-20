import { Box, Button, Text } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { Link, useSearchParams } from "react-router-dom";

export default function JoinedSuccessful() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") || "Daily";
  return (
    <div className="flex flex-col justify-center items-center px-4 md:px-6 py-10 md:py-[103px] lg:px-8 font-aeonik min-h-[calc(100vh-80px)]">
      <Box className="w-full md:max-w-[400px] flex flex-col items-center">

          <Box className="w-[50px] h-[50px] rounded-full bg-[#44A1A0]! flex items-center justify-center mb-8">
            <IconCheck size={28} stroke={1.5} color="#ffffff" />
          </Box>
        
        <Text className="font-bold! text-[28px]! text-[#393F4A]! text-center! leading-tight! mb-2!">
          {type} Debit Set <br />Successfully 
        </Text>

        <Text className="text-[16px]! font-normal! text-[#98A2B3]! text-center! mb-8!">
          Automated savings is set to {type.toLowerCase()}
        </Text>

        <Button
          component={Link}
          to="/MotivationAndReminders"
          fullWidth
          className="bg-[#44A1A0]! text-white! rounded-[12px]! font-normal! text-[16px]! transition-all! duration-300! ease-out! h-12!"
        >
          Continue
        </Button>
      </Box>
    </div>
  );
}
