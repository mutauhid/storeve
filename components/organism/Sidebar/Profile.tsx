import { UserTypes } from "@/services/DataTypes";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    avatar: "",
  });

  useEffect(() => {
    const cookies = Cookies.get("token");
    if (cookies) {
      const token = atob(cookies);
      const jwtToken: UserTypes = jwtDecode(token);
      setUser(jwtToken);
    }
  }, []);

  const IMG = process.env.NEXT_PUBLIC_IMG;
  return (
    <div className="user text-center pb-50 pe-30">
      <img
        src={`${IMG}/${user.avatar}`}
        width="90"
        height="90"
        className="img-fluid mb-20"
        style={{ borderRadius: "100%" }}
      />
      <h2 className="fw-bold text-xl color-palette-1 m-0"> {user.username}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
};

export default Profile;
