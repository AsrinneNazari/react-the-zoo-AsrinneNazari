import { useState } from "react"
import { IAnimal } from "../models/IAnimal"
import { AnimalDetails } from "../components/AnimalDetails";


export const Animal = () =>{
    const [animal, setAnimal]= useState<IAnimal>();


    const getAnimal = async() =>{
        const animal = await getAnimal();
        setAnimal(animal);
    };
    getAnimal(animal);

    return <>
    <AnimalDetails animal={animal}></AnimalDetails>
        </>
}