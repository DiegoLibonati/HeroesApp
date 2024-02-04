import React from "react";
import { Link } from "react-router-dom";
import "./HeroCard.css";
import { HeroCardProps } from "../../entities/entities";

export const HeroCard = ({ id, name, images, slug, biography }: HeroCardProps): JSX.Element => {
  const { lg } = images;
  const { fullName, publisher } = biography;

  return (
    <li className="card_container animate__animated animate__fadeIn">
      <div className="card_container_header">
        <img src={lg} alt={name}></img>
      </div>

      <div className="card_container_information">
        <h2>{name}</h2>
        <h3>{slug}</h3>
        <h4>{publisher}</h4>
        <h5>{fullName}</h5>

        <Link to={`/hero/${id}`} className="button-card">
          LEARN MORE
        </Link>
      </div>
    </li>
  );
};
