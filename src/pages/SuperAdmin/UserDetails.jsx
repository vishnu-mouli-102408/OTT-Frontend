import React from "react";
import CommonTable from "../../common/Table/CommonTable";
import { getAllUsers } from "../../services/adminAction";
const UserDetails = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const columns = [
    { id: "_id", label: "ID" },
    { id: "username", label: "Name" },
    { id: "email", label: "Email" },
    { id: "phoneNumber", label: "Phone" },
    // { id: "role", label: "Type" },
  ];

  return (
    <CommonTable
      columns={columns}
      api={{ view: getAllUsers }}
      // action={[{ action: "Delete", class: "deleteUser" }]}
    />
  );
};

export default UserDetails;
