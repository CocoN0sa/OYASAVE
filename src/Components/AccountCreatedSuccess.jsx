import { Box, Button, Text } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AccountCreatedSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/welcome");
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col justify-center items-center px-4 md:px-6 py-10 md:py-[103px] lg:px-8 font-aeonik min-h-screen bg-white">
      <Box className="w-full md:max-w-[400px] flex flex-col items-center">
        <Box className="w-[80px] h-[80px] rounded-full bg-[#44A1A0] flex items-center justify-center mb-8 shadow-sm">
          <IconCheck size={40} stroke={2.5} color="#ffffff" />
        </Box>
        
        <Text className="font-bold! text-[28px]! text-[#393F4A]! text-center! leading-tight! mb-2!">
          Your Account Was <br />Created Successfully
        </Text>

        <Text className="text-[16px]! font-normal! text-[#98A2B3]! text-center! mb-8!">
          Start your savings journey
        </Text>

        <Button
          onClick={() => navigate("/welcome")}
          fullWidth
          className="bg-[#44A1A0]! text-white! rounded-[12px]! font-normal! text-[16px]! transition-all! duration-300! ease-out! h-12!"
        >
          Continue
        </Button>
      </Box>
    </div>
  );
}
