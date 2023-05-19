import Image from "next/image";
import cx from "classnames";
import Link from "next/link";

interface MenuProps {
  title: string;
  menu:
    | "menu-overview"
    | "menu-transaction"
    | "menu-messages"
    | "menu-card"
    | "menu-reward"
    | "menu-settings"
    | "menu-logout";
  active?: boolean;
  href: string;
  onClick?: () => void;
}

const MenuItem = (props: MenuProps) => {
  const { title, menu, active, href, onClick } = props;
  const classItem = cx({
    item: true,
    " mb-30": true,
    active,
  });
  return (
    <div className={classItem}>
      <div className="icon me-3">
        <Image src={`/icon/${menu}.svg`} width={25} height={25} alt="menu" />
      </div>
      <p className="item-title m-0">
        {onClick ? (
          <Link href={href} legacyBehavior onClick={onClick}>
            <a className="text-lg text-decoration-none">{title}</a>
          </Link>
        ) : (
          <a href={href} className="text-lg text-decoration-none">
            {title}
          </a>
        )}
      </p>
    </div>
  );
};

export default MenuItem;
