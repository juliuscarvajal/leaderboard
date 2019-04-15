import { withStyles } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import NewMatch from "../NewMatch/NewMatch.component";
import matchResultStyles from "./MatchResult.component.styles";
import dataRows from "./MatchResult.data";

const rows = dataRows;

const MatchResult = ({ classes }) => {
  return (
    <React.Fragment>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date and Time</TableCell>
            <TableCell>Winners</TableCell>
            <TableCell>Losers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((dataRow, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {dataRow.time}
              </TableCell>
              <TableCell>{dataRow.winners.join(`, `)}</TableCell>
              <TableCell>{dataRow.lossers.join(`, `)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <NewMatch />
    </React.Fragment>
  );
};

export default withStyles(matchResultStyles)(MatchResult);
