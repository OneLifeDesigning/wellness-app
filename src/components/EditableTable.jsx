import React, { useState } from "react";
import { Table, Input, InputNumber, Popconfirm, Form, Button } from "antd";
import { useDataContext } from "../context/DataContext";
import { patchOne, deleteOne, createOne } from "../apiclient";
import FormAddKey from "./FormAddKey";
import moment from "moment";
import {
  CloseOutlined,
  EditOutlined,
  DeleteOutlined,
  SaveOutlined,
} from "@ant-design/icons";

import { green } from "@ant-design/colors";

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  return (
    <td {...restProps}>
      {editing ? (
        dataIndex !== "date" ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
            }}
          >
            <InputNumber min={0} />
          </Form.Item>
        ) : (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
            }}
            type="date"
          >
            <Input />
          </Form.Item>
        )
      ) : (
        children
      )}
    </td>
  );
};

const EditableTable = () => {
  const { data, setData } = useDataContext();

  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState("");
  const [addKey, setAddKey] = useState(false);

  const isEditing = (record) => record.id === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      date: "",
      hours: "",
      consumition: "",
      price: "",
      cost: "",
      ...record,
    });
    setEditingKey(record.id);
  };

  const handleCancel = () => {
    setEditingKey("");
  };

  const handleDelete = (id) => {
    const newData = data.filter((item) => id !== item.id);
    setData(newData);
    deleteOne(id);
    setEditingKey("");
  };

  const handleAdd = () => {
    setAddKey((prev) => {
      return !prev;
    });
  };
  const handleSubmit = async (newEntry) => {
    const returnedData = await createOne(newEntry);
    const newData = [...data];
    returnedData.date = await moment(returnedData.date).format("L");
    newData.unshift(returnedData);
    setEditingKey("");
    setData(newData);
    setTimeout(() => {
      setAddKey((prev) => {
        return !prev;
      });
    }, 500);
  };

  const handleSave = async (id) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => id === item.id);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
      patchOne(id, row);
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      width: "100px",
      editable: true,
      key: "date",
      fixed: "left",
      sorter: {
        compare: (a, b) => new Date(a.date) - new Date(b.date),
      },
    },
    {
      title: "Hours",
      dataIndex: "hours",
      align: "center",
      key: "hours",
      width: "70px",
      editable: true,
      sorter: {
        compare: (a, b) => Number(a.hours) - Number(b.hours),
      },
    },
    {
      title: "Consumition",
      dataIndex: "consumition",
      key: "consumition",
      align: "center",
      width: "100px",
      editable: true,
      sorter: {
        compare: (a, b) => Number(a.consumition) - Number(b.consumition),
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: "200px",
      editable: true,
      sorter: {
        compare: (a, b) => Number(a.price) - Number(b.price),
      },
    },
    {
      title: "Cost",
      dataIndex: "cost",
      key: "cost",
      width: "200px",
      editable: true,
      sorter: {
        compare: (a, b) => Number(a.cost) - Number(b.cost),
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      align: "center",
      key: "action",
      width: "100px",
      fixed: "right",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Button
              type="primary"
              onClick={() => handleSave(record.id)}
              shape="circle"
              icon={<SaveOutlined />}
              style={{
                backgroundColor: green[6],
                borderColor: green[6],
                color: "#FFF",
                marginRight: 5,
              }}
            ></Button>
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => handleDelete(record.id)}
            >
              <Button
                type="danger"
                shape="circle"
                icon={<DeleteOutlined />}
                style={{ marginRight: 5 }}
              ></Button>
            </Popconfirm>
            <Popconfirm title="Sure to cancel?" onConfirm={handleCancel}>
              <Button
                type="dashed"
                shape="circle"
                icon={<CloseOutlined />}
              ></Button>
            </Popconfirm>
          </span>
        ) : (
          <Button
            type="primary"
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            <EditOutlined /> Edit
          </Button>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "date" ? "date" : "number",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <div>
      {addKey ? (
        <div style={{ display: "flex", marginTop: 16, marginBottom: 16 }}>
          <FormAddKey handleSubmit={handleSubmit} handleAdd={handleAdd} />
        </div>
      ) : (
        <Button
          onClick={handleAdd}
          type="primary"
          style={{ marginBottom: 16, marginTop: 16 }}
        >
          Add a new
        </Button>
      )}

      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          rowKey={(data) => data.id}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: handleCancel,
          }}
          scroll={{ x: 1024 }}
        />
      </Form>
    </div>
  );
};

export default EditableTable;
