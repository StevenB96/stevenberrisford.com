import React, {
    useEffect,
    useRef,
    useState,
} from 'react';
import { GoDot, GoDotFill } from "react-icons/go";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

import {
    Carousel,
    CarouselCard,
    CarouselViewport,
    CarouselSlider,
} from "@fluentui/react-components";

import ContentCard from './ContentCard';

const SliderCard = ({
    contentItem,
    count,
    index,
    activeIndex
}) => {
    const contentRef = useRef(null);
    const [originalHeight, setOriginalHeight] = useState(0);

    useEffect(() => {
        // Measure the height of the ContentCard if the ref is available
        if (contentRef.current) {
            setOriginalHeight(contentRef.current.offsetHeight); // Get the original height
        }
    }, [contentItem]); // Re-run when contentItem changes

    const isVisible = index === activeIndex;

    return (
        <CarouselCard
            aria-label={`${index + 1} of ${count}`}
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-start',
                marginBottom: '1vw',
                opacity: isVisible ? 1 : 0,
                height: isVisible? originalHeight : 0,
                overflow: 'hidden',
                transition: 'height 0.4s ease, opacity 0.2s ease'
            }}
        >
            <div
                ref={contentRef}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '1vw',
                }}
            >
                <ContentCard contentItem={contentItem} />
            </div>
        </CarouselCard>
    );
};

const ProjectCarousel = ({
    content,
}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSetActiveIndex = ({ index, isRight }) => {
        if (isRight !== null) {
            if (isRight === true) {
                let newIndex = activeIndex + 1;

                if (newIndex < 0) {
                    newIndex = content.length - 1;
                }

                if (newIndex >= content.length) {
                    newIndex = 0;
                }

                setActiveIndex(newIndex);
            } else {
                let newIndex = activeIndex - 1;

                if (newIndex < 0) {
                    newIndex = content.length - 1;
                }

                if (newIndex >= content.length) {
                    newIndex = 0;
                }

                setActiveIndex(newIndex);
            }
        }
        if (index) {
            setActiveIndex(index);
        }
    };

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
            onActiveIndexChange={(e, data) => handleSetActiveIndex({ index: data.index })}
        >
            <CarouselViewport>
                <CarouselSlider>
                    {content.map((contentItem, index) => (
                        <SliderCard
                            key={contentItem?.id}
                            contentItem={contentItem}
                            index={index}
                            count={content.lenght}
                            activeIndex={activeIndex}
                        />
                    ))}
                </CarouselSlider>
            </CarouselViewport>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <button
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '1vw',
                    }}
                    onClick={() => handleSetActiveIndex({ isRight: false })}>
                    <FaChevronLeft
                        size={'2vw'}
                        style={{
                            strokeWidth: '0.05vw',
                        }}
                    />
                </button>
                {content.map((_, index) => (
                    <button
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: '1vw',
                        }}
                        onClick={() => handleSetActiveIndex({ index })}>
                        {
                            (index === activeIndex) ?
                                <GoDotFill
                                    size={'3vw'}
                                    style={{
                                        strokeWidth: '0.05vw',
                                    }}
                                />
                                :
                                <GoDot
                                    size={'2vw'}
                                    style={{
                                        strokeWidth: '0.05vw',
                                    }}
                                />
                        }
                    </button>

                ))}
                <button
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '1vw',
                    }}
                    onClick={() => handleSetActiveIndex({ isRight: true })}>
                    <FaChevronRight
                        size={'2vw'}
                        style={{
                            strokeWidth: '0.05vw',
                        }}
                    />
                </button>
            </div>
        </Carousel>
    );
};

export default ProjectCarousel;