import { BASE_URL, axios } from "../config";

export default class Articles {

    static async getArticles() {
        try {
          const response = await axios.get(`${BASE_URL}/article`);
          return response.data;
        } catch (error) {
          console.error("Error fetching articles:", error);
          throw error;
        }
      }
}
