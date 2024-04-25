import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex justify-around">
      <Link to="/">Home</Link>
      <Link to="/main">Main</Link>
      <Link to="/hooks">Hooks</Link>
      <Link to="/products">Products</Link>
    </div>
  );
};

export default Navbar;
