import { nanoid } from "nanoid";
import { PATHS } from "../routes/paths";
import { LandingPage, LoginPage, PostsList, RegisterPage } from "../pages";

export const PUBLIC_ROUTES = [
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

export const PRIVATE_ROUTES = [
  {
    key: nanoid(),
    path: PATHS.postsList,
    Element: PostsList,
  },
];
