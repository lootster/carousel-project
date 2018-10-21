import React from 'react';

const SlideIndicator = props => {
    return (
        <div>
            <li data-target="#carouselExampleIndicators" data-slide-to={`${props.id}`} />
        </div>
    );
}

export default SlideIndicator;
