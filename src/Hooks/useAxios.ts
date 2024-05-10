import axios from "axios";
import { Tclothes } from "../TypesAndInterfaces/types";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setClothes } from "../redux/ClothesSlice";

export const useAxios = (filterBy?: number) => {
  const [data, setData] = useState<Tclothes[]>();
  const [filtered, setFiltered] = useState<Tclothes>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const url = "http://localhost:3500/clothes";

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);

    axios
      .get(url)
      .then((res) => {
        if (filterBy) {
          res.data.find((p: Tclothes): void => {
            Number(p.id) === filterBy && setFiltered(p);
          });
        } else {
          setData(res.data);
          dispatch(setClothes(res.data));
        }
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, loading, error, filtered };
};
