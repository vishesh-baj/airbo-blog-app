import { AiOutlineLogout } from "react-icons/ai";
import { VscSymbolColor } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../routes/paths";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate(PATHS.login);
  };
  return (
    <div className="navbar bg-base-300  rounded-full shadow-2xl shadow-base-200">
      <div className="flex justify-between w-full px-4">
        <button className="btn btn-ghost text-xl ">
          <span className="text-primary">Airbow</span> Blogs
        </button>
        <div className="flex gap-4">
          <div className="dropdown dropdown-hover dropdown-left">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle btn-sm btn-outline btn-primary"
            >
              <VscSymbolColor />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <div className="tooltip tooltip-bottom" data-tip="logout">
            <button
              onClick={handleLogout}
              className="btn btn-circle btn-sm btn-outline btn-primary"
            >
              <AiOutlineLogout />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
