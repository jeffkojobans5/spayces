import { useState } from "react";

// styled components
import styled from "styled-components";

// components
import SidebarProfile from "./SidebarProfile";
import WelcomeNewProduct from "./WelcomeNewProduct";
import Balances from "./Balances";
import TopPerforming from "./TopPerforming";
import Orders from "./Orders";
import Statistics from "./Statistics";
import MobileHeader from "../MobileHeader";
import MobileSideBar from "../sidebar/MobileSideBar";

const MainContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <MobileHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <MobileSideBar isOpen={isOpen} />}
      <SidebarProfile />
      <WelcomeNewProduct />
      <Balances />
      <Orders />
      <TopPerforming />
      <Statistics />
    </Wrapper>
  );
};

export default MainContent;

const Wrapper = styled.div`
  flex: 9;
`;
