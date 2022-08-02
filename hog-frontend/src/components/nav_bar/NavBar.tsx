import React from 'react';
import {useAppDispatch, useAppSelector} from "../../app/Hooks";
import {
  selectCurrentUser,
  selectIsAdmin,
  selectLoggedIn,
  setCurrentUser
} from "../../features/current_user/CurrentUserSlice";
import {User} from "../../entities/User";
import {useNavigate} from "react-router-dom";
import {BiLogOut} from "react-icons/bi";
import {FaUser} from "react-icons/fa";
import styles from "./NavBar.module.css";
import api from "../../services/Api";
import {getIconFromName} from "../../util/getIconFromName";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAdmin: boolean = useAppSelector(selectIsAdmin);
  const isLoggedIn: boolean = useAppSelector(selectLoggedIn);
  const user: User|undefined = useAppSelector(selectCurrentUser);

  const logout = () => {
    api.get("auth/logout")
      .then((response: any) => {
        navigate("/");
        localStorage.removeItem("currentUser");
        sessionStorage.removeItem("search_history");
        dispatch(setCurrentUser(undefined));
      })
      .catch((e: Error) => {
        console.log(e);
      })
  }

  return (
    <nav className={"navbar fixed-top navbar-expand-lg navbar-light bg-light"}>
      <div className={"container-fluid"}>
        <a className={"navbar-brand"} href={"/"}>
          <img src={"/hog.png"} alt={""} width={"24"} height={"28"} className={"d-inline-block align-text-top"}/>
          The House of Graphs
        </a>
        <button className={"navbar-toggler"} type={"button"} data-bs-toggle={"collapse"} data-bs-target={"#navbar"} aria-controls={"navbar"}
                aria-expanded={"false"} aria-label={"Toggle navigation"}>
          <span className={"navbar-toggler-icon"}/>
        </button>
        <div className={"collapse navbar-collapse"} id={"navbar"}>
          <ul className={"navbar-nav"}>
            <li><a className={"nav-link"} href={"/search"}>Search</a></li>
            {sessionStorage.getItem("search_history") && <li><a className={"nav-link"} href={"/search_history"}>Search History</a></li>}
            { isLoggedIn && user && <li><a className={"nav-link"} href={"/add_graph"}>Add Graph</a></li> }
            {isAdmin && <li><a className={"nav-link"} href={"/users"}>Users</a></li>}
            <li><a className="nav-link" href={"/meta-directory"}>Meta-directory</a></li>
            <li><a className={"nav-link"} href={"/publications"}>Publications</a></li>
            <li><a className={"nav-link"} href={"/help"}>Help</a></li>
          </ul>
          <ul className={"navbar-nav ms-auto"}>
            {!isLoggedIn && <li><a className={"nav-link"} href={"/login"}>Log in</a></li>}
            {!isLoggedIn && <li><a className={"nav-link"} href={"/register"}>Register</a></li>}
            { isLoggedIn && user &&
              <li className={"nav-item dropdown"}>
              <a className={"nav-link dropdown-toggle"} href={"#"} id={"navbarDropdown"} role={"button"}
                 data-bs-toggle={"dropdown"} aria-expanded={"false"}>
                <img src={getIconFromName(user.fullname)} alt={"Profile"} width={30} style={{marginRight: "10px"}}/>
                {user?.fullname}
              </a>
              <ul className={"dropdown-menu"} aria-labelledby={"navbarDropdown"}>
                <li><a className={"dropdown-item"} href={"/profile"}>
                    <span className={`${styles.dropdownItem}`}>
                        Profile
                        <FaUser style={{marginLeft: "auto"}}/>
                    </span>
                    </a></li>
                <li><button className={"dropdown-item"} onClick={logout}>
                    <span className={`${styles.dropdownItem}`}>
                        Log out
                        <BiLogOut style={{marginLeft: "auto"}}/>
                    </span>
                </button></li>
              </ul>
            </li>}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar