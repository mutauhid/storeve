import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";
import { UserTypes } from "@/services/DataTypes";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [player, setPlayer] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    avatar: "",
  });
  const IMG = process.env.NEXT_PUBLIC_IMG;
  const router = useRouter();

  useEffect(() => {
    const cookies = Cookies.get("token");
    if (cookies) {
      const token = atob(cookies);
      const user = jwt_decode<UserTypes>(token);
      setIsLogin(true);
      setPlayer(user);
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    setIsLogin(false);
    router.push("/");
  };

  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none" />
        <div>
          <a
            className="dropdown-toggle ms-lg-40"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={`${IMG}/${player.avatar}`}
              className="rounded-circle"
              width={40}
              height={40}
              alt=""
            />
          </a>
          <ul
            className="dropdown-menu border-0"
            aria-labelledby="dropdownMenuLink"
          >
            <li>
              <Link href={"/member"} legacyBehavior>
                <a className="dropdown-item text-lg color-palette-2">
                  My Profile
                </a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <a className="dropdown-item text-lg color-palette-2">Wallet</a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <a className="dropdown-item text-lg color-palette-2">
                  Account Settings
                </a>
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={handleLogout}
                className="dropdown-item text-lg color-palette-2"
              >
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </li>
    );
  }
  return (
    <>
      <li className="nav-item my-auto">
        <Link href="/sign-in" legacyBehavior>
          <a
            className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
            href="./src/sign-in.html"
            role="button"
          >
            Sign In
          </a>
        </Link>
      </li>
    </>
  );
};

export default Auth;
