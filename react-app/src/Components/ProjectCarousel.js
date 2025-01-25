import React from 'react';

import {
    Carousel,
    CarouselCard,
    CarouselNav,
    CarouselNavButton,
    CarouselNavContainer,
    CarouselViewport,
    CarouselSlider,
} from "@fluentui/react-components";

import ContentCard from './ContentCard';

const SliderCard = ({
    contentItem,
    index
}) => {
    return (
        <CarouselCard aria-label={`carousel-slide-${index + 1}`}>
            <ContentCard contentItem={contentItem} />
        </CarouselCard >
    );
};

const ProjectCarousel = ({
    content,
}) => {
    return (
        <Carousel
            groupSize={1}
            circular
        >
            <CarouselViewport>
                <CarouselSlider>
                    {content.map((contentItem, index) => (
                        <SliderCard
                            key={contentItem?.id}
                            contentItem={contentItem}
                            index={index}
                        />
                    ))}
                </CarouselSlider>
            </CarouselViewport>
            <CarouselNavContainer
                layout="inline"
                autoplay={{
                    "aria-label": "Enable autoplay",
                }}
                next={{ "aria-label": "go to next" }}
                prev={{ "aria-label": "go to prev" }}
            >
                <CarouselNav>
                    {(index) => (
                        <CarouselNavButton aria-label={`Carousel Nav Button ${index}`} />
                    )}
                </CarouselNav>
            </CarouselNavContainer>
        </Carousel>
    );
};

export default ProjectCarousel;