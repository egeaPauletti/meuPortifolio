import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <div>
        <nav className="h-screen">
          <ul className="flex flex-col text-[10px] text-end gap-5 top-0 right-10 absolute h-full justify-center nav-ul ">
            <li className="nav-itemList ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-itemList">
              <NavLink
                to="/sobre"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Sobre Mim
              </NavLink>
            </li>
            <li className="nav-itemList">
              <NavLink
                to="/hard"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Hard Skills
              </NavLink>
            </li>
            <li className="nav-itemList">
              <NavLink
                to="/projetos"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Projetos
              </NavLink>
            </li>
            <li className="nav-itemList">
              <NavLink
                to="/contato"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Contato
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
