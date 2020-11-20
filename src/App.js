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
    <div className="App">
      <Content
        style={{
          backgroundColor: "#f4f3ef",
          padding: "50px",
          width: "100vw",
          minHeight: "100vh",
          display: "flex",
          alignContent: "stretch",
          alignItems: "center",
        }}
      >
        {loading ? <Spinner /> : <EditableTable data={data} />}
      </Content>
    </div>
  );
}

export default App;
