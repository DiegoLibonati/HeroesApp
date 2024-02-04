import React from "react";
import { useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { HeroList } from "../components/HeroList";
import { HeroesContext } from "../context/HeroesContext";
import queryString from "query-string";
import { useEffect } from "react";
import { Hero } from "../../entities/entities";
import "./HeroByPublisherPage.css";

export const HeroByPublisherPage = (): JSX.Element => {
  const heroesContext =
    useContext(HeroesContext);

  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  useEffect(() => {
    heroesContext?.handlePublisher(q as string);
  }, [q]);

  const handleSelectOption: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    navigate(`?q=${e.target.value}`);
  };

  return (
    <>
      <section className="index_container">
        <form className="index_container_form">
          <h2>SELECT YOUR FAVORITE PUBLISHER</h2>
          <select
            onChange={(e) => handleSelectOption(e)}
            value={heroesContext?.actualPublisher}
          >
            <option value="ALL">All</option>
            {heroesContext?.publishers.map((publish) => (
              <option key={publish} value={publish}>
                {publish}
              </option>
            ))}
          </select>
        </form>
      </section>

      {heroesContext?.loading ? (
        <div className="loader_wrapper">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <HeroList publisher={heroesContext?.heroes as Hero[]}></HeroList>
      )}
    </>
  );
};
