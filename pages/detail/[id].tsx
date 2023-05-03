import Footer from "@/components/organism/Footer";
import TopupItem from "@/components/organism/TopUpItem";
import TopupForm from "@/components/organism/TopupForm";
import Navbar from "@/components/organism/navbar";
import { getVoucherDetail } from "@/services/player";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";

const Index = () => {
  const { query, isReady } = useRouter();
  const [detailVoucher, setDetailVoucher] = useState({
    name: "",
    thumbnail: "",
    category: { name: "" },
  });

  const [nominals, setNominals] = useState([]);
  const [payments, setPayments] = useState([]);

  const getVoucherDetailAPI = useCallback(async (id: any) => {
    const data = await getVoucherDetail(id);
    setDetailVoucher(data.details);
    setNominals(data.details.nominals);
    setPayments(data.payment);
  }, []);

  useEffect(() => {
    if (isReady) {
      getVoucherDetailAPI(query.id);
    }
  }, [isReady]);

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
              <TopupItem type="mobile" data={detailVoucher} />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              {/* <!-- Desktop: Game title --> */}
              <TopupItem type="desktop" data={detailVoucher} />
              <hr />
              <TopupForm nominals={nominals} payments={payments} />
            </div>
          </div>
          ;
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Index;
