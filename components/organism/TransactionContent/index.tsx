import TableRow from "./TableRow";
import ButtonStatus from "./ButtonStatus";
import { useCallback, useEffect, useState } from "react";
import { getMemberTransaction } from "@/services/player";
import { toast } from "react-toastify";
import { NumericFormat } from "react-number-format";
import { historyTransactionTypes } from "@/services/DataTypes";

const TransactionContent = () => {
  const [total, setTotal] = useState(0);
  const [history, setHistory] = useState([]);
  const [tab, setTab] = useState("");

  const getMemberTransactionAPI = useCallback(async (value: string) => {
    const response = await getMemberTransaction(value);
    if (response.error) {
      toast.error(response.msg);
    } else {
      setTotal(response.data.total);
      setHistory(response.data.history);
    }
  }, []);

  useEffect(() => {
    getMemberTransactionAPI("all");
  }, []);

  const onTabClick = (value: string) => {
    setTab(value);
    getMemberTransactionAPI(value);
  };

  return (
    <>
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">
            My Transactions
          </h2>
          <div className="mb-30">
            <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
            <h3 className="text-5xl fw-medium color-palette-1">
              <NumericFormat
                value={total}
                prefix="Rp. "
                thousandSeparator="."
                decimalSeparator=","
                displayType="text"
              />
            </h3>
          </div>
          <div className="row mt-30 mb-20">
            <div className="col-lg-12 col-12 main-content">
              <div id="list_status_title">
                <ButtonStatus
                  onClick={() => onTabClick("all")}
                  title="All Trx"
                  active
                />
                <ButtonStatus
                  onClick={() => onTabClick("success")}
                  title="Success"
                  active={false}
                />
                <ButtonStatus
                  onClick={() => onTabClick("pending")}
                  title="Pending"
                  active={false}
                />
                <ButtonStatus
                  onClick={() => onTabClick("failed")}
                  title="Failed"
                  active={false}
                />
              </div>
            </div>
          </div>
          <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">
              Latest Transactions
            </p>
            <div className="main-content main-content-table overflow-auto">
              <table className="table table-borderless">
                <thead>
                  <tr className="color-palette-1">
                    <th className="" scope="col">
                      Game
                    </th>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody id="list_status_item">
                  {history.map((data: historyTransactionTypes) => {
                    return (
                      <TableRow
                        image={data.historyVoucherTopup.thumbnail}
                        title={data.historyVoucherTopup.gameName}
                        category={data.historyVoucherTopup.category}
                        status={data.status}
                        item={`${data.historyVoucherTopup.coinQuantity} ${data.historyVoucherTopup.coinName}`}
                        price={data.value}
                        id={data._id}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default TransactionContent;
