import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import TableRow from "./TableRow";
import { getOverview } from "@/services/player";
import { toast } from "react-toastify";

const OverviewContent = () => {
  const [counts, setCounts] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getDashboard = async () => {
      const response = await getOverview();
      if (response.error) {
        toast.error(response.msg);
      } else {
        setCounts(response.data.count);
        setData(response.data.dashboard);
      }
    };
    getDashboard();
  }, []);

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              {counts.map((count) => {
                return (
                  <Categories image={`overview-desktop`} money={count.value}>
                    {count.name}
                  </Categories>
                );
              })}
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
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => {
                  return (
                    <TableRow
                      image={`${item.historyVoucherTopup.thumbnail}`}
                      title={item.historyVoucherTopup.gameName}
                      category={item.historyVoucherTopup.category}
                      item={item.historyVoucherTopup.coinQuantity}
                      coinName={item.historyVoucherTopup.coinName}
                      price={item.value}
                      status={item.status}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OverviewContent;
