import React, { useEffect } from "react";
import EditableTable from "./components/EditableTable";
import { getAll } from "./apiclient";

import useFetchWithLoading from "./hooks/useFetchWithLoading";
import { useDataContext } from "./context/DataContext";
import Spinner from "./components/layout/Spinner";

function App() {
  const { data, loading } = useFetchWithLoading(getAll);
  const { setData } = useDataContext();

  useEffect(() => {
    data && setData(data);
    data && localStorage.setItem("data", JSON.stringify(data));
    return () => {};
  }, [data, setData]);

  return (
    <div className="App">
      <div className="site-layout-content">
        {loading ? (
          <div className="space-align-block">
            <Spinner align="center" />
          </div>
        ) : (
          <EditableTable data={data} />
        )}
      </div>
    </div>
  );
}

export default App;
