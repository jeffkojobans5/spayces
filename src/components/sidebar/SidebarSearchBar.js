// styled components
import styled from "styled-components";

// Search Icon
import { ReactComponent as SearchIcon } from "../../assets/sidebar/search-icon.svg";

const SidebarSearch = () => {
  return (
    <Wrapper>
      <form className="side-bar-search">
        <SearchIcon />
        <input type="text" placeholder="Search" />
      </form>
    </Wrapper>
  );
};

export default SidebarSearch;

const Wrapper = styled.div`
  .side-bar-search {
    background-color: #4b4b4b;
    padding: 0.5rem;
    border-radius: 8px;
    display: flex;
    gap: 0.6rem;
    margin-top: 1.5rem;

    input {
      width: 100%;
      background-color: transparent;
      outline: none;
      box-shadow: none !important;
      border: none;
      font-family: "Inter", sans-serif;
      color: white;
      font-size: 0.9rem;
    }

    svg {
      margin-left: 0.5rem;
    }
  }
`;
