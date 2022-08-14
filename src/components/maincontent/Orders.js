// styled components
import styled from "styled-components";

// asset
import ProfilePic from "../../assets/maincontent/profilepic.png";
import GreenArrow from "../../assets/maincontent/green-arrow.png";
import AvatarGroup from "../../assets/maincontent/avatar-group.png";
import Cloud from "../../assets/maincontent/cloud.png";
import Delete from "../../assets/maincontent/delete.png";
import Edit from "../../assets/maincontent/edit.png";
import Next from "../../assets/maincontent/next.png";

// mui
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "fullName",
    headerName: "Full Name",
    width: 300,
    renderCell: (params) => {
      return (
        <div className="info">
          <div className="image">
            <img src={ProfilePic} alt="" />
          </div>
          <div className="name">
            <h3> {params.row.fullName} </h3>
            <small className="global-text-light-gray">
              {" "}
              {params.row.position}{" "}
            </small>
          </div>
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", cellClassName: "bolden", width: 300 },
  {
    field: "thisWeek",
    headerName: "This Week",
    type: "string",
    width: 300,
    renderCell: (params) => {
      return (
        <div className="price">
          <small className="global-text-light-gray">
            {" "}
            <img src={GreenArrow} alt="" /> 17.39{" "}
          </small>
        </div>
      );
    },
  },
  {
    field: "contribution",
    headerName: "Total Contribution",
    type: "string",
    width: 250,
    renderCell: (params) => {
      return (
        <div className="avatar-group">
          <img src={AvatarGroup} alt="" />
        </div>
      );
    },
  },
  {
    field: "actions",
    headerName: "",
    type: "string",
    width: 250,
    cellClassName: "colorings",

    renderCell: (params) => {
      return (
        <div className="actions">
          <div className="images">
            <img src={Cloud} alt="" />
          </div>
          <div className="images">
            <img src={Delete} alt="" />
          </div>
          <div className="images">
            <img src={Edit} alt="" />
          </div>
          <div className="images">
            <img src={Next} alt="" />
          </div>
        </div>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    fullName: "Justin Markson",
    position: "Sales Manager",
    email: "justinmarkson@example.com",
    firstName: "Jon",
    age: 35,
  },
  {
    id: 2,
    fullName: "Justin Markson",
    position: "Sales Manager",
    email: "justinmarkson@example.com",
    firstName: "Cersei",
    age: 42,
  },
  {
    id: 3,
    fullName: "Justin Markson",
    position: "Sales Manager",
    email: "justinmarkson@example.com",
    firstName: "Jaime",
    age: 45,
  },
  {
    id: 4,
    fullName: "Justin Markson",
    position: "Sales Manager",
    email: "justinmarkson@example.com",
    firstName: "Arya",
    age: 16,
  },
  {
    id: 5,
    fullName: "Justin Markson",
    position: "Sales Manager",
    email: "justinmarkson@example.com",
    firstName: "Daenerys",
    age: null,
  },
  {
    id: 6,
    fullName: "Justin Markson",
    position: "Sales Manager",
    email: "justinmarkson@example.com",
    firstName: null,
    age: 150,
  },
  {
    id: 7,
    fullName: "Justin Markson",
    position: "Sales Manager",
    email: "justinmarkson@example.com",
    firstName: "Ferrara",
    age: 44,
  },
  {
    id: 8,
    fullName: "Justin Markson",
    position: "Sales Manager",
    email: "justinmarkson@example.com",
    firstName: "Rossini",
    age: 36,
  },
  {
    id: 9,
    fullName: "Justin Markson",
    position: "Sales Manager",
    email: "justinmarkson@example.com",
    firstName: "Harvey",
    age: 65,
  },
];

export default function DataTable() {
  return (
    <Wrapper
      className="global-main-container"
      style={{ height: 500, width: "95%" }}
    >
      <div className="cover">
        <h4>
          New Orders <span className="dot">•</span>
          <span className="total-order global-text-light-gray ">
            {" "}
            Total order value: GHS 42,350.00
          </span>
        </h4>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
        }
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 3rem;

  .cover {
    padding: 1.5rem 1rem;
    border: 1px solid #e5e5e5;
    border-bottom: none;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    h4 {
      font-weight: 500;
    }
  }

  .dot {
    margin: 0rem 1rem;
  }
  .bolden {
    font-weight: 600;
    font-size: 1rem;
  }

  .MuiDataGrid-root .MuiDataGrid-columnHeader:focus,
  .MuiDataGrid-root .MuiDataGrid-cell:focus {
    outline: none !important;
  }

  .avatar-group {
    display: flex;
    justify-content: start;
    width: 100%;

    img {
      width: 50%;
    }
  }

  .colorings {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .info {
    display: flex;

    .image {
      flex: 1;
    }

    .name {
      flex: 2;
      margin-left: 0.6rem;

      h3 {
        font-weight: 600;
      }

      small {
        font-size: 0.8rem;
      }
    }
  }

  .total-order {
    font-size: 0.9rem;
  }

  .price {
    color: #d87407;

    small {
      color: #087443;
      background-color: #edfdf2;
      padding: 0.5rem 0.8rem 0.5rem 0.8rem;
      border-radius: 8px;
      font-size: 1rem;
    }
  }

  .actions {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 100%;

    .images {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .MuiDataGrid-columnSeparator svg {
    display: none;
  }

  .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked,
  .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.MuiCheckbox-indeterminate {
    color: #588057;
    border: green;
  }

  .MuiSvgIcon-root path {
    stroke: #d2d2d2 !important;
  }

  .MuiDataGrid-row:nth-child(even) {
    background-color: #f7f7f7;
  }

  .MuiDataGrid-footerContainer {
    display: none;
  }
`;
