import React from 'react';
import styles from './Homepage.module.scss';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import HomeIcon from '@material-ui/icons/Home';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const demoContent = [{ remote: 15, local: 3 }];

const demoContentListEvent = [{ event: 'event-123' }, { event: 'event-234' }, { event: 'event-345' }, { event: 'event-456' }, { event: 'event-567' }];

const demoContentListReservation = [{ reservation: 'reservation-123' }, { reservation: 'reservation-234' }, { reservation: 'reservation-345' }, { reservation: 'reservation-456' }, { reservation: 'reservation-567' }];

const Homepage = () => (
  <Paper className={styles.component}>
    <Avatar className={styles.avatar}>
      <HomeIcon className={styles.icon}/>
    </Avatar>
    <Typography variant="h4" component="h5" className={styles.title}>
      Pizzeria control panel
    </Typography>
    <TableContainer className={styles.table} component={Paper}>
      <Table className={styles.table}>
        <TableHead>
          <TableRow className={styles.tablehead}>
            <TableCell className={styles.titletable}>Remote orders today</TableCell>
            <TableCell className={styles.titletable}>Local orders today</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.table}>
              <TableCell component="th" scope="row">
                {row.remote}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.local}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <h3 className={styles.subtitle}>Events and reservations for today</h3>
    <Grid container justify="space-around">
      <TableContainer className={styles.table} component={Paper}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow className={styles.tablehead}>
              <TableCell className={styles.titletable}>Events for today</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContentListEvent.map(row => (
              <TableRow key={row.table}>
                <TableCell component="th" scope="row">
                  {row.event && (
                    <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/event/${row.event}`}>
                      {row.event}
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer className={styles.table} component={Paper}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow className={styles.tablehead}>
              <TableCell className={styles.titletable}>Reservations for today</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContentListReservation.map(row => (
              <TableRow key={row.table}>
                <TableCell component="th" scope="row">
                  {row.reservation && (
                    <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.reservation}`}>
                      {row.reservation}
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  </Paper >
);


export default Homepage;
