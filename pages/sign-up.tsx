import SignupForm from "@/components/organism/Sign-upForm";
import Image from "next/image";
import React from "react";

const Signup = () => {
  return (
    <>
      <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
        <div className="container mx-auto">
          <form action="">
            <div className="pb-50">
              <a className="navbar-brand" href="../index.html">
                <Image
                  src={"/icon/logo.svg"}
                  alt="logo"
                  width={60}
                  height={60}
                />
              </a>
            </div>
            <SignupForm />
          </form>
        </div>
      </section>
    </>
  );
};

export default Signup;
