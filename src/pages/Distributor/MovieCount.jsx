import CommonTable from "../../common/Table/CommonTable";
import { getAllMoviesDistributor } from "../../services/distributorAction";
const MovieCount = (props) => {
  const movieColumns = [
    { id: "_id", label: "ID" },
    { id: "videoTitle", label: "Movie Name" },
    { id: "uploadedAt", label: "Uploaded At" },
    { id: "category", label: "Category" },
    { id: "movieLength", label: "Movie Length (min)" },
    {
      id: "action",
      label: "ACTIONS",
    },
  ];

  return (
    <CommonTable
      columns={movieColumns}
      api={{ view: getAllMoviesDistributor }}
      action={[
        { action: "Accept", class: "acceptVideo" },
        { action: "Reject", class: "rejectVideo" },
      ]}
      apiProps={{ ...props }}
    />
  );
};

export default MovieCount;
