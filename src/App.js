import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';
import Order from './components/views/Order/Order';
import Tables from './components/views/Tables/Tables';
import NewOrder from './components/views/NewOrder/NewOrder';
import NewBookingTable from './components/views/NewBookingTable/NewBookingTable';
import NewBookingEvent from './components/views/NewBookingEvent/NewBookingEvent';
import BookedTable from './components/views/BookedTable/BookedTable';
import BookedEvent from './components/views/BookedEvent/BookedEvent';
import Waiter from './components/views/Waiter/Waiter';
import Kitchen from './components/views/Kitchen/Kitchen';
import {StylesProvider} from '@material-ui/core/styles';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2B4C6F',
    },
    // secondary: {

    //   main: '#11cb5f',
    // },
  },
});

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
              <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
              <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
              <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={NewOrder} />
              <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={Order} />
              <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={NewBookingTable} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={BookedTable} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/event/new`} component={NewBookingEvent} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/event/:id`} component={BookedEvent} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
