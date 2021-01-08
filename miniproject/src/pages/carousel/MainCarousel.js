import React from "react";
import Carousel from "react-elastic-carousel";
import "./MainCarousel.css";
import { connect } from "react-redux";
import food from "../../assests/food.jpg";

/**
 * breakpoints for carousel to display the  number of items in carousel
 */
const breakpoint = [
  {
    width: 1,
    itemsToShow: 1,
  },
  {
    width: 550,
    itemsToShow: 2,
    itemsToScroll: 2,
  },
  {
    width: 768,
    itemsToShow: 3,
    itemsToScroll: 3,
  },
];

/**
 *Carousel component to display items
 * @param {props from store } props
 */
const MainCarousel = ({ data }) => {
  const arr = data;
  return (
    <>
      {arr.length ? (
        <div className="carousel-container">
          <Carousel breakPoints={breakpoint}>
            {arr.map((item, index) => {
              var styleimg = {};
              item.thumbnail.length === 0
                ? (styleimg = {
                    backgroundImage: `url("${food}")`,
                    backgroundSize: "cover",
                  })
                : (styleimg = {
                    backgroundImage: "url(" + item.thumbnail + ")",
                    backgroundSize: "cover",
                  });
              return (
                <div className="carousel" style={styleimg} key={index}>
                  <div className="cara">
                    <div>
                      <a
                        className="title-link"
                        href={item.href}
                        target="_blank"
                      >
                        {" "}
                        Title: {item.title}
                      </a>
                    </div>
                    <div>
                      {" "}
                      <span className="haedings">Ingredients: </span>{" "}
                      {item.ingredients.toString()}
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      ) : (
        <div className="carouse-wrapper">
          <Carousel breakPoints={breakpoint}>
            <div
              className="carousel"
              style={{
                backgroundImage: `url(${food})`,
                backgroundSize: "cover",
              }}
            ></div>
            <div
              className="carousel"
              style={{
                backgroundImage: `url(${food})`,
                backgroundSize: "cover",
              }}
            ></div>
            <div
              className="carousel"
              style={{
                backgroundImage: `url(${food})`,
                backgroundSize: "cover",
              }}
            ></div>
          </Carousel>
        </div>
      )}
    </>
  );
};

/**
 * mapping state to props in the  carousel component
 * @param {store from redux} store
 */
const mapStateToProps = (store) => {
  return {
    data: store,
  };
};

export default connect(mapStateToProps, null)(MainCarousel);
