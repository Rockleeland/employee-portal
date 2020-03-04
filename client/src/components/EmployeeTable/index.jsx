import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    background: "#424242",
    color: "white"
  }
});

const StyledTableContainer = styled.div`
  .MuiTableContainer-root {
    padding: 15px;
    background: #333333;
    display: flex;
    justify-content: center;
  }

  h2 {
    display: flex;
    justify-content: center;
    color: white;
  }

  .MuiTableCell-head,
  .MuiTableCell-body {
    color: white;
    font-family: "Roboto";
    font-weight: 500;
    line-height: 1.5rem;
  }
`;

export default function SimpleTable({ rows }) {
  const classes = useStyles();

  const booleanToString = boolean => {
    if (boolean) {
      return "Yes";
    }
    return "No";
  };

  return (
    <StyledTableContainer>
      <h2>Employee Table</h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">First Name</TableCell>
              <TableCell align="left">Last Name</TableCell>
              <TableCell align="left">Position</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Active</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell align="left">{row.first_name}</TableCell>
                <TableCell align="left">{row.last_name}</TableCell>
                <TableCell align="left">{row.position}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">
                  {booleanToString(row.active)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledTableContainer>
  );
}
