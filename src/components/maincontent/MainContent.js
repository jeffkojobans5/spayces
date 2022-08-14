// styled components
import styled from "styled-components";

// components
import SidebarProfile from "./SidebarProfile";
import WelcomeNewProduct from "./WelcomeNewProduct";
import Balances from "./Balances";
import TopPerforming from "./TopPerforming";

const MainContent = () => {
  return (
    <Wrapper>
      <SidebarProfile />
      <WelcomeNewProduct />
      <Balances />
      <TopPerforming />
    </Wrapper>
  );
};

export default MainContent;

const Wrapper = styled.div`
  flex: 9;
`;
