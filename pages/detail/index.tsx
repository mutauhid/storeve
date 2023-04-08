import Footer from "@/components/organism/Footer";
import TopupItem from "@/components/organism/TopUpItem";
import TopupForm from "@/components/organism/TopupForm";
import Navbar from "@/components/organism/navbar";
import React from "react";

const Index = () => {
  return (
    <>
      <Navbar />
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
              Top Up
            </h2>
            <p className="text-lg color-palette-1 mb-0">
              Perkuat akun dan jadilah pemenang
            </p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <div className="row align-items-center">
                <div className="col-md-12 col-4">
                  <img
                    src="/img/Thumbnail-3.png"
                    width="280"
                    height="380"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                {/* <!-- Mobile: Game title --> */}
                <div className="col-md-12 col-8 d-md-none d-block">
                  <TopupItem type="mobile" />
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              {/* <!-- Desktop: Game title --> */}
              <TopupItem type="desktop" />
              <hr />
              <TopupForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Index;
