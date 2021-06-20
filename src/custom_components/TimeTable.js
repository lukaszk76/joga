import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#C7DBC6",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
    root: {
      backgroundColor: theme.palette.action.hover,
  },
}))(TableRow);

function createData(name, monday, tuesday, wednesday, thursday, friday, saturday, sunday) {
  return { name,  monday, tuesday, wednesday, thursday, friday, saturday, sunday };
}

const rows = [
  createData('zajęcia w studio', "--:--", "11:00", "--:--", "11:00","--:--", "--:--", "--:--"),
  createData('zajęcia on-line', "--:--", "--:--", "--:--", "--:--","10:00", "--:--", "--:--"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function TimeTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell align="center">pon</StyledTableCell>
            <StyledTableCell align="center">wt</StyledTableCell>
            <StyledTableCell align="center">śr</StyledTableCell>
            <StyledTableCell align="center">czw</StyledTableCell>
            <StyledTableCell align="center">pt</StyledTableCell>
            <StyledTableCell align="center">sob</StyledTableCell>
            <StyledTableCell align="center">nie</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.monday}</StyledTableCell>
              <StyledTableCell align="right">{row.tuesday}</StyledTableCell>
              <StyledTableCell align="right">{row.wednesday}</StyledTableCell>
              <StyledTableCell align="right">{row.thursday}</StyledTableCell>
              <StyledTableCell align="right">{row.friday}</StyledTableCell>
              <StyledTableCell align="right">{row.saturday}</StyledTableCell>
              <StyledTableCell align="right">{row.sunday}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
