import { useNavigate, useParams } from "react-router-dom";
import { useAxios } from "../Hooks/useAxios";

const Product = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { filtered, loading } = useAxios(Number(params.id));

  return (
    <div>
      {loading ? "loading..." : filtered?.title}
      <br />
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default Product;
