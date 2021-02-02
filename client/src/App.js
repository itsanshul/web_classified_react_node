import React,{useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Ads from './components/ad/Ads';
import Ad from './components/ad/Ad';
import Alert from './components/layout/Alert';
import PrivateRoute from './components/PrivateRoute';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/Dashboard/Dashboard';
import CreateListing from './components/ad/CreateListing';
import MyAds from './components/ad/MyAds';
import { loadUser } from './actions/auth';

//Redux
import store from './store';
import { Provider } from 'react-redux';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    useEffect(() => {
      store.dispatch(loadUser());
    }, []);
    return (
      <>
        <Provider store={store}>
          <Router>
            <Navbar />
            <Route exact path='/' component={Ads} />
            <section className='container'>
              <Alert />
              <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
                {/* <Route exact path='/profiles' component={Profiles} />
                <Route exact path='/profile/:id' component={Profile} /> */}
                <PrivateRoute exact path='/dashboard' component={Dashboard} />
                <PrivateRoute
                  exact
                  path='/create-listing'
                  component={CreateListing}
                />
                <PrivateRoute exact path='/myads' component={MyAds} />
                <PrivateRoute exact path='/ads/:id' component={Ad} />
              </Switch>
            </section>
          </Router>
        </Provider>
      </>
    );
  };

export default App;