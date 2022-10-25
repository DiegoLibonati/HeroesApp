import React from "react";
import { useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { HeroList } from "../components/HeroList";
import { HeroesContext } from "../context/HeroesContext";
import queryString from "query-string";
import { useEffect } from "react";
import "./HeroByPublisherPage.css";

export const HeroByPublisherPage = () => {
  const { heroes, loading, publishers, handlePublisher, actualPublisher } =
    useContext(HeroesContext);

  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  useEffect(() => {
    handlePublisher(q);
  }, [q]);

  const handleSelectOption = (e) => {
    navigate(`?q=${e.target.value}`);
  };

  return (
    <>
      <section className="index_container">
        <form className="index_container_form">
          <h2>SELECT YOUR FAVORITE PUBLISHER</h2>
          <select
            onChange={(e) => handleSelectOption(e)}
            value={actualPublisher}
          >
            <option value="ALL">All</option>
            {publishers.map((publish) => (
              <option key={publish} value={publish}>
                {publish}
              </option>
            ))}
          </select>
        </form>
      </section>

      {loading ? (
        <div className="loader_wrapper">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <HeroList publisher={heroes}></HeroList>
      )}
    </>
  );
};
