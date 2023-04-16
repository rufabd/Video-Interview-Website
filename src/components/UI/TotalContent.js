import React, { useState } from "react";
import TableOfVideos from "./TableOfVideos";
import VideoPlayer from "./VideoPlayer";
import { videoData } from "../data";
import styles from "../styles/TotalContent.module.css";

const TotalContent = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoChangeHandler = (id) => {
    setCurrentVideo(id);
  };

  return (
    <div className={styles.general_container}>
      <VideoPlayer
        videos={videoData}
        currentVideo={currentVideo}
        onChangeOfVideo={videoChangeHandler}
      />
      <TableOfVideos
        videos={videoData}
        currentVideo={currentVideo}
        onChangeOfVideo={videoChangeHandler}
      />
    </div>
  );
};

export default TotalContent;
