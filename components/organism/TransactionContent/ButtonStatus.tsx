import cx from "classnames";

interface ButtonProps {
  title: string;
  active: boolean;
  onClick: () => void;
}

const ButtonStatus = (props: ButtonProps) => {
  const { title, active, onClick } = props;

  const buttonClass = cx({
    "btn btn-status rounded-pill text-sm  me-3": true,
    "btn-active": active,
  });
  return (
    <button type="button" onClick={onClick} className={buttonClass}>
      {title}
    </button>
  );
};

export default ButtonStatus;
