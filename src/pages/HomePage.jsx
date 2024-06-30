import { useState } from "react";
import Form from "../components/Form";
import "./homepage.scss";
import Upload from "../components/Upload";

function HomePage() {
  const [mode, setMode] = useState("");
  function changeMode(mode) {
    setMode(mode);
  }
  return (
    <div className="homepage">
      <div className="header">
        <div></div>
        <div className="button-header">
          <button className="login-btn" onClick={() => changeMode("upload")}>
            Upload
          </button>
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
      </div>
      <div className="content">
        {mode === "upload" ? (
          <Upload />
        ) : (
          <Form mode={mode} changeMode={changeMode} />
        )}
      </div>
    </div>
  );
}

export default HomePage;
