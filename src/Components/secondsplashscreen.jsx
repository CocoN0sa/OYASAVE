import { Anchor, Box, Button, Text } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";

export default function SecondSplashScreen() {
  const navigate = useNavigate();

  return (
    <Box className="min-h-screen w-full bg-[#0d6b68] relative overflow-hidden">
      
      {/* Centered Logo */}
      <Box className="absolute inset-0 flex justify-center items-center px-5">
        <Text className="!text-white !text-[47px] sm:!text-[47px] md:!text-[47px] !font-aeonik-t !text-center !font-bold leading-none">
          OyaSave
        </Text>
      </Box>

      {/* Bottom Button */}
      <Box className="absolute bottom-8 left-0 w-full px-5 flex justify-center">
        <Box className="w-full max-w-[420px]">
          <Button
            radius="xl"
            onClick={() => navigate("/signin")}
            className="
              !bg-[#44A1A0]
              hover:!bg-[#3b8c8b]
              !w-full
              !text-white
              !rounded-[14px]
              !font-normal
              !text-[16px]
              sm:!text-[17px]
              !transition-all
              !duration-300
              !ease-out
              !h-[54px]
              hover:!scale-[1.02]
              active:!scale-[0.98]
            "
          >
            Sign in
          </Button>
         <Box className="flex items-center justify-center w-full text-center mt-4">
          <Text className="text-base font-normal! text-[#98A2B3]! text-[16px]!">Don't have an Account ?</Text>
          <Anchor component={Link} to="/onboarding" className="text-[#44A1A0]! ml-1! font-normal! text-[16px]!">
            Sign Up
          </Anchor>
        </Box>
        </Box>
      </Box>
    </Box>
  );
}