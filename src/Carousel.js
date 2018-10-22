import React from "react";
import "./Carousel.css";
import Slide from "./Slide";
import SlideIndicator from "./SlideIndicator";

const Carousel = props => {
  const { images } = props;

  const displaySlidesIndicator = images.map(item => {
    return <SlideIndicator indicator={item.id} />;
  });

  const displaySlides = images.map(item => {
    return <Slide image={item} />;
  });

  return (
    <div class="container-fluid">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          />
          {/* Mapping out the carousel indicators */}
          {displaySlidesIndicator}
        </ol>

        <div className="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src={require("./image/default.jpg")}
              alt="First slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h1>Welcome to my carousel demo</h1>
              <p>Use Left or Right arrow to navigate slides</p>
            </div>
          </div>

          {/* Mapping out the individual slides */}
          {displaySlides}
        </div>

        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true" />
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true" />
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
