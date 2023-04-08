import Image from "next/image";
import cx from "classnames";

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
}

const MenuItem = (props: MenuProps) => {
  const { title, menu, active } = props;
  const classItem = cx({
    item: true,
    " mb-30": true,
    active,
  });
  return (
    <div className={classItem}>
      <div className="icon me-3">
        <Image src={`icon/${menu}.svg`} width={25} height={25} alt="menu" />
      </div>
      <p className="item-title m-0">
        <a href="" className="text-lg text-decoration-none">
          {title}
        </a>
      </p>
    </div>
  );
};

export default MenuItem;
