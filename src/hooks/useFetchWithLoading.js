import { useState, useEffect } from "react";
import moment from "moment";
const useFetchWithLoading = (fetchFn, params) => {
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    fetchFn(params)
      .then(async (data) => {
        await data?.map((item) => (item.date = moment(item.date).format("L")));
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
