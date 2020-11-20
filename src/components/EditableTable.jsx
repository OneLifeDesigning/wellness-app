import React, { useState } from "react";
import { Table, Input, InputNumber, Popconfirm, Form, Button } from "antd";
import { useDataContext } from "../context/DataContext";
import { patchOne, deleteOne } from "../apiclient";

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
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
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

  const cancel = () => {
    setEditingKey("");
  };

  const handleDelete = (id) => {
    const newData = data.filter((item) => id !== item.id);
    setData(newData);
    deleteOne(id);
    setEditingKey("");
  };

  const handleAdd = () => {
    //  TODO:
  };

  const save = async (id) => {
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
      width: "17%",
      editable: true,
      sorter: {
        compare: (a, b) => a.date > b.date,
        multiple: 1,
      },
    },
    {
      title: "Hours",
      dataIndex: "hours",
      width: "17%",
      editable: true,
      sorter: {
        compare: (a, b) => a.hours > b.hours,
        multiple: 2,
      },
    },
    {
      title: "Consumition",
      dataIndex: "consumition",
      width: "17%",
      editable: true,
      sorter: {
        compare: (a, b) => a.consumition > b.consumition,
        multiple: 3,
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      width: "17%",
      editable: true,
      sorter: {
        compare: (a, b) => a.price > b.price,
        multiple: 4,
      },
    },
    {
      title: "Cost",
      dataIndex: "cost",
      width: "17%",
      editable: true,
      sorter: {
        compare: (a, b) => a.cost > b.cost,
        multiple: 5,
      },
    },
    {
      title: "Operation",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Button type="primary" onClick={() => save(record.id)}>
              Save
            </Button>
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => handleDelete(record.id)}
            >
              <Button type="danger">Delete</Button>
            </Popconfirm>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <Button type="warning">Cancel</Button>
            </Popconfirm>
          </span>
        ) : (
          <Button
            type="primary"
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Edit
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
    <Form form={form} component={false}>
      <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
        Add a new
      </Button>
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
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default EditableTable;
