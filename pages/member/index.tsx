import OverviewContent from "@/components/organism/OverviewContent";
import Sidebar from "@/components/organism/Sidebar";
import { UserTypes } from "@/services/DataTypes";
import jwtDecode from "jwt-decode";
import React from "react";

const Member = () => {
  return (
    <>
      <section className="overview overflow-auto">
        <Sidebar activeMenu="overview" />
        <OverviewContent />
      </section>
    </>
  );
};

export default Member;

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
    props: {
      user: { user },
    },
  };
}
