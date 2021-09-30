import React from 'react';
import styles from './Kitchen.module.scss';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Kitchen = () => {
  const ordersLocal = [
    {
      id: 1,
      table: 1,
      order: 'pizza',
      options: ['feta', 'tomato', 'oregano', 'mushrooms'],
      amount: 1,
      status: 'no',
    },
    {
      id: 2,
      table: 3,
      order: 'salad',
      options: ['cucumber', 'chicken', 'tomatoes', 'cheese'],
      amount: 2,
      status: 'no',
    }, {
      id: 3,
      table: 2,
      order: 'pizza',
      options: ['cheese', 'ham','tomato', 'olives', 'onion'],
      amount: 3,
      status: 'no',
    },

  ];
  const ordersRemote = [
    {
      id: 1,
      orderId: '123abc',
      order: 'pizza',
      options: ['cheese', 'tomatoes', 'mushrooms', 'becon'],
      amount: 3,
      status: 'no',
    },
    {
      id: 2,
      orderId: '456efg',
      order: 'cake',
      options: ['large'],
      amount: 2,
      status: 'no',
    },

  ];

  const [buttonText, setButtonText] = React.useState('no');

  const changeText = (text) => setButtonText(text);

  const [buttonText1, setButtonText1] = React.useState('no');

  const changeText1 = (text1) => setButtonText1(text1);


  return (
    <Paper className={styles.component}>
      <Avatar className={styles.avatar}>
        <FastfoodIcon className={styles.icon}/>
      </Avatar>
      <Typography variant="h4" component="h5" className={styles.title}>
        Kitchen
      </Typography>
      <h3 className={styles.subtitle}>Local orders</h3>
      <TableContainer className={styles.table} component={Paper}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow className={styles.tablehead}>
              <TableCell className={styles.titletable}>ID</TableCell>
              <TableCell className={styles.titletable}>Table</TableCell>
              <TableCell className={styles.titletable}>Order</TableCell>
              <TableCell className={styles.titletable}>Options</TableCell>
              <TableCell className={styles.titletable}>Amount</TableCell>
              <TableCell className={styles.titletable}>Prepared</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ordersLocal.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.table}</TableCell>
                <TableCell>{row.order}</TableCell>
                <TableCell>
                  <div>
                    {row.options.map(option => (
                      <p key={option}>{option}</p>
                    ))}
                  </div>
                </TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>
                  {row.status === 'no' ? (<Button onClick={() => changeText('yes')}>{buttonText}</Button>) : ''}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h3 className={styles.subtitle}>Remote orders</h3>
      <TableContainer className={styles.table} component={Paper}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow className={styles.tablehead}>
              <TableCell className={styles.titletable}>ID</TableCell>
              <TableCell className={styles.titletable}>Order id</TableCell>
              <TableCell className={styles.titletable}>Order</TableCell>
              <TableCell className={styles.titletable}>Options</TableCell>
              <TableCell className={styles.titletable}>Amount</TableCell>
              <TableCell className={styles.titletable}>Prepared</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ordersRemote.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.orderId}</TableCell>
                <TableCell>{row.order}</TableCell>
                <TableCell>
                  <div>
                    {row.options.map(option => (
                      <p key={option}>{option}</p>
                    ))}
                  </div>
                </TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>
                  {row.status === 'no' ? (<Button onClick={() => changeText1('yes')}>{buttonText1}</Button>) : ''}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>

  );
};

export default Kitchen;
