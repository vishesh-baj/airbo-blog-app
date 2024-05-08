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

export const THEMES = [
  // {
  //   key: nanoid(),
  //   name: "light",
  // },
  // {
  //   key: nanoid(),
  //   name: "dark",
  // },
  // {
  //   key: nanoid(),
  //   name: "cupcake",
  // },
  // {
  //   key: nanoid(),
  //   name: "bumblebee",
  // },
  // {
  //   key: nanoid(),
  //   name: "emerald",
  // },
  {
    key: nanoid(),
    name: "corporate",
  },
  {
    key: nanoid(),
    name: "synthwave",
  },
  {
    key: nanoid(),
    name: "retro",
  },
  {
    key: nanoid(),
    name: "cyberpunk",
  },
  {
    key: nanoid(),
    name: "valentine",
  },
  {
    key: nanoid(),
    name: "halloween",
  },
  {
    key: nanoid(),
    name: "garden",
  },
  {
    key: nanoid(),
    name: "forest",
  },
  {
    key: nanoid(),
    name: "aqua",
  },
  // {
  //   key: nanoid(),
  //   name: "lofi",
  // },
  // {
  //   key: nanoid(),
  //   name: "pastel",
  // },
  // {
  //   key: nanoid(),
  //   name: "fantasy",
  // },
  {
    key: nanoid(),
    name: "wireframe",
  },
  {
    key: nanoid(),
    name: "black",
  },
  // {
  //   key: nanoid(),
  //   name: "luxury",
  // },
  // {
  //   key: nanoid(),
  //   name: "dracula",
  // },
  // {
  //   key: nanoid(),
  //   name: "cmyk",
  // },
  // {
  //   key: nanoid(),
  //   name: "autumn",
  // },
  // {
  //   key: nanoid(),
  //   name: "business",
  // },
  // {
  //   key: nanoid(),
  //   name: "acid",
  // },
  // {
  //   key: nanoid(),
  //   name: "lemonade",
  // },
  // {
  //   key: nanoid(),
  //   name: "night",
  // },
  // {
  //   key: nanoid(),
  //   name: "coffee",
  // },
  // {
  //   key: nanoid(),
  //   name: "winter",
  // },
  // {
  //   key: nanoid(),
  //   name: "dim",
  // },
  // {
  //   key: nanoid(),
  //   name: "nord",
  // },
  // {
  //   key: nanoid(),
  //   name: "sunset",
  // },
];
