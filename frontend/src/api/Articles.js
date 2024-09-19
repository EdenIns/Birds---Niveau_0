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

      static async createArticle(newArticle) {
        try {
            console.log(newArticle)
          const response = await axios.post(`${BASE_URL}/article`, {
            title : newArticle.title,
            description: newArticle.description,
            imageUrl: newArticle.imageUrl,
            userId: "12345"
          });
          alert("Nouvelle adresse ajouté")
          console.log(response);
          return response.data;
        } catch (error) {
          console.error("Erreur lors de l'ajout de la nouvelle adresse :", error);
          throw error;
        }
      }
}
