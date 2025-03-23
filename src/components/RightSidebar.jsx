import React from "react";
import AgentCard from "./AgentContactCard";
import OffersPopup from "./OffersPopup";
import WhyBuy from "./WhyBuy";

const RightSidebar = ({agent_details}) => {
  return (
    <div className="w-full md:w-80  right-5 top-20 space-y-3">
      <AgentCard  details={agent_details} />
      <OffersPopup />
      <WhyBuy />
    </div>
  );
};

export default RightSidebar;
