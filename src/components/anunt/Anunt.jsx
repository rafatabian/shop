import "./Anunt.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import cars_uk from "../../assets/cars_uk.png";
import { Cars } from "../../Cars";
import { SearchContext } from "../../Context/searchProvider";

const Anunt = () => {
  const { searchRes } = useContext(SearchContext);

  const filteredCars = searchRes.length > 0 ? searchRes : Cars;

  return (
    <div className="anunt__page-container">
      {filteredCars.map((anunt) => (
        <div className="anunt__content-container" key={anunt.id + anunt.miles}>
          <div className="anunt__img-div">
          <Link to={`/showCar?id=${anunt.id}`}>
            <LazyLoadImage
              className="imaaa"
              src={anunt.imaa[0]}
              placeholderSrc={cars_uk}
              effect="blur"
              alt="cars"
            />
            </Link>
          </div>
          <div className="anunt__text-div">
            <div className="anunt__text-div_title">
              {anunt.name}
              <span>{anunt.price}</span>
            </div>
            <div className="anunt__text-div_info">
              <p>
                Year of fabrication: <span>{anunt.year}</span>
              </p>
              <p>
                Mileage: <span>{anunt.miles}</span>
              </p>
              <p>
                Horsepower: <span>{anunt.hp}</span>
              </p>
              <p>
                Engine type: <span>{anunt.type}</span>
              </p>
              <p>
                Previous owner/s: <span>{anunt.owners}</span>
              </p>
              <Link to={`/showCar?id=${anunt.id}`}>Show More</Link>
              {/**TO DO */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Anunt;