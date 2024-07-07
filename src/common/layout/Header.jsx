import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userInfoSlice } from "../../redux/reducers/userInfoSlice";
import { modePageSlice } from "../../redux/reducers/pageSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log("user", user);

  function logout() {
    dispatch(userInfoSlice.actions.logout());
    navigate("/");
  }
  function changePage(mode) {
    dispatch(modePageSlice.actions.changePage(mode));
  }
  function changeMode(mode) {
    navigate(`/${mode}`);
  }
  return (
    <div className="header">
      {user.token ? (
        <div className="button-header">
          <button className="chat-btn" onClick={() => changePage("chat")}>
            Chat
          </button>
          <button className="todo-btn" onClick={() => changePage("todo")}>
            Todo
          </button>
          <button className="logout-btn" onClick={() => logout()}>
            Logout
          </button>
        </div>
      ) : (
        <div className="button-header">
          <button
            className="register-btn"
            onClick={() => changeMode("register")}
          >
            Register
          </button>
          <button className="login-btn" onClick={() => changeMode("login")}>
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
