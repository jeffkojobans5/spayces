// styled components
import styled from "styled-components";

const WelcomeNewProduct = () => {
  return (
    <Wrapper>
      <div className="welcome-new-product">
        <div className="global-main-container flex-welcome">
          <div className="welcome">
            <h3 className="global-text-gray"> Welcome back</h3>
            <p className="global-text-light-gray">
              Here is an overview of what is going on in your store
            </p>
          </div>
          <div className="product">
            <button className="new-product"> New Product </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default WelcomeNewProduct;

const Wrapper = styled.div`
  .welcome-new-product {
    margin-top: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #e5e5e5;
  }

  .flex-welcome {
    display: flex;
    align-items: center;
  }

  .welcome {
    h3 {
      font-weight: 600;
    }
    p {
      margin-top: 0.7rem;
    }
  }

  .product {
    flex: 8;
    display: flex;
    justify-content: end;
    align-items: center;

    button {
      border: none;
      padding: 0.6rem 1rem 0.8rem 1rem;
      font-size: 1rem;
      font-family: "Inter", sans-serif;
      background-color: #588057;
      color: white;
      border-radius: 8px;
    }
  }

  @media only screen and (max-width: 700px) {
    .product {
      display: none;
    }
  }
`;
