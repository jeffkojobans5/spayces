// styled components
import styled from "styled-components";

// Search Icon
import { ReactComponent as SearchIcon } from "../../assets/maincontent/search-icon.svg";
import ProfilePic from "../../assets/maincontent/profilepic.png";

const SidebarProfile = () => {
  return (
    <Wrapper>
      <div className="search-profilePic">
        <div className="global-main-container flex-search-profilePic ">
          <div className="search">
            <form className="side-bar-search">
              <SearchIcon />
              <input type="text" placeholder="Search" />
            </form>
          </div>
          <div className="profilePic">
            <img src={ProfilePic} alt="profilePic" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SidebarProfile;

const Wrapper = styled.div`
  .search-profilePic {
    margin-top: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #e5e5e5;
  }

  .flex-search-profilePic {
    display: flex;
    align-items: center;
  }

  .search {
    flex: 4;
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
  .profilePic {
    flex: 8;
    display: flex;
    justify-content: end;
    align-items: center;
  }

  @media only screen and (max-width: 700px) {
    .profilePic {
      display: none;
    }
  }
`;
