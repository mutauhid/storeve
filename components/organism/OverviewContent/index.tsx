import React, { useCallback, useEffect, useState } from "react";
import Categories from "./Categories";
import TableRow from "./TableRow";
import { getOverview } from "@/services/player";
import { toast } from "react-toastify";
import {
  historyCategoriesTypes,
  historyTransactionTypes,
} from "@/services/DataTypes";

const OverviewContent = () => {
  const [counts, setCounts] = useState([]);
  const [data, setData] = useState([]);

  const getOverviewAPI = useCallback(async () => {
    const response = await getOverview();
    if (response.error) {
      toast.error(response.msg);
    } else {
      setCounts(response.data.count);
      setData(response.data.dashboard);
    }
  }, []);

  useEffect(() => {
    getOverviewAPI();
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
              {counts.map((count: historyCategoriesTypes) => {
                return (
                  <Categories
                    key={count._id}
                    image={`overview-desktop`}
                    money={count.value}
                  >
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
                {data.map((item: historyTransactionTypes) => {
                  return (
                    <TableRow
                      key={item._id}
                      image={item.historyVoucherTopup.thumbnail}
                      title={item.historyVoucherTopup.gameName}
                      category={item.historyVoucherTopup.category}
                      item={`${item.historyVoucherTopup.coinQuantity} ${item.historyVoucherTopup.coinName}`}
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
