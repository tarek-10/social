import React from "react";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Test from "../../components/Test/Test";
import profileStyle from "./Profile.module.css";
import img1 from "../../components/image/post3.jpg";
import img2 from "../../components/image/p10.jpg";
const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Test />
      <div className={profileStyle.profile}>
        <Sidebar />
        <div className={profileStyle.profileRight}>
          <div className={profileStyle.profileRightTop}>
            <div className={profileStyle.profileCover}>
              <img className={profileStyle.profileCoverImg} src={img1} alt="" />
              <img className={profileStyle.profileUserImg} src={img2} alt="" />
            </div>
            <div className={profileStyle.profileInfo}>
              <h4 className={profileStyle.profileInfoName}>Tarek mohamed</h4>
              <span className={profileStyle.profileInfoDesc}>
                hello my friends
              </span>
            </div>
          </div>
          <div className={profileStyle.profileRightBottom}>
            <Feed />
            <Rightbar Profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
