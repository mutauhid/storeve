import { NumericFormat } from "react-number-format";

interface DetailProps {
  label: string;
  value: string | number;
  className?: string;
}

const DetailRow = (props: Partial<DetailProps>) => {
  const { label, value, className } = props;
  return (
    <p className="text-lg color-palette-1 mb-20">
      {label}
      <span className={`purchase-details ${className}`}>
        {typeof value === "number" ? (
          <NumericFormat
            value={value}
            prefix="Rp. "
            thousandSeparator="."
            decimalSeparator=","
            displayType="text"
          />
        ) : (
          value
        )}
      </span>
    </p>
  );
};

export default DetailRow;
