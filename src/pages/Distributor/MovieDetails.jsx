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
      id: "title",
      label: "MOVIE NAME",
    },
    {
      id: "id",
      label: "MOVIE LENGTH",
    },
    {
      id: "url",
      label: "CATEGORY",
    },
    {
      id: "albumId",
      label: "DESCRIPTION",
    },
  ];
  return (
    <CommonTable
      columns={columns}
      apiEndpoint={"https://jsonplaceholder.typicode.com/photos"}
    />
  );
};

export default DistributorDetails;
