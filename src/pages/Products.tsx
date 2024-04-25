import ProductList from "../components/ProductList";
import { useAxios } from "../Hooks/useAxios";

const Products = () => {
  const { data, loading } = useAxios();

  return (
    <div>
      {data?.map((c) => {
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
