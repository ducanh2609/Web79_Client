import { Outlet } from "react-router-dom";
import Header from "../common/layout/Header";
// import Footer from "../common/layout/Footer";
import "./layout.scss";

function LayoutDefault() {
  return (
    <div className="layout">
      <div>
        <Header />
      </div>
      <div className="body-content">
        <div className="content">
          <Outlet />
        </div>
        {/* <div className="footer">
          <Footer />
        </div> */}
      </div>
    </div>
  );
}

export default LayoutDefault;
