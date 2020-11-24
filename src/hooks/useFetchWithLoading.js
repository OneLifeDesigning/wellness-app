import { useState, useEffect } from "react";
import { dateFormat } from "../helpers/utils";

const useFetchWithLoading = (fetchFn, params) => {
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    fetchFn(params)
      .then(async (data) => {
        data?.map(async (item) => {
          item.date = await dateFormat(item?.date);
          return item;
        });
        setState({
          loading: false,
          data,
          error: null,
        });
      })
      .catch((error) => {
        setState({
          loading: false,
          data: null,
          error,
        });
      });
    return () => {};
  }, [fetchFn, params]);
  return {
    loading: state.loading,
    data: state.data,
    error: state.error,
  };
};

export default useFetchWithLoading;
