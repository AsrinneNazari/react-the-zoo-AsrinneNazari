import { useEffect, useState } from "react";
import { IAnimal } from "../models/IAnimal";
import { AnimalDetails } from "../components/AnimalDetails";
import { useParams } from "react-router-dom";

export const Animal = () => {
  const { animalid } = useParams();
  const [animal, setAnimal] = useState<IAnimal>();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const getAnimal = () => {
      try {
        const getLocalAnimal = localStorage.getItem("animals");
        if (getLocalAnimal) {
          const animals: IAnimal[] = JSON.parse(getLocalAnimal);

          if (animalid) {
            const foundAnimal = animals.find((a) => a.id === +animalid);
            setAnimal(foundAnimal);
          }
        }
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
