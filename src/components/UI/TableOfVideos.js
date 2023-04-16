import React from "react";
import styles from "../styles/VideoCarousel.module.css";

import play from "../play.svg";

const TableOfVideos = (props) => {
  const onVideoChangeHandler = (id) => {
    props.onChangeOfVideo(id);
  };

  let totalMins = 0;
  let totalSecs = 0;
  for (let item of props.videos) {
    totalMins += item.mins;
    totalSecs += item.secs;
  }
  totalMins += Math.trunc(totalSecs / 60);
  totalSecs -= Math.trunc(totalSecs / 60) * 60;

  return (
    <>
      <section className={styles.video_playlist}>
        <h1 className={styles.table_title}>Table of videos</h1>
        <p style={{ color: "green", fontWeight: "bold" }}>
          {" "}
          {props.videos.length} videos &nbsp; {totalMins}m {totalSecs}s
        </p>
        <div className={styles.videos}>
          {props.videos.map((singleVideo, index) => {
            return (
              <div
                key={singleVideo.id}
                className={`${styles.video} ${
                  index === props.currentVideo ? styles.active : ""
                }`}
                onClick={() => onVideoChangeHandler(index)}
              >
                <img src={play} alt="" />
                <p>{singleVideo.id}</p>
                <h3 title={singleVideo.title} className={styles.title}>
                  {singleVideo.title}
                </h3>
                <p className={styles.time}>
                  {singleVideo.mins}:{singleVideo.secs}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default TableOfVideos;
