import { notification } from "antd";
import API_URL from "../config";

export default async function updateBook(bookWillUpdate) {
  return await fetch(`${API_URL}/books`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookWillUpdate),
  })
    .then((response) => response.json())
    .then(() => window.location.reload())
    .catch((error) => notification.error({ message: error?.message || error }));
}
