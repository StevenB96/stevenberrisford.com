import React, {
    useEffect,
    useState
} from 'react';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import Slider from "react-slick";
import YouTube from 'react-youtube';
import {
    getProfileRequest,
    getContentRequest,
    getReferencesRequest,
} from './Redux/Actions/appActions';

const WebPage = ({
    webPage
}) => {
    return (
        <div style={{ borderStyle: 'solid', width: 500, }}>
            <h2>{webPage.title}</h2>
            <iframe
                src={webPage.media_link}
                title={webPage.title}
                width={'100%'}
                height={500}
            >
            </iframe>
        </div>
    );
};

const ImageElement = ({ image }) => {
    return (
        <div style={{ borderStyle: 'solid', width: 500, }}>
            <h2>{image.title}</h2>
            <p>{image.text}</p>
            <img
                src={image.media_link}
                alt={image.title}
                width={'100%'}
                // height={500}
                style={{ objectFit: 'cover' }}
            />
        </div>
    );
};

const VideoElement = ({ video }) => {
    return (
        <div style={{ borderStyle: 'solid', width: 500, }}>
            <h2>{video.title}</h2>
            <p>{video.text}</p>
            <YouTube
                // ref={playerRef}
                // width={squareSize}
                // height={squareSize}
                className="youtube_video"
                videoId={video.media_link}
                opts={{
                    playerVars: {
                        autoplay: 0,
                    }
                }}
                style={{}}
            />
        </div>
    );
}

const App = ({
}) => {
    const dispatch = useDispatch();

    const {
        profile,
        images,
        pdfs,
        videos,
        webPages,
    } = useSelector(state => state.app);

    useEffect(() => {
        dispatch(getProfileRequest());
        dispatch(getContentRequest());
        dispatch(getReferencesRequest());
    }, [dispatch]);

    console.log({ images });
    console.log({ pdfs });
    console.log({ videos });
    console.log({ webPages });


    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    // };

    // <Slider {...settings}>
    //     <div>
    //         <h3>1</h3>
    //     </div>
    //     <div>
    //         <h3>2</h3>
    //     </div>
    //     <div>
    //         <h3>3</h3>
    //     </div>
    //     <div>
    //         <h3>4</h3>
    //     </div>
    //     <div>
    //         <h3>5</h3>
    //     </div>
    //     <div>
    //         <h3>6</h3>
    //     </div>
    // </Slider>

    return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', }}>
            {

                webPages?.map((webPage) => {
                    return (
                        <WebPage webPage={webPage} />
                    );
                })
            }
            {
                pdfs?.map((webPage) => {
                    return (
                        <WebPage webPage={webPage} />
                    );
                })
            }
            {
                images?.map((image) => {
                    return (
                        <ImageElement image={image} />
                    );
                })
            }
            {
                videos?.map((video) => {
                    return (
                        <VideoElement video={video} />
                    );
                })
            }
        </div>
    );
};

export default App;