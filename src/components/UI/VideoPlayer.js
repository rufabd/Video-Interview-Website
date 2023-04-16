import React from "react";
import Social from "./Social";
import "react-html5video/dist/styles.css";

import styles from "../styles/VideoPlayer.module.css";

const VideoPlayer = (props) => {
  const onVideoChangeHandler = (id) => {
    id + 1 <= props.videos.length - 1
      ? props.onChangeOfVideo(id + 1)
      : props.onChangeOfVideo(0);
  };
  return (
    <>
      <div className={styles.video_container}>
        <h2 className={styles.video_title}>
          {props.videos[props.currentVideo].title}
        </h2>
        <video
          poster={`/images/posters/${
            props.videos[props.currentVideo].poster
          }.png`}
          src={`/videos/${props.videos[props.currentVideo].src}.mp4`}
          controls={true}
          autoPlay={false}
          onEnded={() => onVideoChangeHandler(props.currentVideo)}
        ></video>
        <Social />
      </div>
    </>
  );
};

export default VideoPlayer;
