import { Modal, Form } from "antd";
import React from "react";
import BookForm from "./BookForm";

const BookModal = (props) => {
  return (
    <Modal
      key={props?.record?.id || 0}
      destroyOnClose={true}
      visible={props.visible}
      onCancel={props.onCancel}
      onOk={props.onOk}
      wrapClassName="book-modal"
      footer={null}
    >
      <BookForm onSubmit={props.onOk} record={props.record} />
    </Modal>
  );
};

export default BookModal;
