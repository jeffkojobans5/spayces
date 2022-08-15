import { useState } from "react";

// styled components
import styled from "styled-components";

// Search Icon
import Logo from "../assets/sidebar/logo.png";
import Hamburger from "../assets/maincontent/hamburger.png";
import Close from "../assets/maincontent/close.png";

const SidebarProfile = (props) => {
  const { isOpen, setIsOpen } = props;

  const showMobleMenu = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <div className="mobile-menu">
        <div className="global-main-container">
          <div className="flex-mobile-menu">
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="profilePic">
              {!isOpen && (
                <img
                  src={Hamburger}
                  alt="menu-mobile"
                  onClick={(e) => showMobleMenu(e)}
                />
              )}
              {isOpen && (
                <img
                  src={Close}
                  alt="menu-mobile"
                  onClick={(e) => showMobleMenu(e)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SidebarProfile;

const Wrapper = styled.div`
  background-color: #1e1e1e;

  .flex-mobile-menu {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 1.3rem 0rem;
  }

  .logo {
    flex: 4;

    img {
      width: 30%;
    }
  }

  .profilePic img {
    cursor: pointer;
  }

  .side-bar-search {
    border: 1px solid #e5e5e5;
    padding: 0.5rem;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;

    input {
      width: 100%;
      background-color: transparent;
      outline: none;
      box-shadow: none !important;
      border: none;
      font-family: "Inter", sans-serif;
      color: black;
      font-size: 1rem;
    }
  }

  .hamburger {
    flex: 8;
    display: flex;
    justify-content: end;
    align-items: center;
  }

  @media only screen and (min-width: 700px) {
    display: none !important;
  }
`;
