import React from 'react';
import "./Carousel.css";

const Carousel = () => {

    const pic = "./image/01.jpg"

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
            <li data-target="#carouselExampleIndicators" data-slide-to="1" />
            <li data-target="#carouselExampleIndicators" data-slide-to="2" />
          </ol>

          <div className="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src={require(`${pic}`)}
                alt="First slide"
              />
              <div class="carousel-caption d-none d-md-block">
                <h3>First Image</h3>
                <p>This is the first image being displayed</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src={require("./image/02.jpg")}
                alt="Second slide"
              />
              <div class="carousel-caption d-none d-md-block">
                <h3>Second Image</h3>
                <p>This is the second image being displayed</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src={require("./image/03.jpg")}
                alt="Third slide"
              />
              <div class="carousel-caption d-none d-md-block">
                <h3>Third Image</h3>
                <p>This is the third image being displayed</p>
              </div>
            </div>
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
}

export default Carousel;
