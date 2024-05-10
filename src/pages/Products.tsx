import { useDispatch, useSelector } from "react-redux";
import ProductList from "../components/ProductList";
import { useAxios } from "../Hooks/useAxios";
// import { fetchClothes, selectClothes } from "../redux/ClothesSlice";
import { useEffect } from "react";
import { selectClothes, setClothes } from "../redux/ClothesSlice";
// import { useAppDispatch, useAppSelector } from "../Hooks/reduxHooks";

// const Products = () => {
//   const { data } = useAxios();
//   // const clothesList = useSelector(selectClothes);

//   return (
//     <div>
//       {/* {JSON.stringify(clothesList)} */}
//       {data?.map((c) => {
//         return (
//           <ProductList
//             price={c.price}
//             title={c.title}
//             status={c.status}
//             key={c.id}
//             id={c.id}
//             category={c.category}
//           />
//         );
//       })}
//     </div>
//   );
// };

const Products = () => {
  // const data = useAppSelector(selectClothes);
  // const dispatch = useAppDispatch();
  const redData = useSelector(selectClothes);
  const dispatch = useDispatch();
  const { data } = useAxios();

  useEffect(() => {
    if (data) {
      dispatch(setClothes(data));
    }
  }, []);

  return (
    <div>
      {redData.loading && <div>Loading...</div>}
      {redData.clothes.map((c) => {
        return (
          <ProductList
            price={c.price}
            title={c.title}
            status={c.status}
            key={c.id}
            id={c.id}
            category={c.category}
          />
        );
      })}
    </div>
  );
};

export default Products;
