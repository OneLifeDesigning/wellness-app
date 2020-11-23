import React, { useEffect } from "react";
import EditableTable from "./components/EditableTable";
import { getAll } from "./apiclient";

import useFetchWithLoading from "./hooks/useFetchWithLoading";
import { useDataContext } from "./context/DataContext";
import Spinner from "./components/layout/Spinner";
import { Content } from "antd/lib/layout/layout";
import BarsChart from "./components/BarsChart";
import LineChart from "./components/LineChart";
import {
  groupedByMonthYear,
  groupedByDay,
  retrieveSeriesLine,
  retrieveSeriesBar,
  retrieveDateBar,
} from "./helpers/utils";
import { Row, Col } from "antd";

function App() {
  const { data, loading } = useFetchWithLoading(getAll);
  const { setData } = useDataContext();

  useEffect(() => {
    data && setData(data);
    return () => {};
  }, [data, setData]);
  return (
    <Content>
      {loading ? (
        <Spinner />
      ) : (
        <Row>
          <Col span={24}>
            <LineChart
              data={retrieveSeriesLine(groupedByDay(data))}
              date={retrieveDateBar(groupedByDay(data))}
            />
          </Col>
          <Col span={6}>
            <BarsChart
              series={retrieveSeriesBar(groupedByMonthYear(data))}
              date={retrieveDateBar(groupedByMonthYear(data))}
            />
          </Col>
          <Col span={24}>
            <EditableTable />
          </Col>
        </Row>
      )}
    </Content>
  );
}

export default App;
