import Sidebar from "@/components/organism/Sidebar";
import TransactionDetail from "@/components/organism/TransactionDetailContent";
import { historyTransactionTypes } from "@/services/DataTypes";
import { getTransactionDetail } from "@/services/player";

interface transactionDetailProps {
  transactionDetail: historyTransactionTypes;
}

const Detail = (props: transactionDetailProps) => {
  const { transactionDetail } = props;
  return (
    <>
      <section className="transactions-detail overflow-auto">
        <section className="sidebar">
          <Sidebar activeMenu="transactions" />
        </section>
        <TransactionDetail data={transactionDetail} />
      </section>
    </>
  );
};

export default Detail;

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
  params: {
    idTrx: string;
  };
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { token } = req.cookies;
  const { idTrx } = params;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }
  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  const response = await getTransactionDetail(idTrx, jwtToken);
  return {
    props: {
      transactionDetail: response.data,
    },
  };
}
