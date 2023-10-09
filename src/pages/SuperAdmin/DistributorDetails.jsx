import React from "react";
import CommonTable from "../../common/Table/CommonTable";
const DistributorDetails = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const columns = [
    {
      id: "id",
      label: "DISTRIBUTOR ID",
    },
    {
      id: "name",
      label: "MOVIE NAME",
    },
    {
      id: "phoneNumber",
      label: "PHONE",
    },
    {
      id: "email",
      label: "EMAIL",
    },
    {
      id: "action",
      label: "ACTIONS",
    },
  ];
  const distributorData = [
    {
      id: 1,
      name: "Rajesh Kumar",
      phoneNumber: "98765 43210",
      email: "rajesh@example.com",
    },
    {
      id: 2,
      name: "Pooja Sharma",
      phoneNumber: "99888 77666",
      email: "pooja@example.com",
    },
    {
      id: 3,
      name: "Amit Singh",
      phoneNumber: "78901 23456",
      email: "amit@example.com",
    },
    {
      id: 4,
      name: "Priya Gupta",
      phoneNumber: "87654 32109",
      email: "priya@example.com",
    },
    {
      id: 5,
      name: "Sandeep Verma",
      phoneNumber: "77777 88888",
      email: "sandeep@example.com",
    },
    {
      id: 1,
      name: "Rajesh Kumar",
      phoneNumber: "98765 43210",
      email: "rajesh@example.com",
    },
    {
      id: 2,
      name: "Pooja Sharma",
      phoneNumber: "99888 77666",
      email: "pooja@example.com",
    },
  ];
  return (
    <CommonTable
      columns={columns}
      dataGiven={distributorData}
      apiEndpoint={"https://jsonplaceholder.typicode.com/photos"}
      action={[
        { action: "Accept", class: "acceptVideo" },
        { action: "Reject", class: "rejectVideo" },
      ]}
    />
  );
};

export default DistributorDetails;
