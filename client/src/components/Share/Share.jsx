import React from "react";
import shareStyle from "./Share.module.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import LabelIcon from "@mui/icons-material/Label";
import RoomIcon from "@mui/icons-material/Room";
import img1 from "../image/p3.jpg";
const Share = () => {
  return (
    <div className={shareStyle.share}>
      <div className={shareStyle.shareWrapper}>
        <div className={shareStyle.shareTop}>
          <img className={shareStyle.shareProfileImg} src={img1} alt="" />
          <input
            placeholder="what's in your mind tarek"
            className={shareStyle.shareInput}
          />
        </div>
        <hr className={shareStyle.shareHr} />
        <div className={shareStyle.shareBottom}>
          <div className={shareStyle.shareOptions}>
            <div className={shareStyle.shareOption}>
              <PermMediaIcon
                htmlColor="tomato"
                className={shareStyle.shareIcon}
              />
              <span className={shareStyle.shareOptionText}>Photo or Video</span>
            </div>
            <div className={shareStyle.shareOption}>
              <LabelIcon htmlColor="blue" className={shareStyle.shareIcon} />
              <span className={shareStyle.shareOptionText}>Tag</span>
            </div>
            <div className={shareStyle.shareOption}>
              <RoomIcon htmlColor="green" className={shareStyle.shareIcon} />
              <span className={shareStyle.shareOptionText}>Location</span>
            </div>
            <div className={shareStyle.shareOption}>
              <EmojiEmotionsIcon
                htmlColor="goldenrod"
                className={shareStyle.shareIcon}
              />
              <span className={shareStyle.shareOptionText}>Feelings</span>
            </div>
          </div>
          <button className={shareStyle.shareButton}>Share</button>
        </div>
      </div>
    </div>
  );
};
export default Share;
