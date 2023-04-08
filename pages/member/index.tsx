import OverviewContent from "@/components/organism/OverviewContent";
import Sidebar from "@/components/organism/Sidebar";
import React from "react";

const Member = () => {
  return (
    <>
      <section className="overview overflow-auto">
        <Sidebar />
        <OverviewContent />
      </section>
    </>
  );
};

export default Member;
