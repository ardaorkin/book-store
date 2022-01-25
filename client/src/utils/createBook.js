import { notification } from "antd";
import API_URL from "../config";

export default async function createBook(newBook) {
  return await fetch(`${API_URL}/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBook),
  })
    .then((response) => response.json())
    .then(() => window.location.reload())
    .catch((error) => notification.error({ message: error?.message || error }));
}
