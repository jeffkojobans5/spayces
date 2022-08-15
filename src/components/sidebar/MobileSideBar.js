// styled components
import styled from "styled-components";

// assets
import { ReactComponent as DownIcon } from "../../assets/sidebar/down.svg";
import { ReactComponent as LogoutIcon } from "../../assets/sidebar/logout.svg";
import UserAvatar from "../../assets/sidebar/user-avatar.png";

// import links
import { Links } from "../../constants/Links";

const MobileSideBar = (props) => {
  const { isOpen } = props;

  return (
    <Wrapper
      className="global-bg showSide"
      // style={!isOpen ? { width: "100%" } : { width: "0" }}
      // style={isOpen ? { translateX: "-100%" } : { translateX: "0" }}
    >
      <div className="container side-bar-padding">
        {/* begin-navbar */}
        <nav>
          {Links.map((link, index) => {
            return (
              <div
                className="single-link"
                key={link.id}
                style={
                  link.name === "Home"
                    ? { backgroundColor: "#353535" }
                    : { backgroundColor: "transparent" }
                }
              >
                <div className="icon"> {link?.icon} </div>
                <div className="link-name">{link.name}</div>
                <div className="sublinks-icon">
                  {link.name === "Projects" ? (
                    <>
                      <span className="sub"> 4 </span> <DownIcon />
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
        </nav>
      </div>
      {/* end-navbar */}

      {/* user details begin */}
      <div className="user-account side-bar-padding">
        <div className="image">
          <img src={UserAvatar} alt="user-avatar" />
        </div>
        <div className="user-name">
          <p>
            {" "}
            Paul Rice <br />
            <small className="email"> paulrice@exmaple.com </small>{" "}
          </p>{" "}
        </div>
        <div className="icon">
          <LogoutIcon />
        </div>
      </div>
      {/* user details */}
    </Wrapper>
  );
};

export default MobileSideBar;

const Wrapper = styled.div`
  flex: 2;
  height: 90vh;
  position: absolute;
  width: 90%;
  transform: translateX(-100%);

  .showSide {
    transform: translateX(100%);
  }

  .hideSide {
    transform: translateX(0%);
  }

  .logo {
    img {
      width: 40%;
    }

    .minimise {
      position: absolute;
      width: 30px;
      right: -17px;
      top: 45px;
    }
  }

  nav {
    margin-top: 1.5rem;
  }

  .single-link {
    display: flex;
    font-family: "Inter", sans-serif;
    color: white;
    padding: 0.5rem;
    border-radius: 8px;
    display: flex;
    gap: 0.6rem;
    font-size: 1rem;
    margin-top: 0.7rem;
    justify-content: center;
    align-items: center;

    .icon {
      flex: 1;
      svg {
        margin-left: 0.4rem;
      }
    }

    .link-name {
      flex: 4;
    }

    .sublinks-icon {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;

      .sub {
        display: inline;
        border-radius: 100%;
        background-color: white;
        color: #1e1e1e;
        padding: 0.1rem 0.4rem 0.1rem 0.4rem;
      }

      svg {
        margin-left: 0.7rem;
      }
    }
  }

  .single-link:hover {
    background-color: #353535 !important;
    cursor: pointer;
  }

  .user-account {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid gray;
    border-radius: 0px;
    bottom: 0;
    width: 100%;
    padding: 0.8rem 2rem 1.5rem 2rem;

    .image {
      display: flex;
      justify-content: start;
      align-items: start;
      margin-right: 0.5rem;
      flex: 1;
      img {
        max-width: 100%;
        height: auto;
      }
    }

    .user-name {
      flex: 4;
      color: white;

      p {
        font-size: 1rem;
      }
      .email {
        font-size: 0.6 rem;
      }
    }

    .icon {
      display: flex;
      justify-content: end;
      flex: 1;
    }
  }

  @media only screen and (min-width: 700px) {
    display: none;
  }
`;
