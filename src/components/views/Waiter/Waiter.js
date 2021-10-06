import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import TabletMacIcon from '@material-ui/icons/TabletMac';


class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    changeStatus: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
    }),
    tables: PropTypes.object,
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  render() {
    const {
      loading: { active, error },
      tables,
      changeStatus,
    } = this.props;

    const renderActions = (status, id) => {
      switch (status) {
        case 'free':
          return (
            <>
              <Button
                onClick={() => changeStatus('thinking', id)}
                className={styles.link}
              >
                thinking
              </Button>
              <Button
                onClick={() => changeStatus('new order', id)}
                className={styles.link}
              >
                new order
              </Button>
            </>
          );
        case 'thinking':
          return (
            <Button
              onClick={() => changeStatus('new order', id)}
              className={styles.link}
            >
              new order
            </Button>
          );
        case 'ordered':
          return (
            <Button
              onClick={() => changeStatus('prepared', id)}
              className={styles.link}
            >
              prepared
            </Button>
          );
        case 'prepared':
          return (
            <Button
              onClick={() => changeStatus('delivered', id)}
              className={styles.link}
            >
              delivered
            </Button>
          );
        case 'delivered':
          return (
            <Button
              onClick={() => changeStatus('paid', id)}
              className={styles.link}
            >
              paid
            </Button>
          );
        case 'paid':
          return (
            <Button
              onClick={() => changeStatus('free', id)}
              className={styles.link}
            >
              free
            </Button>
          );
        case 'new order':
          return (
            <Button
              onClick={() => changeStatus('prepared', id)}
              className={styles.link}
            >
              prepared
            </Button>
          );
        default:
          return null;
      }
    };

    if (active || !tables.length) {
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if (error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <div className={styles.component}>
          <div className={styles.table}>
            <Paper className={styles.component}>
              <Avatar className={styles.avatar}>
                <TabletMacIcon className={styles.icon}/>
              </Avatar>
              <Table className={styles.table}>
                <TableHead>
                  <TableRow className={styles.tablehead}>
                    <TableCell className={styles.title}>Table</TableCell>
                    <TableCell className={styles.title}>Status</TableCell>
                    <TableCell className={styles.title}>Order</TableCell>
                    <TableCell className={styles.title}>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tables.map(row => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell>{row.status}</TableCell>
                      <TableCell>
                        {row.order && (
                          <Button
                            to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}
                            className={styles.link}
                          >
                            {row.order}
                          </Button>
                        )}
                      </TableCell>
                      <TableCell>{renderActions(row.status, row.id)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </div>
        </div>
      );
    }
  }
}

export default Waiter;
