import Image from "next/image";
import { ReactNode } from "react";
import { NumericFormat } from "react-number-format";

interface CategoriesProps {
  children: ReactNode;
  money: number;
  image: "overview-desktop" | "overview-mobile" | "overview-other";
}
const Categories = (props: CategoriesProps) => {
  const { children, money, image } = props;
  return (
    <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
      <div className="categories-card">
        <div className="d-flex align-items-center mb-24">
          <Image
            src={`icon/${image}.svg`}
            width={60}
            height={60}
            alt="categories"
          />
          <p className="color-palette-1 mb-0 ms-12">{children}</p>
        </div>
        <div>
          <p className="text-sm color-palette-2 mb-1">Total Spent</p>
          <p className="text-2xl color-palette-1 fw-medium m-0">
            {" "}
            <NumericFormat
              value={money}
              prefix="Rp. "
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
