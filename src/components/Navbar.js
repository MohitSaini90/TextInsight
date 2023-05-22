import { Link } from "react-router-dom";

export default function Navbar(props) {
  const handle_onClick1 = () => {
    var home = document.querySelector(".home");
    home.classList.add("active");
    var features = document.querySelector("#features");
    features.classList.remove("active");
  };
  const handle_onClick2 = () => {
    var features = document.querySelector("#features");
    features.classList.add("active");
    var home = document.querySelector("#home");
    home.classList.remove("active");
  };
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary "
      id="navBar"
      data-bs-theme={props.darkMode}
    >
      <div className="container-fluid">
        <Link className="navbar-brand home" to="/" onclick={handle_onClick1} >
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item home">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
                onClick={handle_onClick1}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                onClick={handle_onClick2}
                id="features"
              >
                Features
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`form-check form-switch text-${
            props.darkMode === "light" ? "dark" : "light"
          }`}
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleDarkMode}
          ></input>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {`Enable ${props.darkMode === "light" ? "Dark" : "Light"} Mode`}
          </label>
        </div>
      </div>
    </nav>
  );
}
