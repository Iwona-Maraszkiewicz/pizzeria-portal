import React from 'react';
import styles from './Tables.module.scss';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import TvIcon from '@material-ui/icons/Tv';

const Tables = () => {

  const demoContent = [
    { time: '11:00', table1: 123, table2: 234, table3: null, table4: null },
    { time: '11:30', table1: 456, table2: null, table3: 789, table4: 456 },
    { time: '12:00', table1: 678, table2: null, table3: 999, table4: 456 },
    { time: '12:30', table1: null, table2: 456, table3: null, table4: 456 },
    { time: '13:00', table1: null, table2: null, table3: 321, table4: null },
    { time: '13:30', table1: 304, table2: 543, table3: 321, table4: null },
    { time: '14:00', table1: null, table2: null, table3: 304, table4: null },
    { time: '14:30', table1: null, table2: 234, table3: 123, table4: null },
    { time: '15:00', table1: 304, table2: 678, table3: 123, table4: 987 },
    { time: '15:30', table1: null, table2: 234, table3: null, table4: 459 },
    { time: '16:00', table1: 232, table2: null, table3: null, table4: 304 },
    { time: '16:30', table1: null, table2: null, table3: 126, table4: 459 },
    { time: '17:00', table1: null, table2: 235, table3: 126, table4: null },
    { time: '17:30', table1: null, table2: 235, table3: null, table4: 678 },
    { time: '18:00', table1: 198, table2: 987, table3: 127, table4: 451 },
    { time: '18:30', table1: 154, table2: 237, table3: null, table4: null },
    { time: '19:00', table1: null, table2: null, table3: 128, table4: 455 },
    { time: '19:30', table1: null, table2: 765, table3: 128, table4: null },
    { time: '20:00', table1: null, table2: 304, table3: 128, table4: null },
    { time: '20:30', table1: null, table2: 987, table3: 879, table4: null },
    { time: '21:00', table1: null, table2: null, table3: 678, table4: null },
  ];

  return (
    <Paper className={styles.component}>
      <Avatar className={styles.avatar}>
        <TvIcon className={styles.icon}/>
      </Avatar>
      <ButtonGroup variant="contained" color="secondary" aria-label="contained secondary button group" className={styles.buttons}>
        <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/event/new`}>Add new event</Button>
        <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`}>Add new reservation</Button>
      </ButtonGroup>
      <Grid container justify="space-around">

        <Table className={styles.table}>
          <TableHead>
            <TableRow className={styles.tablehead}>
              <TableCell className={styles.title}>Time</TableCell>
              <TableCell className={styles.title}>Table1</TableCell>
              <TableCell className={styles.title}>Table2</TableCell>
              <TableCell className={styles.title}>Table3</TableCell>
              <TableCell className={styles.title}>Table4</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContent.map(row => (
              <TableRow key={row.time}>
                <TableCell component="th" scope="row">
                  {row.time}
                </TableCell>
                <TableCell>
                  {row.table1 ?
                    (<Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.table1}`}>
                      {row.table1}
                    </Button>) : (<Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`}></Button>)
                  }
                </TableCell>
                <TableCell>
                  {row.table2 ?
                    (<Button component={Link} to={`${process.env.PUBLIC_URL}/tables/event/${row.table2}`}>
                      {row.table2}
                    </Button>) : (<Button component={Link} to={`${process.env.PUBLIC_URL}/tables/event/new`}></Button>)
                  }
                </TableCell>
                <TableCell>
                  {row.table3 ?
                    (<Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.table3}`}>
                      {row.table3}
                    </Button>) : (<Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`}></Button>)
                  }
                </TableCell>
                <TableCell>
                  {row.table4 ?
                    (<Button component={Link} to={`${process.env.PUBLIC_URL}/tables/event/${row.table4}`}>
                      {row.table4}
                    </Button>) : (<Button component={Link} to={`${process.env.PUBLIC_URL}/tables/event/new`}></Button>)
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </Paper >
  );
};


export default Tables;
