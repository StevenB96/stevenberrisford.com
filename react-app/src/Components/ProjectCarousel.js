import React, {
    useState,
} from 'react';
import { GoDot, GoDotFill } from "react-icons/go";

import {
    Carousel,
    CarouselCard,
    CarouselNav,
    CarouselNavContainer,
    CarouselViewport,
    CarouselSlider,
} from "@fluentui/react-components";

import ContentCard from './ContentCard';

const SliderCard = ({
    contentItem,
    count,
    index
}) => {
    return (
        <CarouselCard
            aria-label={`${index + 1} of ${count}`}
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '1vw',
            }}
        >
            <ContentCard contentItem={contentItem} />
        </CarouselCard >
    );
};

const ProjectCarousel = ({
    content,
}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Carousel
            style={{
                marginBottom: '1vw',
                width: '100%',
            }}
            groupSize={1}
            circular
            draggable
            activeIndex={activeIndex}
            onActiveIndexChange={(e, data) => setActiveIndex(data.index)}
        >
            <CarouselViewport>
                <CarouselSlider>
                    {content.map((contentItem, index) => (
                        <SliderCard
                            key={contentItem?.id}
                            contentItem={contentItem}
                            index={index}
                            count={content.lenght}
                        />
                    ))}
                </CarouselSlider>
            </CarouselViewport>
            <CarouselNavContainer
                totalSlides={content.lenght}
                appearance="brand"
                layout="inline"
                autoplay={{
                    "aria-label": "Enable autoplay",
                }}
                next={{ "aria-label": "go to next" }}
                prev={{ "aria-label": "go to prev" }}
            >
                <CarouselNav>
                    {(index) =>
                        <button
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            onClick={() => setActiveIndex(index)}>
                            {
                                (index === activeIndex) ?
                                    <GoDotFill />
                                    :
                                    <GoDot />
                            }
                        </button>
                    }
                </CarouselNav>
            </CarouselNavContainer>
        </Carousel>
    );
};

export default ProjectCarousel;