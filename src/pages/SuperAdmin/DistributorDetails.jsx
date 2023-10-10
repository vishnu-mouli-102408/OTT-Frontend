import React from "react";
import CommonTable from "../../common/Table/CommonTable";
import {
  acceptRejectDistributor,
  getDistributors,
} from "../../services/adminAction";
const DistributorDetails = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const actionButtonHandler = (action, row) => {
    switch (action) {
      case "Accept":
        // const { distributorId, isAccepted = false, isRejected = false } = data;

        acceptRejectDistributor({ distributorId: row._id, isAccepted: true })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));

        break;
      case "Reject":
        acceptRejectDistributor({ distributorId: row._id, isRejected: true })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
        break;
    }
  };

  const columns = [
    {
      id: "_id",
      label: "DISTRIBUTOR ID",
    },
    {
      id: "username",
      label: "NAME",
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
  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlByYXZlZW4gZGRkIiwiZW1haWwiOiJwcmF2ZWVucHJha2FzaDExMEBnbWFpbC5jb20iLCJpYXQiOjE2OTY4NzA2MjYsImV4cCI6MTY5NzEyOTgyNn0.arCFBunk4dciH4W5nJzW3sKata8aUqBaCDh_zLdHmL8`;

  return (
    <>
      <CommonTable
        columns={columns}
        actionButtonHandler={actionButtonHandler}
        api={{ view: getDistributors }}
        action={[
          { action: "Accept", class: "acceptVideo" },
          { action: "Reject", class: "rejectVideo" },
        ]}
        apiProps={{ accepted: false, rejected: false }}
        headers={{ Authorization: `Bearer ${token}` }}
      />
    </>
  );
};

export default DistributorDetails;
