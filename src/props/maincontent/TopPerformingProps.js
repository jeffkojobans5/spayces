// styled components
import styled from "styled-components";

const TopPerforming = (props) => {
  const { image, price, desc } = props;
  return (
    <Wrapper>
      <div className="topPerform-card">
        <img src={image} alt="balance" className="skin-care" />
        <div className="cat-rate">
          <div className="cat">
            <small className="global-text-light-gray"> Skincare </small>
          </div>
          <div className="price">
            <small className="global-text-light-gray"> {price} </small>
          </div>
        </div>
        <p className="desc"> {desc} </p>
      </div>
    </Wrapper>
  );
};

export default TopPerforming;

const Wrapper = styled.div`
  .topPerform-card {
    padding: 1rem;
    border: 1px solid;
    background: #ffffff;
    border: 1px solid #f2f2f2;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;

    img {
      width: 100%;
    }
  }

  .cat-rate {
    margin-top: 0.7rem;
    display: flex;
  }

  .cat {
    flex: 4;

    small {
      text-transform: uppercase;
    }
  }

  .price {
    color: #d87407;

    small {
      color: #d87407;
      background-color: #fff2e4;
      padding: 0.3rem 0.6rem 0.3rem 0.6rem;
      border-radius: 8px;
    }
  }

  .amount-rate {
    display: flex;
  }
  .amount h2 {
    margin-top: 1rem;
    font-weight: 500;
  }

  .amount p {
    font-weight: 400;
  }

  .desc {
    color: black;
    font-weight: 500;
  }
`;
