import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import React from "react";
import BookTable from "../components/BookTable";
import deleteBook from "../utils/deleteBook";
import listBooks from "../utils/listBooks";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a?.name?.localeCompare(b?.name),
  },
  {
    title: "Author",
    dataIndex: "author",
    key: "author",
    sorter: (a, b) => a?.author?.localeCompare(b?.author),
  },
  {
    title: "Publisher",
    dataIndex: "publisher",
    key: "publisher",
    sorter: (a, b) => a?.publisher?.localeCompare(b?.publisher),
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    render: (item) =>
      item ? item.charAt(0).toUpperCase() + item.slice(1) : null,
    filters: [
      { text: "Children", value: "children" },
      { text: "Novel", value: "novel" },
      { text: "Self help", value: "self help" },
    ],
    onFilter: (value, record) => record.category.indexOf(value) === 0,
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    render: (item, row) => (
      <Button
        type="primary"
        icon={<DeleteOutlined />}
        onClick={(event) => {
          event.stopPropagation();
          return deleteBook(row.id);
        }}
        danger
      >
        Delete Book
      </Button>
    ),
  },
];

const Book = () => {
  const [dataSource, setDataSource] = React.useState([]);

  React.useEffect(() => {
    listBooks().then((books) => setDataSource(books));
  }, []);

  return <BookTable dataSource={dataSource} columns={columns} />;
};

export default Book;
