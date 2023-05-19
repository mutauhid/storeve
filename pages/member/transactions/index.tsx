import Sidebar from "@/components/organism/Sidebar";
import TransactionContent from "@/components/organism/TransactionContent";
import { UserTypes } from "@/services/DataTypes";
import jwtDecode from "jwt-decode";

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

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
}

export async function getServerSideProps({ req }: GetServerSideProps) {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }
  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  const user = jwtDecode<UserTypes>(jwtToken);
  return {
    props: {},
  };
}
