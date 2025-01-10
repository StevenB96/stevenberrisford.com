import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import GeneralElement from './GeneralElement';

const ProjectCarousel = ({ content }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return (
        <div style={{ width: '100%' }}>
            <Carousel
                showDots={false}
                responsive={responsive}
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                transitionDuration={300}
                itemClass="carousel-item"
            >
                {content.map(item => (
                    <GeneralElement key={item?.id} item={item} />
                ))}
            </Carousel>
        </div>
    );
};

export default ProjectCarousel;