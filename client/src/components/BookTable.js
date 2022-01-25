import React from "react";
import { Button, Table } from "antd";
import BookModal from "./BookModal";

const BookTable = (props) => {
  const [visible, setVisible] = React.useState(false);

  const handleOk = () => setVisible(false);

  const handleCancel = () => setVisible(false);

  const handleAdd = () => setVisible(true);

  return (
    <div id="table-wrapper">
      <Button id="add-button" type="primary" onClick={handleAdd}>
        Add Book
      </Button>
      <Table
        id="table"
        bordered
        dataSource={props.dataSource}
        columns={props.columns}
      />
      <BookModal visible={visible} onCancel={handleCancel} onOk={handleOk} />
    </div>
  );
};

export default BookTable;
