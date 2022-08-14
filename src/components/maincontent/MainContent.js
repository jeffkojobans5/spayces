// styled components
import styled from "styled-components";

// components
import SidebarProfile from "./SidebarProfile";
import WelcomeNewProduct from "./WelcomeNewProduct";
import Balances from "./Balances";
import TopPerforming from "./TopPerforming";
import Orders from "./Orders";
import Statistics from "./Statistics";

const MainContent = () => {
  return (
    <Wrapper>
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
