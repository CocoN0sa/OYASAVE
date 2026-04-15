import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("signin", "routes/signinPage.jsx"),
  route("forgotPassword", "routes/forgotPassword.jsx"),
  route("verifyCode", "routes/verifyCode.jsx"),
  route("setNewPassword", "routes/setNewPassword.jsx"),
  route("passwordChanged", "routes/passwordChanged.jsx"),
  route("onboarding", "routes/onboardingscreen.jsx"),
  route("signup", "routes/signupScreen.jsx"),
] satisfies RouteConfig;
