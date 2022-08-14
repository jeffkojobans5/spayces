// styled components
import styled from "styled-components";

// assets
import RedArrow from "../../assets/maincontent/red-arrow.png";
import Graph from "../../assets/maincontent/graph.png";

// props
import BalanceProps from "../../props/maincontent/BalanceProps";

const Balances = () => {
  return (
    <Wrapper>
      <div className="balances">
        <div className="global-main-container create-three-columns">
          <BalanceProps amount="GHS 10,000.00" desc="Store Balance">
            <div className="rate">
              <div className="rate-amount">
                <p>
                  <img src={RedArrow} alt="rate" /> 95%{" "}
                </p>
              </div>
              <div className="rate-graph">
                <img src={Graph} alt="rate" />
              </div>
            </div>
          </BalanceProps>
          <BalanceProps amount="8" desc="Active Products" />
          <BalanceProps amount="10" desc="New Orders" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Balances;

const Wrapper = styled.div`
  .create-three-columns {
    display: grid;
    margin-top: 2rem;
    grid-gap: 0.5rem;
    grid-template-columns: repeat(3, 1fr);
  }
`;
