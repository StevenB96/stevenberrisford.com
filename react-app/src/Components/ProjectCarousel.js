import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ContentCard from './ContentCard';
import {
    FaAngleLeft,
    FaAngleRight,
} from 'react-icons/fa';

const ScrollButton = ({
    isLeft = true,
    onClick,
    ...rest
}) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
    } = rest;

    const symbol = isLeft ?
        <FaAngleLeft size={'2.5vw'} /> :
        <FaAngleRight size={'2.5vw'} />;

    const arrowWidth = '3vw';

    return (
        <button
            onClick={() => onClick()}
            style={{
                position: 'absolute',
                height: 'calc(100%)',
                width: arrowWidth,
                backgroundColor: 'grey',
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderTopStyle: 'solid',
                borderBottomStyle: 'solid',
                ...(isLeft ?
                    {
                        left: 0,
                        borderBottomRightRadius: arrowWidth,
                        borderTopRightRadius: arrowWidth,
                        borderRightStyle: 'solid',
                    } :
                    {
                        right: 0,
                        borderBottomLeftRadius: arrowWidth,
                        borderTopLeftRadius: arrowWidth,
                        borderLeftStyle: 'solid',
                    }
                )
            }}>
            {symbol}
        </button>
    );
};

const ProjectCarousel = ({
    content,
}) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
            slidesToSlide: 1
        }
    };

    return (
        <div style={{ width: '100%' }}>
            <Carousel
                // arrows={false}
                showDots={false}
                responsive={responsive}
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                transitionDuration={300}
                itemClass="carousel-item"
                customRightArrow={<ScrollButton isLeft={false} />}
                customLeftArrow={<ScrollButton isLeft={true} />}
            >
                {content.map(item => (
                    <ContentCard key={item?.id} item={item} />
                ))}
            </Carousel>
        </div>
    );
};

export default ProjectCarousel;