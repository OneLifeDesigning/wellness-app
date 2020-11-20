import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { blue } from "@ant-design/colors";

const Spinner = () => {
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <LoadingOutlined style={{ fontSize: "80px", color: blue[9] }} />
      <br />
      Cargando...
    </div>
  );
};

export default Spinner;
