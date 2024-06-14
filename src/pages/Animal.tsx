import { useEffect, useState } from "react";
import { IAnimal } from "../models/IAnimal";
import { AnimalDetails } from "../components/AnimalDetails";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Animal = () => {
  const { animalid } = useParams();
  const [animal, setAnimal] = useState<IAnimal>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAnimal = async () => {
      try {
        const response = await axios.get<IAnimal>(
          `https://animals.azurewebsites.net/api/animals/${animalid}`
        );
        setAnimal(response.data);
      } catch (error) {
        console.error("Fel!", error);
      } finally {
        setLoading(false);
      }
    };
    getAnimal();
  }, [animalid]);

  return (
    <>{animal && !loading && <AnimalDetails animal={animal}></AnimalDetails>}</>
  );
};
