import { createBrowserRouter, RouterProvider, Outlet, Route, createRoutesFromElements } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import PersonalInfo from "./Components/PersonalInfo";
import MyCardsSection from "./Components/MyCardsSection";
import CardUser from "./Pages/CardUser";
import Nav from "./Nav";

import Home from "./Components/home";
import SigninPage, { action as signinAction } from "./Components/signinPage";
import ForgotPassword from "./Components/forgotPassword";
import VerifyCode from "./Components/verifyCode";
import SetNewPassword from "./Components/setNewPassword";
import PasswordChanged from "./Components/passwordChanged";
import OnboardingScreen from "./Components/onboardingscreen";
import SignupScreen, { action as signupAction } from "./Components/signupScreen";
import AuthCallback, { loader as authCallbackLoader } from "./Components/auth.callback";

function AppLayout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

function AuthLayout() {
  return <Outlet />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      {/* Routes with Navigation */}
      <Route element={<AppLayout />}>
        <Route index element={<PersonalInfo />} />
        <Route path="MyCardsSection" element={<MyCardsSection />} />
        <Route path="carduser" element={<CardUser />} />
        {/* If 'home' is supposed to have nav after onboarding, place it here, otherwise it's in AuthLayout */}
      </Route>

      {/* Routes without Navigation */}
      <Route element={<AuthLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="signin" element={<SigninPage />} action={signinAction} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
        <Route path="verifyCode" element={<VerifyCode />} />
        <Route path="setNewPassword" element={<SetNewPassword />} />
        <Route path="passwordChanged" element={<PasswordChanged />} />
        <Route path="onboarding" element={<OnboardingScreen />} />
        <Route path="signup" element={<SignupScreen />} action={signupAction} />
        <Route path="auth/callback" element={<AuthCallback />} loader={authCallbackLoader} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <MantineProvider>
      <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
    </MantineProvider>
  );
}

export default App;
