import Sidebar from "@/components/organism/Sidebar";
import TransactionDetail from "@/components/organism/TransactionDetailContent";

const Detail = () => {
  return (
    <>
      <section className="transactions-detail overflow-auto">
        <section className="sidebar">
          <Sidebar activeMenu="transactions" />
        </section>
        <TransactionDetail />
      </section>
    </>
  );
};

export default Detail;
