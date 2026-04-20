import { Anchor, Box, Button, Checkbox, Divider, Input, PasswordInput, Text } from "@mantine/core";
import { useState } from "react";
import { Form, Link, useActionData, useNavigation } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { redirect } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return { error: "Please fill in all fields." };
  }

  // Demo mode — navigate to PersonalInfo
  return redirect("/");
}

export default function SigninPage() {
  const [visible, { toggle }] = useDisclosure(false);
  const [password, setPassword] = useState("");
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const handleGoogleSignIn = () => {
    alert("Google OAuth disabled in demo mode");
  };

  return (
    <div className="flex flex-col justify-center px-6 py-[103px] md:items-center lg:px-8 font-aeonik">
      <Box className="w-full max-w-[350px] md:max-w-[400px]">
        <Box className="flex flex-col items-start mb-6">
          <Text className="font-bold! pb-1! text-[28px]! text-[#393F4A]!">Welcome Back</Text>
          <Text className="text-[16px]! font-normal! text-[#98A2B3]!">Sign in to your account</Text>
        </Box>

        {actionData?.error && (
          <Text className="text-red-500 text-sm mb-4">{actionData.error}</Text>
        )}

        <Form method="post" id="signin-form" className="w-full pb-6">
          <label htmlFor="email" className="block mb-1 text-[16px] font-normal text-[#393F4A]!">Email</label>
          <Input id="email" name="email" radius="md" placeholder="Enter Email Address" mb={16} w="100%" size="md" required />

          <label htmlFor="password" className="block mb-1 text-[16px] font-normal text-[#393F4A]!">Password</label>
          <PasswordInput
            id="password"
            name="password"
            value={password}
            placeholder="Enter Your Password"
            onChange={(event) => setPassword(event.currentTarget.value)}
            visible={visible}
            required
            onVisibilityChange={toggle}
            size="md"
            radius="md"
          />

          <Box className="flex items-center justify-between pt-4 pb-2">
            <Checkbox
              defaultChecked
              label="Remember me"
              color="#44A1A0"
              size="sm"
              classNames={{ label: "text-[#98A2B3]! font-normal! text-[14px]!" }}
            />
            <Anchor component={Link} to="/forgotPassword" className="text-[#44A1A0]! font-normal! text-[14px]!">
              Forgot password
            </Anchor>
          </Box>

          <Button
            type="submit"
            fullWidth
            mt="lg"
            loading={isSubmitting}
            className="bg-[#44A1A0]! text-white! rounded-[12px]! font-normal! text-[16px]! transition-all! duration-300! ease-out! h-12!"
          >
            Sign in
          </Button>
        </Form>

        <Divider my="xs" label={<span className="text-[#98A2B3] font-normal px-2">or</span>} labelPosition="center" />

        <Button
          type="button"
          fullWidth
          onClick={handleGoogleSignIn}
          className="bg-white! text-[#98A2B3]! border! border-gray-200! rounded-[12px]! font-normal! text-[16px]! transition-all! duration-300! ease-out! mt-4! h-12!"
        >
          <img src="/Google.svg" alt="Google Icon" className="mr-3 w-5 h-5 sm:w-4 sm:h-4" />
          Sign in with Google
        </Button>

        <Box className="flex items-center justify-center w-full text-center mt-4">
          <Text className="text-base font-normal! text-[#98A2B3]! text-[16px]!">Don't have an Account ?</Text>
          <Anchor component={Link} to="/signup" className="text-[#44A1A0]! ml-1! font-normal! text-[16px]!">
            Sign Up
          </Anchor>
        </Box>
      </Box>
    </div>
  );
}
