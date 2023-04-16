import React from "react";
import { SocialIcon } from "react-social-icons";
import styles from "../styles/Social.module.css";

const Social = () => {
  return (
    <div style={{ paddingLeft: "30px", paddingTop: "10px" }}>
      <div style={{ display: "flex" }}>
        <h2 style={{ color: "white", marginRight: "30px" }}>
          Get in touch with me
        </h2>
        <SocialIcon
          className={styles.social_linkedin}
          style={{ marginRight: "30px", marginTop: "10px" }}
          // fgColor="#0072b1"
          bgColor="#black"
          url={"https://www.linkedin.com/in/rufat-abdullayev/"}
        />
        <SocialIcon
          className={styles.social_instagram}
          bgColor="#black"
          style={{ marginTop: "10px", marginRight: "30px" }}
          url={"https://instagram.com/rufat.abd?igshid=YmMyMTA2M2Y="}
        />
        <SocialIcon
          bgColor="#black"
          className={styles.social_github}
          // fgColor="white"
          style={{ marginTop: "10px", marginRight: "30px" }}
          url={"https://github.com/rufabd?tab=repositories"}
        />
        <SocialIcon
          bgColor="black"
          className={styles.social_telephone}
          // fgColor="green"
          style={{ marginTop: "10px" }}
          url={"tel:+37253160278"}
        />
      </div>
    </div>
  );
};

export default Social;
