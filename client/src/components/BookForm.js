import { Button, Form, Input, InputNumber, notification, Select } from "antd";

import React from "react";
import API_URL from "../config";

const { Option } = Select;

const BookForm = (props) => {
  const [form] = Form.useForm();
  const [newBook, setNewBook] = React.useState({});

  const handleChange = (event) => {
    return setNewBook({ ...newBook, [event.target.name]: event.target.value });
  };

  const handleClick = async () => {
    console.log(newBook);
    return await fetch(`${API_URL}/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    })
      .then((response) => response.json())
      .then(() => window.location.reload())
      .catch((error) =>
        notification.error({ message: error?.message || error })
      );
  };

  return (
    <Form
      form={form}
      name="basic"
      id="book-form"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input book's name!" }]}
      >
        <Input name="name" onChange={handleChange} />
      </Form.Item>

      <Form.Item label="Author" name="author">
        <Input name="auhtor" onChange={handleChange} />
      </Form.Item>

      <Form.Item
        label="Publisher"
        name="publisher"
        rules={[{ required: true, message: "Please input book's publisher!" }]}
      >
        <Input name="publisher" onChange={handleChange} />
      </Form.Item>

      <Form.Item
        label="Category"
        name="category"
        rules={[{ required: true, message: "Please select book's category!" }]}
      >
        <Select
          onChange={(value) =>
            handleChange({ target: { name: "category", value } })
          }
        >
          <Option value="children">Children</Option>
          <Option value="novel">Novel</Option>
          <Option value="self help">Self help</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: "Please set book's price!" }]}
      >
        <InputNumber
          step="0.1"
          min="0.0"
          onChange={(value) =>
            handleChange({ target: { name: "price", value } })
          }
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" onClick={handleClick}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BookForm;
