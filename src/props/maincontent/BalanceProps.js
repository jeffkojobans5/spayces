// styled components
import styled from "styled-components";

// assets
import BalanceIcon from "../../assets/maincontent/balance.png";

const BalanceProps = (props) => {
  const { amount, desc } = props;
  return (
    <Wrapper>
      <div className="balance-card">
        <p>
          {" "}
          <img src={BalanceIcon} alt="balance" className="balance-icon" />{" "}
          <span className="mobile-text"> {desc} </span>
        </p>
        <div className="amount-rate">
          <div className="amount">
            <h2>{amount} </h2>
            <small className="global-text-light-gray"> {desc} </small>
          </div>
          {props.children}
        </div>
      </div>
    </Wrapper>
  );
};

export default BalanceProps;

const Wrapper = styled.div`
  .balance-card {
    padding: 1rem;
    border: 1px solid;
    background: #ffffff;
    border: 1px solid #f2f2f2;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;

    .balance-icon {
      width: 40px;
    }
  }

  .mobile-text {
    display: none !important;
  }

  .amount {
    flex: 4;
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

  .rate {
    flex: 2;
    display: flex;
    justify-content: end;
    align-items: end;

    .rate-amount {
      flex: 3;
      display: flex;
      justify-content: end;

      p {
        color: #c2434b;

        img {
          margin-right: 0.3rem;
        }
      }
    }
    .rate-graph {
      flex: 3;
      display: flex;
      justify-content: end;

      img {
        width: 75%;
      }
    }
  }

  @media only screen and (max-width: 700px) {
    .profilePic {
      display: none;
    }

    .balance-icon {
      width: 7% !important;
    }

    .mobile-text {
      display: inline !important;
      position: relative;
      top: -7px;
      font-size: 0.9rem;
    }

    .amount small {
      display: none;
    }
  }
`;
