import CommonTable from "../../common/Table/CommonTable";
const MovieCount = () => {
  const movieColumns = [
    { id: "id", label: "ID" },
    { id: "movieName", label: "Movie Name" },
    { id: "uploadedBy", label: "Uploaded By" },
    { id: "uploadedAt", label: "Uploaded At" },
    { id: "category", label: "Category" },
    { id: "movieLength", label: "Movie Length (min)" },
    {
      id: "action",
      label: "ACTIONS",
    },
  ];

  const movieData = [
    {
      id: 1,
      movieName: "Movie A",
      uploadedBy: "User1",
      uploadedAt: "2023-10-15",
      category: "Action",
      movieLength: 120,
    },
    {
      id: 2,
      movieName: "Movie B",
      uploadedBy: "User2",
      uploadedAt: "2023-10-17",
      category: "Drama",
      movieLength: 150,
    },
    {
      id: 3,
      movieName: "Movie C",
      uploadedBy: "User3",
      uploadedAt: "2023-10-20",
      category: "Comedy",
      movieLength: 110,
    },
    {
      id: 4,
      movieName: "Movie D",
      uploadedBy: "User4",
      uploadedAt: "2023-10-22",
      category: "Science Fiction",
      movieLength: 135,
    },
    {
      id: 5,
      movieName: "Movie E",
      uploadedBy: "User5",
      uploadedAt: "2023-10-25",
      category: "Romance",
      movieLength: 128,
    },
    {
      id: 6,
      movieName: "Movie F",
      uploadedBy: "User6",
      uploadedAt: "2023-10-28",
      category: "Thriller",
      movieLength: 145,
    },
    {
      id: 6,
      movieName: "Movie F",
      uploadedBy: "User6",
      uploadedAt: "2023-10-28",
      category: "Thriller",
      movieLength: 145,
    },
    {
      id: 6,
      movieName: "Movie F",
      uploadedBy: "User6",
      uploadedAt: "2023-10-28",
      category: "Thriller",
      movieLength: 145,
    },
    {
      id: 6,
      movieName: "Movie F",
      uploadedBy: "User6",
      uploadedAt: "2023-10-28",
      category: "Thriller",
      movieLength: 145,
    },
    {
      id: 6,
      movieName: "Movie F",
      uploadedBy: "User6",
      uploadedAt: "2023-10-28",
      category: "Thriller",
      movieLength: 145,
    },
  ];

  return (
    <CommonTable
      columns={movieColumns}
      dataGiven={movieData}
      apiEndpoint={"https://jsonplaceholder.typicode.com/photos"}
      action={[
        { action: "Accept", class: "acceptVideo" },
        { action: "Reject", class: "rejectVideo" },
      ]}
    />
  );
};

export default MovieCount;
