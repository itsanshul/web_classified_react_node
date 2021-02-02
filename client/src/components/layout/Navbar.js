import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul class="navbar-nav">
      <li>
        <Link to='/'>
          <span className='hide-sm'>Home</span>
        </Link>
      </li>
      <li>
        <Link to='/myads'>
          <span className='hide-sm'>Listings</span>
        </Link>
      </li>
      <li>
        <Link to='/create-listing'>
          <span className='hide-sm'>Post&nbsp;Ad</span>
        </Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user'></i>{' '}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt'></i>{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul class="navbar-nav">
      <li  class="nav-item">
        <Link to='/'>Home</Link>
      </li>
      <li  class="nav-item">
        <Link to='/register'>Register</Link>
      </li>
      <li  class="nav-item">
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );

  return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">Buy/Sell</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="navbarNav">
        {!loading && (
                  <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
                )}
        </div>
    </nav>
  );
};
Navbar.protoType = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(Navbar);
