import React, { useEffect } from "react";
import EditableTable from "./components/EditableTable";
import { getAll } from "./apiclient";

import useFetchWithLoading from "./hooks/useFetchWithLoading";
import { useDataContext } from "./context/DataContext";
import Spinner from "./components/layout/Spinner";
import { Content } from "antd/lib/layout/layout";

function App() {
  const { data, loading } = useFetchWithLoading(getAll);
  const { setData } = useDataContext();

  useEffect(() => {
    data && setData(data);
    return () => {};
  }, [data, setData]);

  return (
    <Content>{loading ? <Spinner /> : <EditableTable data={data} />}</Content>
  );
}

export default App;
