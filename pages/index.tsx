import { Inter } from "next/font/google";
import { useEffect } from "react";
import AOS from "aos";
import Navbar from "@/components/organism/navbar";
import MainBanner from "@/components/organism/MainBanner/MainBanner";
import TransactionStep from "@/components/organism/TransactionStep";
import FeatureGame from "@/components/organism/FeatureGame";
import Reached from "@/components/organism/Reached";
import Story from "@/components/organism/Story";
import Footer from "@/components/organism/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* <!-- Navbar --> */}
      <Navbar />

      {/* <!-- Header --> */}
      <MainBanner />

      {/* <!-- 3 Column - Feature --> */}
      <TransactionStep />

      {/* <!-- 5 Column - Featured-game --> */}
      <FeatureGame />

      {/* <!-- Reached --> */}
      <Reached />

      {/* <!-- Story --> */}
      <Story />

      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
}
