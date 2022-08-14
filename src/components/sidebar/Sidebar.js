// styled components
import styled from "styled-components";

// assets
import Logo from "../../assets/sidebar/logo.png";
import { ReactComponent as DownIcon } from "../../assets/sidebar/down.svg";
import { ReactComponent as LogoutIcon } from "../../assets/sidebar/logout.svg";
import UserAvatar from "../../assets/sidebar/user-avatar.png";
import Minimise from "../../assets/sidebar/minimise.png";

// import links
import { Links } from "../../constants/Links";

// componenets
import SidebarSearchBar from "./SidebarSearchBar";

const Sidebar = () => {
  return (
    <Wrapper className="global-bg">
      <div className="container side-bar-padding">
        {/* logo start */}
        <div className="logo">
          <img src={Logo} alt="logo" />

          {/* minimise bar */}
          <img src={Minimise} alt="minimise-icon" className="minimise" />
        </div>
        {/* logo-end */}

        {/* search-bar-start */}
        <SidebarSearchBar />
        {/* search-bar-end */}

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

export default Sidebar;

const Wrapper = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
  flex: 2;
  height: 100vh;

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
`;
