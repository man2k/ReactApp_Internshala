import axios from "axios";
import { Post } from "../types/types";

export const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }
    const data: Post[] = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
