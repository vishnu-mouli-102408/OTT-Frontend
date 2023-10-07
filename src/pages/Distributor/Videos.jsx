import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TablePagination,
} from "@mui/material";
import { Check, Close } from "@mui/icons-material";
import CommonTable from "../../common/Table/CommonTable";

const sampleData = [
  {
    id: 1,
    username: "User1",
    videoTitle: "Video Title 1",
    uploadedAt: "2023-10-01",
    videoLink: "Link 1",
  },
  {
    id: 2,
    username: "User2",
    videoTitle: "Video Title 2",
    uploadedAt: "2023-10-02",
    videoLink: "Link 2",
  },
  {
    id: 1,
    username: "User1",
    videoTitle: "Video Title 1",
    uploadedAt: "2023-10-01",
    videoLink: "Link 1",
  },
  {
    id: 2,
    username: "User2",
    videoTitle: "Video Title 2",
    uploadedAt: "2023-10-02",
    videoLink: "Link 2",
  },
  {
    id: 1,
    username: "User1",
    videoTitle: "Video Title 1",
    uploadedAt: "2023-10-01",
    videoLink: "Link 1",
  },
  {
    id: 2,
    username: "User2",
    videoTitle: "Video Title 2",
    uploadedAt: "2023-10-02",
    videoLink: "Link 2",
  },
  {
    id: 1,
    username: "User1",
    videoTitle: "Video Title 1",
    uploadedAt: "2023-10-01",
    videoLink: "Link 1",
  },
  {
    id: 2,
    username: "User2",
    videoTitle: "Video Title 2",
    uploadedAt: "2023-10-02",
    videoLink: "Link 2",
  },
  {
    id: 1,
    username: "User1",
    videoTitle: "Video Title 1",
    uploadedAt: "2023-10-01",
    videoLink: "Link 1",
  },
  {
    id: 2,
    username: "User2",
    videoTitle: "Video Title 2",
    uploadedAt: "2023-10-02",
    videoLink: "Link 2",
  },
  {
    id: 1,
    username: "User1",
    videoTitle: "Video Title 1",
    uploadedAt: "2023-10-01",
    videoLink: "Link 1",
  },
  {
    id: 2,
    username: "User2",
    videoTitle: "Video Title 2",
    uploadedAt: "2023-10-02",
    videoLink: "Link 2",
  },
  {
    id: 1,
    username: "User1",
    videoTitle: "Video Title 1",
    uploadedAt: "2023-10-01",
    videoLink: "Link 1",
  },
  {
    id: 2,
    username: "User2",
    videoTitle: "Video Title 2",
    uploadedAt: "2023-10-02",
    videoLink: "Link 2",
  },
  {
    id: 1,
    username: "User1",
    videoTitle: "Video Title 1",
    uploadedAt: "2023-10-01",
    videoLink: "Link 1",
  },
  {
    id: 2,
    username: "User2",
    videoTitle: "Video Title 2",
    uploadedAt: "2023-10-02",
    videoLink: "Link 2",
  },
  {
    id: 1,
    username: "User1",
    videoTitle: "Video Title 1",
    uploadedAt: "2023-10-01",
    videoLink: "Link 1",
  },
  {
    id: 2,
    username: "User2",
    videoTitle: "Video Title 2",
    uploadedAt: "2023-10-02",
    videoLink: "Link 2",
  },
  {
    id: 1,
    username: "User1",
    videoTitle: "Video Title 1",
    uploadedAt: "2023-10-01",
    videoLink: "Link 1",
  },
  {
    id: 2,
    username: "User2",
    videoTitle: "Video Title 2",
    uploadedAt: "2023-10-02",
    videoLink: "Link 2",
  },
  {
    id: 1,
    username: "User1",
    videoTitle: "Video Title 1",
    uploadedAt: "2023-10-01",
    videoLink: "Link 1",
  },
  {
    id: 2,
    username: "User2",
    videoTitle: "Video Title 2",
    uploadedAt: "2023-10-02",
    videoLink: "Link 2",
  },
  // Add more sample data here
];

const rowsPerPageOptions = [5, 10, 25, sampleData.length];

const VideoTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);
    setPage(0);
  };

  // Calculate the start and end indexes for the current page
  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const actionButtonHandler = (action, row) => {
    switch (action) {
      case "Accept":
        alert("Accept Action");
        break;
      case "Reject":
        alert("Reject action");
        break;
    }
  };

  return (
    // <div>
    //   <TableContainer component={Paper}>
    //     <Table>
    //       <TableHead style={{ backgroundColor: "#007bff", color: "white" }}>
    //         <TableRow>
    //           <TableCell>Username</TableCell>
    //           <TableCell>Video Title</TableCell>
    //           <TableCell>Uploaded At</TableCell>
    //           <TableCell>Video Link</TableCell>
    //           <TableCell>Actions</TableCell>
    //         </TableRow>
    //       </TableHead>
    //       <TableBody>
    //         {sampleData.slice(startIndex, endIndex).map((row) => (
    //           <TableRow key={row.id}>
    //             <TableCell>{row.username}</TableCell>
    //             <TableCell>{row.videoTitle}</TableCell>
    //             <TableCell>{row.uploadedAt}</TableCell>
    //             <TableCell>{row.videoLink}</TableCell>
    //             <TableCell>
    //               <Button
    //                 variant="contained"
    //                 color="success"
    //                 startIcon={<Check />}
    //                 onClick={() => handleAccept(row.id)}
    //               >
    //                 {/* Empty label to make it without text */}
    //               </Button>
    //               <Button
    //                 variant="contained"
    //                 color="error"
    //                 startIcon={<Close />}
    //                 onClick={() => handleReject(row.id)}
    //               >
    //                 {/* Empty label to make it without text */}
    //               </Button>
    //             </TableCell>
    //           </TableRow>
    //         ))}
    //       </TableBody>
    //     </Table>
    //   </TableContainer>
    //   <TablePagination
    //     rowsPerPageOptions={rowsPerPageOptions}
    //     component="div"
    //     count={sampleData.length}
    //     rowsPerPage={rowsPerPage}
    //     page={page}
    //     onPageChange={handleChangePage}
    //     onRowsPerPageChange={handleChangeRowsPerPage}
    //   />
    // </div>
    <CommonTable
      columns={[
        {
          id: "userId",
          label: "USERID",
          format: (value, row) => {
            // console.log(value, row);
            //manipusaltions like dayjs Date
            return <div>User with Format {value}</div>;
          },
        },
        { id: "id", label: "ID" },
        { id: "title", label: "TITLE" },
        { id: "action", label: "ACTIONS" },
      ]}
      apiEndpoint={"https://jsonplaceholder.typicode.com/posts"}
      action={[
        { action: "Accept", class: "acceptVideo" },
        { action: "Reject", class: "rejectVideo" },
      ]}
      actionButtonHandler={actionButtonHandler}
    />
  );
};

const handleAccept = (videoId) => {
  // Implement your logic for accepting the video here
  console.log(`Accepted video with ID: ${videoId}`);
};

const handleReject = (videoId) => {
  // Implement your logic for rejecting the video here
  console.log(`Rejected video with ID: ${videoId}`);
};

export default VideoTable;
