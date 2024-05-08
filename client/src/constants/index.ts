import { nanoid } from "nanoid";
import { PATHS } from "../routes/paths";
import { LandingPage, LoginPage, RegisterPage } from "../pages";

export const ROUTES = [
  {
    key: nanoid(),
    path: PATHS.landingPage,
    Element: LandingPage,
  },
  {
    key: nanoid(),
    path: PATHS.login,
    Element: LoginPage,
  },
  {
    key: nanoid(),
    path: PATHS.register,
    Element: RegisterPage,
  },
];
