// styled components
import styled from "styled-components";

// assets
import { ReactComponent as BlackDownArrow } from "../../assets/maincontent/black.svg";
import { ReactComponent as Question } from "../../assets/maincontent/question.svg";

// components
import LineChart from "./LineChart";
import PieChart from "./PieChart";

const Statistics = () => {
  return (
    <Wrapper>
      <div className="statistics global-main-container">
        <div className="graph-chart">
          <div className="total-activity">
            <div className="total">
              <p className="global-text-light-gray ">
                {" "}
                Total Paid <span className="price"> +2.5%</span>{" "}
              </p>
            </div>
            <div className="activity">
              <p>
                {" "}
                Last 30 days <BlackDownArrow />
              </p>
            </div>
          </div>
          <LineChart />
        </div>
        <div className="pie-chart">
          <div className="total-activity">
            <div className="total">
              <p className="global-text-light-gray "> Order Activity</p>
            </div>
            <div className="activity">
              <p>
                <Question />
              </p>
            </div>
          </div>
          <PieChart />
        </div>
      </div>
    </Wrapper>
  );
};

export default Statistics;

const Wrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;

  .graph-chart {
    flex: 7;
  }
  .statistics {
    display: flex;
    gap: 1rem;

    .graph-chart,
    .pie-chart {
      border: 1px solid #f2f2f2;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
      border-radius: 8px;
      padding: 1rem;
      .total-activity {
        display: flex;

        .total {
          color: #d87407;
          flex: 1;
          p {
            span {
              color: #087443;
              background-color: #edfdf2;
              padding: 0.3rem 0.5rem 0.3rem 0.5rem;
              border-radius: 8px;
              font-size: 0.9rem;
            }
          }
        }

        .activity {
          p {
            svg {
              transform: scale(1.5);
              position: relative;
              top: -5px;
              margin-left: 0.4rem;
            }
          }
        }

        .price {
          flex: 1;
        }
      }
    }

    .pie-chart {
      flex: 5;
    }
  }

  @media only screen and (max-width: 700px) {
    .statistics {
      flex-direction: column;
    }
  }
`;
