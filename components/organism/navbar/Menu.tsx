import cx from "classnames";
import Link from "next/link";

interface MenuProps {
  title: string;
  active?: boolean;
  href: string;
}

const Menu = (props: Partial<MenuProps>) => {
  const { title, active, href = "/" } = props;

  const activeTitle = cx({
    "nav-link": true,
    active: active,
  });
  return (
    <li className="nav-item my-auto">
      <Link legacyBehavior href={href}>
        <a className={activeTitle} aria-current="page">
          {title}
        </a>
      </Link>
    </li>
  );
};

export default Menu;
