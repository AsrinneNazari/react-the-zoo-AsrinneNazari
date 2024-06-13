import { useNavigate } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";

interface IShowAnimalProps {
  animal: IAnimal;
}
export const ShowAnimal = ({ animal }: IShowAnimalProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/animal/" + animal.id);
  };
  return (
    <>
      <div>
        <h4>{animal.name}</h4>
        <img src={animal.imageUrl} alt={animal.latinName} />
        <p>{animal.shortDescription}</p>
        <button onClick={handleClick}>Mer info</button>
      </div>
    </>
  );
};
