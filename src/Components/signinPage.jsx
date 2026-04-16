import { Anchor, Box, Button, Checkbox, Divider, Input, PasswordInput, Text } from "@mantine/core";
import { useState } from "react";
import { Link, Form, useActionData, useNavigation, redirect } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";



// Auth removed (no Supabase)
// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
  return { error: "Demo mode - auth disabled" };
}




export default function SigninPage() {
  const [visible, { toggle }] = useDisclosure(false);
  const [password, setPassword] = useState("");
  
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [googleError, setGoogleError] = useState(null);

  const handleGoogleSignIn = () => {
      alert("Google OAuth disabled in demo mode");
    };
      const navigate = useNavigate();


  return (
    <div className="flex  flex-col justify-center px-6 py-[103px] md:items-center lg:px-8 font-aeonik">
      <Box className="w-full max-w-[350px] md:max-w-[400px]">
        <Box className="flex flex-col items-start mb-6">
          <Text className="font-bold! pb-1! text-[28px]! text-[#393F4A]!">Welcome Back</Text>
          <Text className="text-[16px]! font-normal! text-[#98A2B3]!">Sign in to your account.</Text>      
        </Box>
        
        <Form method="post" id="signin-form" className="w-full pb-6">
          <label htmlFor="email" className="block mb-1 text-[16px] font-normal text-[#393F4A]!">Email</label>
          <Input id="email" name="email" radius="md" placeholder="Enter Email Address" mb={16} w="100%" size="md" required />

          <label htmlFor="password" className="block mb-1 text-[16px] font-normal text-[#393F4A]!">Password</label>
          <PasswordInput
            name="password"
            value={password}
            placeholder="Enter Your Password"
            onChange={(event) => {
              setPassword(event.currentTarget.value);
            }}
            visible={visible}
            required
            onVisibilityChange={toggle}
            error={actionData?.error || googleError}
            size="md"
          />
        </Form>
        <Box className="flex items-center justify-between">
      <Checkbox
      defaultChecked
      label="Remember me"
      className="text-[#44A1A0]!"
      color="#44A1A0"
      size="xs"
      />

      <Anchor component={Link} to="/forgotPassword" c="dimmed" size="xs" className="text-[#44A1A0]!">
        Forgot Password?
      </Anchor>
        </Box>
        <Button type="submit" form="signin-form" fullWidth mt="xl" loading={isSubmitting} onClick={() => navigate("/PersonalInfo")} className="bg-[#44A1A0]! text-white! rounded-[12px]! font-normal! text-[16px]! transition-all! duration-300! ease-out! h-12!">Sign In</Button>

        <Divider my="xs" label="Or" labelPosition="center" className="pt-6!" />

        <Button fullWidth onClick={handleGoogleSignIn} className="bg-white! text-[#98A2B3]! border! border-gray-200! rounded-[12px]! font-normal! text-[16px]! transition-all! duration-300! ease-out! mt-4! h-12!">
          <img
        src="/Google.svg"
        alt="Google Icon"
        className="mr-3 w-5 h-5 sm:w-4 sm:h-4"
      />Sign up with Google</Button>

      <Box className="flex items-center justify-center w-full text-center mt-4!">
        <Text className="text-base font-normal! text-[#98A2B3]! text-[16px]!">Don't have an account?</Text>
            <Anchor component={Link} to="/signup" c="d  immed" size="sm" className="text-[#44A1A0]! ml-1!">
                Sign Up
            </Anchor>
        </Box>
      </Box>
    </div>
  );
}
