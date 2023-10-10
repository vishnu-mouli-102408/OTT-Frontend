import CommonTable from "../../common/Table/CommonTable";
import {
  acceptRejectMovie,
  getAllMoviesAdmin,
} from "../../services/adminAction";
const MovieCountAdmin = () => {
  const movieColumns = [
    { id: "_id", label: "ID" },
    { id: "movieName", label: "Movie Name" },
    { id: "uploadedBy", label: "Uploaded By" },
    { id: "uploadedAt", label: "Uploaded At" },
    { id: "category", label: "Category" },
    { id: "movieLength", label: "Movie Length (min)" },
    { id: "key", label: "Movie Link" },
    {
      id: "action",
      label: "ACTIONS",
    },
  ];
  const actionButtonHandler = (action, row) => {
    switch (action) {
      case "Accept":
        acceptRejectMovie({ movieId: row._id, isAccepted: true })
          .then((response) => {
            console.log(response);
          })
          .catch((err) => console.log(err));
        break;
      case "Reject":
        acceptRejectMovie({ movieId: row._id, isRejected: true })
          .then((response) => {
            console.log(response);
          })
          .catch((err) => console.log(err));
        break;
    }
  };
  return (
    <CommonTable
      columns={movieColumns}
      api={{ view: getAllMoviesAdmin }}
      action={[
        { action: "Accept", class: "acceptVideo" },
        { action: "Reject", class: "rejectVideo" },
      ]}
      apiProps={{ accepted: false, rejected: false }}
      actionButtonHandler={actionButtonHandler}
    />
  );
};

export default MovieCountAdmin;
