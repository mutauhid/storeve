interface DetailProps {
  label: string;
  value: string | number;
  className?: string;
}

const DetailRow = (props: DetailProps) => {
  const { label, value, className } = props;
  return (
    <p className="text-lg color-palette-1 mb-20">
      {label}
      <span className={`purchase-details ${className}`}>{value} </span>
    </p>
  );
};

export default DetailRow;