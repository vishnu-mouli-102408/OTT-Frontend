// CommonTable.js
import React, { useEffect, useState } from "react";
import "./CommonTable.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Button,
} from "@mui/material";
import displaySnackbar from "./Snackbar/Snackbar";

function CommonTable({
  columns,
  api,
  pageSize = 5,
  initialPage = 0,
  action,
  actionButtonHandler,
  apiProps,
  headers,
}) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(initialPage);
  const [rowsPerPage, setRowsPerPage] = useState(pageSize);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    api.view(apiProps, headers).then((res) => {
      setData(res.data);
      displaySnackbar({ message: "Succefully", type: "success" });
    });
  }, [page, rowsPerPage]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead className="">
            <TableRow className="commonHead">
              {columns.map((column) => (
                <TableCell
                  key={column.field}
                  className="sanFamily"
                  style={{
                    color: "#ffffff",
                    fontSize: "17px",
                    fontWeight: "540",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{ background: "#000", width: "100%" }}>
            {true ? (
              data.map((row) => (
                <TableRow key={row.id} className="commonTabRow">
                  {columns.map((column) =>
                    column.id === "action" ? (
                      <TableCell
                        className="flex-row"
                        style={{ color: "#ffffff" }}
                      >
                        {action.map((item) => {
                          return (
                            <Button
                              variant="outlined"
                              className={`actionItem-margin ${item.class}`}
                              onClick={() =>
                                actionButtonHandler(item.action, row)
                              }
                            >
                              {item.action}
                            </Button>
                          );
                        })}
                      </TableCell>
                    ) : column.format ? (
                      <TableCell className="tableCell" key={column.field}>
                        {column.format(row[column.id], row)}
                      </TableCell>
                    ) : (
                      <TableCell
                        className="tableCell"
                        key={column.field}
                        style={{ color: "#ffffff" }}
                      >
                        {row[column.id] || "Test"}
                      </TableCell>
                    )
                  )}
                </TableRow>
              ))
            ) : (
              <div
                style={{
                  color: "#black",
                  textAlign: "center",
                  width: "100%",
                  fontSize: "18px",
                  fontWeight: "500",
                  background: "#ffffff",
                }}
              >
                No data Found
              </div>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50]}
        component="div"
        count={10}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default CommonTable;
