import React from "react";
import CommonTable from "../../common/Table/CommonTable";
const UserDetails = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const columns = [
    { id: "id", label: "ID" },
    { id: "name", label: "Name" },
    { id: "email", label: "Email" },
    { id: "phone", label: "Phone" },
    { id: "country", label: "Country" },
    { id: "status", label: "Status" },
    {
      id: "action",
      label: "ACTION",
    },
  ];

  const userList = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+1-123-456-7890",
      country: "United States",
      status: "Prime",
    },
    {
      id: 2,
      name: "Alice Smith",
      email: "alice@example.com",
      phone: "+1-987-654-3210",
      country: "United States",
      status: "Prime",
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      email: "rajesh@example.com",
      phone: "+91-9876543210",
      country: "India",
      status: "Prime",
    },
    {
      id: 4,
      name: "Sophia Lee",
      email: "sophia@example.com",
      phone: "+1-555-555-5555",
      country: "Canada",
      status: "Non-Prime",
    },
    {
      id: 5,
      name: "Carlos Rodriguez",
      email: "carlos@example.com",
      phone: "+1-333-333-3333",
      country: "Mexico",
      status: "Non-Prime",
    },
    {
      id: 6,
      name: "Lina Chen",
      email: "lina@example.com",
      phone: "+86-10-87654321",
      country: "China",
      status: "Prime",
    },
  ];

  return (
    <CommonTable
      columns={columns}
      dataGiven={userList}
      apiEndpoint={"https://jsonplaceholder.typicode.com/photos"}
      action={[{ action: "Delete", class: "deleteUser" }]}
    />
  );
};

export default UserDetails;
