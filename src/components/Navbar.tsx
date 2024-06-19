import { Link } from "react-router-dom";
import { FaGhost, FaBars, FaWindowClose, FaDAndD } from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [collapse, setCollapse] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 780) {
      setShowNavBar(false);
      setCollapse(false);
    } else {
      setCollapse(true);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full flex justify-around shadow-1  font-medium mb-8 h-[56px] ">
      <div className="container md:px-6 flex justify-between items-center">
        {collapse ? (
          ""
        ) : (
          <div className="left w-2/5 flex justify-between ">
            <Link className="nav_btn" to="/main">
              Features
            </Link>
            <Link className="nav_btn" to="/main">
              G&S
            </Link>
            <Link className="nav_btn" to="/main">
              Law
            </Link>
          </div>
        )}
        <div className="w-1/5 flex justify-center">
          <Link className="nav_btn" to="/">
            <FaDAndD style={{ fontSize: 40 }} />
          </Link>
        </div>

        {collapse ? (
          ""
        ) : (
          <div className="right w-2/5 flex justify-between">
            <Link className="nav_btn" to="/main">
              Contact
            </Link>
            <Link className="nav_btn" to="/main">
              Subscriptions
            </Link>
            <Link className="nav_btn nav_btn_log" to="/main">
              Log In
            </Link>
          </div>
        )}

        {collapse ? (
          <div className="w-1/5 flex justify-center">
            <button
              className="nav_btn"
              onClick={() => setShowNavBar((prev) => !prev)}
            >
              {showNavBar ? (
                <FaWindowClose style={{ fontSize: 40 }} />
              ) : (
                <FaBars style={{ fontSize: 40 }} />
              )}
            </button>
          </div>
        ) : (
          ""
        )}

        {showNavBar ? (
          <div className="w-full h-full flex justify-around absolute left-0 top-14 right-0 bg-neutral-500/75 z-10 p-4">
            <div className="container h-fit bg-[#1e2328] shadow-1 p-4 rounded-3xl">
              <Link
                onClick={() => setShowNavBar(false)}
                className="nav_btn block mb-2"
                to="/main"
              >
                Features
              </Link>
              <Link
                onClick={() => setShowNavBar(false)}
                className="nav_btn block mb-2"
                to="/main"
              >
                G&S
              </Link>
              <Link
                onClick={() => setShowNavBar(false)}
                className="nav_btn block mb-2"
                to="/main"
              >
                Law
              </Link>
              <Link
                onClick={() => setShowNavBar(false)}
                className="nav_btn block mb-2"
                to="/main"
              >
                Contact
              </Link>
              <Link
                onClick={() => setShowNavBar(false)}
                className="nav_btn block mb-2"
                to="/main"
              >
                Subscriptions
              </Link>
              <Link
                onClick={() => setShowNavBar(false)}
                className="nav_btn block mb-2"
                to="/main"
              >
                Log In
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
