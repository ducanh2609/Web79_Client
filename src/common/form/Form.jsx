import { useState } from "react";
import "./form.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/reducers/userInfoSlice";

const yup = require("yup");

function Form({ mode }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [errMess, setErrMess] = useState("");
  const notify = (mess, obj) => toast(mess, obj);
  async function handleClick(e) {
    e.preventDefault();
    const { username, email, password, confirm } = e.target.form;
    const data = {
      username: username.value,
      password: password.value,
      mode,
    };
    if (mode !== "login") {
      data.email = email.value;
      data.confirm = confirm.value;
    }
    const yupObject = yup.object().shape({
      username: yup.string().test((value) => value && value.length >= 6),
      password: yup.string().test((value) => value && value.length >= 8),
      email: mode !== "login" && yup.string().email(),
      confirm:
        mode !== "login" &&
        yup.string().test((value) => value === password.value),
    });
    // const url = mode === "login" ? "login" : "register";
    try {
      const dataValidated = await yupObject.validate(data);
      console.log(dataValidated);
      dispatch(login(dataValidated));
      // const message = await res.json();
      if (user.message) {
        alert(`${user.message}`);
        return;
      }
      notify("Success!");
      setErrMess("");
      if (mode !== "login") {
        username.value = "";
        password.value = "";
        changeMode("login");
      } else {
        // dispatch(userInfoSlice.actions.login(message));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      notify("Error!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setErrMess("Account information is not correct");
    }
  }
  function changeMode(mode) {
    navigate(`/${mode}`);
  }
  return (
    mode && (
      <div className="register">
        <form>
          <div className="form-input">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" />
            {mode !== "login" && (
              <>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" />
              </>
            )}
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
            {mode !== "login" && (
              <>
                <label htmlFor="confirm">Confirm Password</label>
                <input type="password" name="confirm" />
              </>
            )}
          </div>
          <div>
            <span className="error">{errMess}</span>
          </div>
          <div className="form-button">
            <button className="confirm" onClick={handleClick}>
              {mode === "login" ? "Login" : "Register"}
            </button>
            <button className="cancel" onClick={() => changeMode("")}>
              Cancel
            </button>
          </div>
          {mode === "login" ? (
            <p onClick={() => changeMode("register")}>Register now</p>
          ) : (
            <p onClick={() => changeMode("login")}>Login</p>
          )}
        </form>
        <ToastContainer />
      </div>
    )
  );
}

export default Form;
