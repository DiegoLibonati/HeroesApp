import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HeroesContext } from "../context/HeroesContext";
import "./HeroPage.css";

export const HeroPage = () => {
  const { handleHeroId, searchHeroId } = useContext(HeroesContext);
  const { heroId } = useParams();

  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    handleHeroId(heroId);
  }, [heroId]);

  if (searchHeroId) {
    const {
      name,
      slug,
      powerstats,
      appearance,
      biography,
      work,
      connections,
      images,
    } = searchHeroId;
    return (
      <section className="hero_container">
        <img
          className="img-background animate__animated animate__fadeIn"
          src={images.lg}
          alt={name}
        ></img>

        <article className="hero_container_information">
          <h3>{name}</h3>
          <ul className="hero_container_information_list">
            <li>
              <b>Slug: </b>
              {slug}
            </li>

            <li>
              <b>PowerStats: </b>
              <p>Intelligence: {powerstats.intelligence}</p>
              <p>Strength: {powerstats.strength}</p>
              <p>Speed: {powerstats.speed}</p>
              <p>Durability: {powerstats.durability}</p>
              <p>Power: {powerstats.power}</p>
              <p>Combat: {powerstats.combat}</p>
            </li>

            <li>
              <b>Appearance: </b>
              <p>Gender: {appearance.gender}</p>
              <p>Race: {appearance.race}</p>
              <p>Height: {appearance.height[1]}</p>
              <p>Weight: {appearance.weight[1]}</p>
              <p>Eye color: {appearance.eyeColor}</p>
              <p>Hair color: {appearance.hairColor}</p>
            </li>

            <li>
              <b>Biography: </b>
              <p>Fullname: {biography.fullName}</p>
              <p>alter egos: {biography.alterEgos}</p>
              <p>place Of Birth: {biography.placeOfBirth}</p>
              <p>first Appearance: {biography.firstAppearance}</p>
              <p>publisher: {biography.publisher}</p>
              <p>alignment: {biography.alignment}</p>
            </li>

            <li>
              <b>Works: </b>
              <p>occupation: {work.occupation}</p>
              <p>base: {work.base}</p>
            </li>

            <li>
              <b>Connections: </b>
              <p>group Affiliation: {connections.groupAffiliation}</p>
              <p>Relatives: {connections.relatives}</p>
            </li>

            <img
              src={images.md}
              alt={name}
              className="img-list animate__animated animate__fadeIn"
            />
          </ul>

          <button onClick={onNavigateBack}>Back...</button>
        </article>
      </section>
    );
  }
};
