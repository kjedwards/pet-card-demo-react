import React from "react";
import catImg from "./catImg.png";
import "./pets.css";

const PetCard = props => {
    return (
        <div className="pet-card">
            <img className="pet-img" src={catImg} alt="A brown and white kitten sitting on a bed" />
            <h1 className="pet-name">{props.petName}</h1>
            <div className="pet-desc">
                <h2 className="pet-breed">{props.breed}</h2>
                <h2 className="pet-sex">{props.sex}</h2>
            </div>
            <h3 className="pet-location">{props.location}</h3>
            { props.specialNeeds ? (<div className="special-needs">Special Needs</div>) : null }
        </div>
    )
}

export default PetCard;