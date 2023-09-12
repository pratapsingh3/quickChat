import React from "react";
import UserInfo from "./userInfo";
import UserClient from "./userClient";
import UserAnalysis from "./userAnalysis";

const UserProfile = () => {
  return (
    <>
      <div className="main_userActivity">
        <UserInfo />
        <UserAnalysis/>
        <UserClient />
      </div>
    </>
  );
};

export default UserProfile;
