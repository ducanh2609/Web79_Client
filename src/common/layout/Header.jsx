import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  function changeMode(mode) {
    navigate(`/${mode}`);
  }
  return (
    <div className="header">
      <div></div>
      <div className="button-header">
        <button className="register-btn" onClick={() => changeMode("register")}>
          Register
        </button>
        <button className="login-btn" onClick={() => changeMode("login")}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Header;
