import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Routes>
        {ROUTES.map(({ key, path, Element }) => {
          return <Route key={key} path={path} element={<Element />} />;
        })}
      </Routes>
    </div>
  );
};

export default App;
