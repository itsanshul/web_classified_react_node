import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';

const Dashboard = ({
  auth: { user,loading },
}) => {
  
  return loading  ? (
    <Spinner />
  ) : (
    <>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Welcome {user && user.name}
      </p>
      
          <p>You haven't set up a Profile</p>
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Create Profile
          </Link>

          <Link to='/create-listing' className='btn btn-primary my-1'>
            Post a Listing
          </Link>
      
    </>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
