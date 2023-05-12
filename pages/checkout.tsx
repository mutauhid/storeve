import CheckoutConfirm from "@/components/organism/CheckoutConfirm";
import CheckoutDetail from "@/components/organism/CheckoutDetail";
import CheckoutItem from "@/components/organism/CheckoutItem";
import { UserTypes } from "@/services/DataTypes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import Link from "next/link";

interface CheckoutTypes {
  user: UserTypes;
}

const Checkout = (props: CheckoutTypes) => {
  const { user } = props;

  return (
    <>
      <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
        <div className="container-fluid">
          <div className="logo text-md-center text-start pb-50">
            <Link href="/" legacyBehavior>
              <a className="">
                <Image
                  src={"/icon/logo.svg"}
                  width={60}
                  height={60}
                  alt="logo"
                />
              </a>
            </Link>
          </div>
          <div className="title-text pt-md-50 pt-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
            <p className="text-lg color-palette-1 mb-0">
              Waktunya meningkatkan cara bermain
            </p>
          </div>

          <CheckoutItem />
          <hr />
          <CheckoutDetail />
          <CheckoutConfirm />
        </div>
      </section>
    </>
  );
};

export default Checkout;

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
