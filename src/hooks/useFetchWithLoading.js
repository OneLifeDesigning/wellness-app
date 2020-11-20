import { useState, useEffect } from "react";
import { dateFormat } from "../utils/helpers";

const useFetchWithLoading = (fetchFn, params) => {
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    fetchFn(params)
      .then(async (data) => {
        data && data.map((item) => (item.date = dateFormat(item.date)));
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
