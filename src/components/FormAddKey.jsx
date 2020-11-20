import React, { useState } from "react";
import { Form, Button, Input, InputNumber, Alert } from "antd";
import { SaveOutlined, CloseOutlined } from "@ant-design/icons";
import { green } from "@ant-design/colors";

const FormAddKey = (props) => {
  const { handleSubmit, handleAdd } = props;
  const serializeForm = async () => {
    const data = await form.validateFields();
    const error = Object.values(data).some((value) => !value);
    !error ? handleSubmit(data) : setError(error);
    setTimeout(() => {
      setError(false);
    }, 3500);
  };
  const [error, setError] = useState(false);
  const [form] = Form.useForm();
  return (
    <div style={{ width: "100%" }}>
      {error && (
        <Alert
          style={{ marginBottom: 5 }}
          message="All inputs is required"
          type="error"
        />
      )}
      <Form
        form={form}
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#eaeaea",
          margin: 0,
          padding: 10,
        }}
      >
        <Form.Item
          style={{
            marginBottom: 0,
            marginRight: 5,
          }}
        >
          <Button
            onClick={handleAdd}
            type="dashed"
            danger
            shape="circle"
            icon={<CloseOutlined />}
          ></Button>
        </Form.Item>
        <Form.Item
          type="date"
          name={"date"}
          style={{
            marginBottom: 0,
            marginRight: 5,
          }}
        >
          <Input
            placeholder="Date"
            style={{
              marginRight: 10,
            }}
          />
        </Form.Item>
        <Form.Item
          name={"hours"}
          style={{
            marginBottom: 0,
            marginRight: 5,
          }}
        >
          <InputNumber
            placeholder="Hours"
            style={{
              marginBottom: 0,
            }}
          />
        </Form.Item>
        <Form.Item
          name={"consumition"}
          style={{
            marginBottom: 0,
          }}
        >
          <InputNumber placeholder="Consumition" />
        </Form.Item>
        <Form.Item
          name={"price"}
          style={{
            marginRight: 5,
            marginBottom: 0,
          }}
        >
          <InputNumber placeholder="Price" />
        </Form.Item>
        <Form.Item
          name={"cost"}
          style={{
            marginRight: 5,
            marginBottom: 0,
          }}
        >
          <InputNumber placeholder="Cost" />
        </Form.Item>
        <Form.Item
          style={{
            marginBottom: 0,
          }}
        >
          <Button
            style={{
              backgroundColor: green[6],
              borderColor: green[6],
              color: "#FFF",
            }}
            onClick={serializeForm}
          >
            <SaveOutlined /> Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormAddKey;
