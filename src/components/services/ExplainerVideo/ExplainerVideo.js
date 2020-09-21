import React, { useRef, useState } from 'react';
import video from '../../../assets/videos/advert2.mp4';
import classes from './ExplainerVideo.module.scss';

const ExplainerVideo = () => {
    const myVideo = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const play = e => {
        if (e.target.paused) {
            e.target.play();
            setIsPlaying(true);
        } else {
            e.target.pause();
            setIsPlaying(false);
        }
    };

    const playButtonHandler = () => {
        console.log(myVideo);
        if (myVideo.current.paused) {
            myVideo.current.play();
            setIsPlaying(true);
        } else {
            myVideo.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className={classes.Explainer}>
            <div className={`${classes.VideoContainer} ${isPlaying && classes.Playing}`}>
                <video
                    className={classes.Video}
                    src={video}
                    onClick={play}
                    onEnded={() => setIsPlaying(false)}
                    ref={myVideo}
                >
                    Your browser does not support video.
                    </video>

                <div
                    className={`${classes.PlayButton} ${isPlaying && classes.Playing}`}
                    onClick={playButtonHandler}

                >
                    {isPlaying ?
                        <i className='fa fa-pause fa-4x' aria-hidden='true'></i>
                        : <i className='fa fa-play fa-4x' aria-hidden='true'></i>}


                </div>
            </div>
            <div className={classes.Lead}>
                <div className={`${classes.LeadContent} ${isPlaying && classes.Playing}`}>
                    <h3>Company Registration</h3>
                    <p>
                        We assist aspiring entrepreneurs register with
                        Companies and Intellectual Property Commission
                        (CIPC), South African Revenue Service (SARS),
                        Central Supplier Database (CSD) and initiate the
                        opening of a bank account. All of these services are
                        paperless.
                        </p>
                </div>
            </div>
        </div>
    );
};

export default ExplainerVideo;
