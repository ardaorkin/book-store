import React from "react";
import { Button, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import BookModal from "./BookModal";

const BookTable = (props) => {
  const [visible, setVisible] = React.useState(false);
  const [record, setRecord] = React.useState(null);

  const handleOk = () => setVisible(false);

  const handleCancel = () => setVisible(false);

  const handleAdd = () => {
    setRecord(null);
    setVisible(true);
  };

  return (
    <div id="table-wrapper">
      <Button
        icon={<PlusOutlined />}
        id="add-button"
        type="primary"
        onClick={handleAdd}
      >
        Add Book
      </Button>
      <Table
        id="table"
        bordered
        dataSource={props.dataSource}
        columns={props.columns}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              setVisible(true);
              setRecord(record);
            }, // click row
          };
        }}
      />
      <BookModal
        visible={visible}
        onCancel={handleCancel}
        onOk={handleOk}
        record={record}
      />
    </div>
  );
};

export default BookTable;
