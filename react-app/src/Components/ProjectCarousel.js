import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ContentCard from './ContentCard';
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

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
        <GoChevronLeft size={'2.5vw'} style={{ strokeWidth: '0.05vw', }} /> :
        <GoChevronRight size={'2.5vw'} style={{ strokeWidth: '0.05vw', }} />;

    const arrowWidth = '2vw';

    return (
        <button
            onClick={() => onClick()}
            style={{
                // Positioning
                position: 'absolute',
                // Size
                height: 'calc(100%)',
                width: '2.5vw',
                // Background
                backgroundColor: 'whitesmoke',
                // Flexbox
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // Border
                borderTopStyle: 'solid',
                borderBottomStyle: 'solid',
                ...(isLeft ?
                    {
                        left: 0,
                        borderBottomRightRadius: '1vw',
                        borderTopRightRadius: '1vw',
                        borderRightStyle: 'solid',
                    } :
                    {
                        right: 0,
                        borderBottomLeftRadius: '1vw',
                        borderTopLeftRadius: '1vw',
                        borderLeftStyle: 'solid',
                    }
                )
            }}
            className='base-border-width'
        >
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
            items: 1,
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
                {content.map(contentItem => (
                    <ContentCard key={contentItem?.id} contentItem={contentItem} />
                ))}
            </Carousel>
        </div>
    );
};

export default ProjectCarousel;