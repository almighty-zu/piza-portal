import React from 'react';
import classes from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const orderData = [
  { id: '1', table: 4, status: 'ready', order: 123},
  { id: '2', table: 2, status: 'not ready', order: 1454},
  { id: '3', table: 15, status: 'ready', order: 43543},
  { id: '4', table: 3, status: 'not ready', order: 34534},
  { id: '5', table: 22, status: 'ready', order: 14353},
];

const renderActions = status => {
  switch (status) {
    case 'ready':
      return (
        <FormControlLabel control={<Checkbox checked={true} color="checkedB" />} label="ready"/>
      );
    case 'not ready':
      return (
        <FormControlLabel control={<Checkbox checked={false} color="checkedA" />} label="not ready"/>
      );
    default:
      return null;
  }
};

const Kitchen = () => (
  <Paper className={classes.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Nr</TableCell>
          <TableCell>Table</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Order</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {orderData.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {row.table}
            </TableCell>
            <TableCell>
              {row.order}
            </TableCell>
            <TableCell>
              {renderActions(row.status)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Kitchen;
