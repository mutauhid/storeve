import Image from "next/image";
import cx from "classnames";
import { NumericFormat } from "react-number-format";

interface TableProps {
  title: string;
  category: string;
  item: string;
  price: number;
  status: string;
  image: string;
}

function TableRow(props: TableProps) {
  const { title, category, item, price, image, status } = props;
  const classStatus = cx({
    "float-start icon-status": true,
    pending: status === "pending",
    success: status === "success",
    failed: status === "failed",
  });

  const IMG = process.env.NEXT_PUBLIC_IMG;
  return (
    <tr className="align-middle">
      <th scope="row">
        <Image
          className="float-start me-3 mb-lg-0 mb-3"
          src={`${IMG}/${image}`}
          width={80}
          height={60}
          alt=""
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {category}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item}</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">
          <NumericFormat
            value={price}
            prefix="Rp. "
            thousandSeparator="."
            decimalSeparator=","
            displayType="text"
          />
        </p>
      </td>
      <td>
        <div>
          <span className={classStatus}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
    </tr>
  );
}

export default TableRow;
