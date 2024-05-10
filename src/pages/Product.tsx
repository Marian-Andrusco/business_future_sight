import { useNavigate, useParams } from "react-router-dom";
// import { fetchClothes, selectClothes } from "../redux/ClothesSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Tclothes } from "../TypesAndInterfaces/types";
// import { useAppDispatch } from "../Hooks/reduxHooks";
import { selectClothes, setClothes } from "../redux/ClothesSlice";
// import { useAxios } from "../Hooks/useAxios";

const Product = () => {
  const navigate = useNavigate();
  const params = useParams();
  const data = useSelector(selectClothes);
  const [cacat, setcacat] = useState<Tclothes>();
  // const dispatch = useAppDispatch();
  // const { filtered, loading } = useAxios(Number(params.id));

  useEffect(() => {
    // dispatch(setClothes());
    data.clothes.find((c) => {
      if (Number(c.id) === Number(params.id)) {
        setcacat(c);
      }
    });
  }, []);

  return (
    <div>
      {data.loading && <div>Loading...</div>}
      {cacat?.title}
      <br />
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default Product;
