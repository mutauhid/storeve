import Link from "next/link";

interface AuthProps {
  isLogin?: boolean;
}
const Auth = (props: AuthProps) => {
  const { isLogin } = props;
  if (isLogin) {
    return (
      <>
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
                src="/img/avatar-1.png"
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
                <Link legacyBehavior href={"/member"}>
                  <a className="dropdown-item text-lg color-palette-2">
                    My Profile
                  </a>
                </Link>
              </li>
              <li>
                <a className="dropdown-item text-lg color-palette-2" href="#">
                  Wallet
                </a>
              </li>
              <li>
                <a className="dropdown-item text-lg color-palette-2" href="#">
                  Account Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item text-lg color-palette-2" href="#">
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </li>
      </>
    );
  }
  return (
    <>
      <li className="nav-item my-auto">
        <Link legacyBehavior href="/sign-in">
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
