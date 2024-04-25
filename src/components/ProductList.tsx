import { Link } from "react-router-dom";
import { Tclothes } from "../TypesAndInterfaces/types";

const ProductList = ({ title, status, price, id }: Tclothes) => {
  return (
    <div className="mb-4 h-auto">
      <h1>{title}</h1>
      <p className="mb-4">{status}</p>
      <Link
        to={`${id}`}
        className="p-4 bg-slate-800 text-white rounded-md hover:bg-red-600"
      >
        {price}
      </Link>
    </div>
  );
};

export default ProductList;
