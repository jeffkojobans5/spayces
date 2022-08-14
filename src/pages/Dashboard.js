// styled components
import styled from "styled-components";

// imported components
import MainContent from "../components/maincontent/MainContent";
import Sidebar from "../components/sidebar/Sidebar";

const Dashboard = () => {
  return (
    <Wrapper>
      {" "}
      <Sidebar /> <MainContent />{" "}
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;
