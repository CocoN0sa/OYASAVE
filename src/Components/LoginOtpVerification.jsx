import { Box, Button, Group, PinInput, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginOtpVerification() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(45);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleVerify = () => {
    if (code.length !== 4) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/accountCreated");
    }, 800);
  };

  return (
    <div className="flex flex-col justify-center min-h-screen px-4 md:px-6 py-10 md:py-[103px] font-aeonik bg-white">
      <Box className="w-full md:max-w-[400px] mx-auto flex flex-col items-center">
        <h1 className="text-[28px] font-bold text-[#393F4A] mb-2 text-center">OTP Verification</h1>
        <Text className="text-[16px] font-normal text-[#98A2B3] text-center mb-8">
          Enter verification code sent to your email
        </Text>

        <Group justify="center" className="w-full mb-8" gap="lg">
          <PinInput
            size="xl"
            length={4}
            value={code}
            onChange={(value) => setCode(value)}
            radius="md"
            placeholder="0"
            styles={{
              input: { fontWeight: 'bold', fontSize: '24px' }
            }}
            classNames={{
              input: "text-[#393F4A] focus:border-[#44A1A0]"
            }}
          />
        </Group>

        <Button
          fullWidth
          size="md"
          className="bg-[#44A1A0]! text-white! hover:bg-[#3b8c8b]! rounded-[12px]! font-normal! text-[16px]! transition-all! duration-300! ease-out! h-12! mb-6!"
          onClick={handleVerify}
          loading={loading}
        >
          Verify
        </Button>

        <Text className="text-[14px] font-normal text-[#98A2B3] text-center">
          {timeLeft > 0 ? (
            <>Resend Code in <span className="text-[#44A1A0]">{formatTime(timeLeft)}</span></>
          ) : (
            <span className="cursor-pointer text-[#44A1A0] hover:underline" onClick={() => setTimeLeft(45)}>
              Resend Code
            </span>
          )}
        </Text>
      </Box>
    </div>
  );
}
