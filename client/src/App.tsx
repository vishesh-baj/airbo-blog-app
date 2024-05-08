import React from "react";
import { Routes, Route } from "react-router-dom";
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from "./constants";
import { Toaster } from "react-hot-toast";
import { PrivateRoutes, AuthRoutes } from "./routes/ProtectedRoutes";
import AppLayout from "./layouts/AppLayout";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { PATHS } from "./routes/paths";
import { LandingPage, PageNotFound } from "./pages";
const App: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const localTheme = localStorage.getItem("theme");

  return (
    <div data-theme={localTheme !== null ? localTheme : theme}>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Routes>
        <Route element={<AuthRoutes />}>
          {PUBLIC_ROUTES.map(({ key, path, Element }) => {
            return <Route key={key} path={path} element={<Element />} />;
          })}
        </Route>
        <Route element={<PrivateRoutes />}>
          {PRIVATE_ROUTES.map(({ key, path, Element }) => {
            return (
              <Route
                key={key}
                path={path}
                element={
                  <AppLayout>
                    <Element />
                  </AppLayout>
                }
              />
            );
          })}
        </Route>
        {/* landing page */}
        <Route path={PATHS.landingPage} element={<LandingPage />} />
        {/* page not found */}
        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
