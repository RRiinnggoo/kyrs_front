import axios from "axios";

export const AddCard = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/cards", {
        // auth: {
        //   username: "admin",
        //   password: "admin123",
        // },
      });
      return response.data;
    } catch (error) {
      console.error("Ошибка при получении товара:", error);
      throw error;
    }
  };