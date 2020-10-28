import React from "react";
import petData from "./pets.json";
import PetCard from "./PetCard";
import "./pets.css";

const PetContainer = () => {
    return (
        <div className={"pet-container"}>
            {petData.pets.map(pet => {
                return <PetCard
                            key={pet.pet_id}
                            petId={pet.pet_id}
                            petName={pet.pet_name}
                            breed={pet.primary_breed}
                            location={pet.addr_city}
                            sex={pet.sex}
                            specialNeeds={pet.special_needs}
                />
            })}
        </div>
    )
}

export default PetContainer;