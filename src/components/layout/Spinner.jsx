import React from "react";
import { LoadingOutlined } from "@ant-design/icons";

const Spinner = () => {
  return (
    <div>
      <LoadingOutlined style={{ fontSize: "80px", color: "#313868" }} />
      Cargando...
    </div>
  );
};

export default Spinner;
