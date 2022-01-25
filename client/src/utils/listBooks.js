import { notification } from "antd";
import API_URL from "../config";

export default async function listBooks() {
  return await fetch(`${API_URL}/books`)
    .then((response) => response.json())
    .then((books) => books)
    .catch((error) => notification.error({ message: error?.message || error }));
}
