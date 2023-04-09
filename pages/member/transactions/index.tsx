import Sidebar from "@/components/organism/Sidebar";
import TransactionContent from "@/components/organism/TransactionContent";

const Transactions = () => {
  return (
    <>
      <section className="transactions overflow-auto">
        <section className="sidebar">
          <Sidebar activeMenu="transactions" />
        </section>
        <TransactionContent />
      </section>
    </>
  );
};

export default Transactions;
