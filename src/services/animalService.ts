import axios from "axios";
import { IAnimal } from "../models/IAnimal";

const url = "https://animals.azurewebsites.net/api/animals";

export const getAnimals = async () => {
  const response = await axios.get<IAnimal[]>(url);
  return response.data;
};
