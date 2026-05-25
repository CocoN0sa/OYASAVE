import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import PersonalInfo from "./Components/PersonalInfo";
import PersonalInfoPage from "./Pages/PersonalInfo";
import MyProfile from "./Components/MyProfile";
import MyCardsSection from "./Components/MyCardsSection";
import CardUser from "./Pages/CardUser";
import Notifications from "./Pages/Notifications";
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
import LoginOtpVerification from "./Components/LoginOtpVerification";
import SigninWelcome from "./Components/SigninWelcome";
import AutomatedSavings from "./Pages/AutomatedSavings";
import Dailydebit from "./Pages/Dailydebit";
import WeeklyDebit from "./Pages/WeeklyDebit";
import MonthlyDebit from "./Pages/MonthlyDebit";
import Experience from "./Pages/Experience";
import AccountCreatedSuccess from "./Components/AccountCreatedSuccess";
import SplashWelcome from "./Components/SplashWelcome";
import SecondSplashScreen from "./Components/secondsplashscreen";
import Groups from "./Pages/Groups";
import CreateGroup from "./Pages/CreateGroup";
import ExploreGroup from "./Pages/ExploreGroup";
import ActiveExperience from "./Pages/ActiveExperience";
import AlmostDone from "./Pages/AlmostDone";
import AllSet from "./Pages/AllSet";
import Automatic from "./Pages/Automatic";
import CardSaved from "./Pages/CardSaved";
import GroupDashboard from "./Pages/GroupDashboard";
import UploadDocument from "./Pages/UploadDocument";
import Goals from "./Pages/Goals";
import Savings from "./Pages/Savings";

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
      {/* Routes without Navigation (Auth / Onboarding) */}
      <Route element={<AuthLayout />}>
        <Route index element={<SplashWelcome />} />
        <Route path="onboarding" element={<OnboardingScreen />} />
        <Route path="SecondSplashScreen" element={<SecondSplashScreen />} />
        <Route path="signin" element={<SigninPage />} action={signinAction} />
        <Route path="loginVerify" element={<LoginOtpVerification />} />
        <Route path="accountCreated" element={<AccountCreatedSuccess />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
        <Route path="verifyCode" element={<VerifyCode />} />
        <Route path="setNewPassword" element={<SetNewPassword />} />
        <Route path="passwordChanged" element={<PasswordChanged />} />
        <Route path="signup" element={<SignupScreen />} action={signupAction} />
        <Route path="auth/callback" element={<AuthCallback />} loader={authCallbackLoader} />
        <Route path="welcome" element={<SigninWelcome />} />
        <Route path="signin-welcome" element={<SigninWelcome />} />
        <Route path="Experience" element={<Experience />} />
        <Route path="PersonalInfo" element={<PersonalInfo />} />
        <Route path="active-experience" element={<ActiveExperience />} />
        <Route path="CardSaved" element={<CardSaved />} />
        <Route path="experience" element={<Experience />} />
        <Route path="almostdone" element={<AlmostDone />} />
        <Route path="personal-info" element={<PersonalInfoPage />} />
        <Route path="upload-documents" element={<UploadDocument />} />
        <Route path="allset" element={<AllSet />} />
        <Route path="CreateGroup" element={<CreateGroup />} />
        <Route path="ExploreGroup" element={<ExploreGroup />} />
      </Route>

      {/* Routes with Navigation */}
      <Route element={<AppLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="Groups" element={<Groups />} />
        <Route path="MyProfile" element={<MyProfile />} />
        <Route path="Notifications" element={<Notifications />} />
        <Route path="MyCardsSection" element={<MyCardsSection />} />
        <Route path="carduser" element={<CardUser />} />
        <Route path="Dailydebit" element={<Dailydebit />} />
        <Route path="WeeklyDebit" element={<WeeklyDebit />} />
        <Route path="MonthlyDebit" element={<MonthlyDebit />} />
        <Route path="AutomatedSavings" element={<AutomatedSavings />} />
        <Route path="Automatic" element={<Automatic />} />
        <Route path="Goals" element={<Goals />} />
        <Route path="Savings" element={<Savings />} />
        <Route path="GroupDashboard" element={<GroupDashboard />} />
      </Route>
    </Route>,
  ),
);

function App() {
  return (
    <MantineProvider>
      <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
    </MantineProvider>
  );
}

export default App;
