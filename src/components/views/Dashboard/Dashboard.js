import React from 'react';
import classes from './Dashboard.module.scss';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const demoList = [
  {
    table: '7',
    time: '11:30',
    people: '8',
    details: '1',
  },
  {
    table: '4',
    time: '15:30',
    people: '5',
    details: '9',
  },
  {
    table: '5',
    time: '17:30',
    people: '2',
    details: '1',
  },
  {
    table: '9',
    time: '18:30',
    people: '5',
    details: '3',
  },
  {
    table: '1',
    time: '20:30',
    people: '3',
    details: '2',
  },
  {
    table: '8',
    time: '16:30',
    people: '2',
    details: '6',
  },
];

const Dashboard = () => (
  <Paper className={classes.component} elevation={9}>
    <Grid container justify="center">
      <Grid item>
        <Typography className={classes.title} variant="h5" component="h5">
          Current Events and Reservations
        </Typography>
      </Grid>
    </Grid>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table</TableCell>
          <TableCell>Time</TableCell>
          <TableCell>People</TableCell>
          <TableCell>Details</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoList.map((demoList) => (
          <TableRow key={demoList.table}>
            <TableCell component="th" scope="row">
              {demoList.table}
            </TableCell>
            <TableCell>{demoList.time}</TableCell>
            <TableCell>{demoList.people}</TableCell>
            <TableCell>
              <Button
                className={classes.booked}
                component={Link}
                to={`${process.env.PUBLIC_URL}/tables/booking/${demoList.details}`}
              >
              see details
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Dashboard;
