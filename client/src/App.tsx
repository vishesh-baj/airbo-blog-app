import React from "react";
import { Routes, Route } from "react-router-dom";
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from "./constants";
import { Toaster } from "react-hot-toast";
import { PrivateRoutes, AuthRoutes } from "./routes/ProtectedRoutes";
import AppLayout from "./layouts/AppLayout";

const App: React.FC = () => {
  return (
    <div>
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
      </Routes>
    </div>
  );
};

export default App;
