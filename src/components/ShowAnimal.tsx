import { useNavigate } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import "./../styles/ShowAnimal.scss";

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
      <div className="animal-info-container">
        <h4>{animal.name}</h4>
        <img
          src={animal.imageUrl}
          alt={animal.latinName}
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/public/img/hästfärs.webp";
          }}
        />
        <p>{animal.shortDescription}</p>
        <button onClick={handleClick}>Mer info</button>
      </div>
    </>
  );
};
