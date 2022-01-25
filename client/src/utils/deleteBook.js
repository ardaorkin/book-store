import { notification } from "antd";
import API_URL from "../config";

export default async function deleteBook(id) {
  return await fetch(`${API_URL}/books/${id}`, { method: "DELETE" })
    .then((response) => response.json())
    .then(() => window.location.reload())
    .catch((error) => notification.error({ message: error?.message || error }));
}
