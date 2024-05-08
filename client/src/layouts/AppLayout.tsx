import { Navbar } from "../components";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-screen min-h-screen md:max-w-[80vw] mx-4 md:mx-auto">
      <div className="pt-4">
        <Navbar />
      </div>
      {children}
    </div>
  );
};

export default AppLayout;
