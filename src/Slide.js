import React from 'react';

const Slide = props => {

    const { name, content, image } = props.image;

    return (
        <div class="carousel-item">
            <img
            class="d-block w-100"
            src={require(`${image}`)}
            alt={name}
            />
            <div class="carousel-caption d-none d-md-block">
            <h3>{name}</h3>
            <p>{content}</p>
            </div>
        </div>
    );
}

export default Slide;
