// styled components
import styled from "styled-components";

// assets
import Curology from "../../assets/maincontent/curology.png";
import Rose from "../../assets/maincontent/rose.png";
import Narciso from "../../assets/maincontent/narciso.png";

// props
import TopPerformingProps from "../../props/maincontent/TopPerformingProps";

const TopPerforming = () => {
  return (
    <Wrapper>
      <div className="balances">
        <div className="global-main-container">
          <h3 className="global-text-gray">Top Performing Products</h3>
          <p className="global-text-light-gray">
            Here a some products people seem to love from you
          </p>
          <div className="create-three-columns">
            <TopPerformingProps
              image={Curology}
              price="$27.99"
              desc="Curology skin cleanser"
            />
            <TopPerformingProps
              image={Rose}
              price="$27.99"
              desc="Curology skin cleanser"
            />
            <TopPerformingProps
              image={Narciso}
              price="$27.99"
              desc="Curology skin cleanser"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default TopPerforming;

const Wrapper = styled.div`
  margin-top: 8rem;

  .global-main-container {
    h3 {
      font-weight: 500;
    }
    p {
      margin-top: 0.7rem;
    }
  }
  .create-three-columns {
    display: grid;
    margin-top: 2rem;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(3, 1fr);
  }
`;
