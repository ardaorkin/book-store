import { Modal } from "antd";
import React from "react";
import BookForm from "./BookForm";

const BookModal = (props) => {
  return (
    <Modal
      visible={props.visible}
      onCancel={props.onCancel}
      onOk={props.onOk}
      wrapClassName="book-modal"
      footer={null}
    >
      <BookForm onSubmit={props.onOk} />
    </Modal>
  );
};

export default BookModal;
