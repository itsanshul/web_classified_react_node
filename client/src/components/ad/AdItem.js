import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'moment';
import { Link } from 'react-router-dom';

const AdItem = ({
  ad: { _id, title, image, price, description, category},
  auth,
}) => {
  return (
    <>
       <div class="col">
         <Link to={`/ads/${_id}`}>
            <div class="card">
            <span class="badge bg-warning text-dark" style={{width:'max-content',position:'absolute'}}>{category}</span>
              <img src={`/uploads/${image}`} class="card-img-top" alt="..." />
              <div class="card-body">
              <p class="card-text"><b>{price}</b></p>
                <p>{title}</p>
                <p class="card-text">{description}</p>
              </div>
            </div>
            </Link>
          </div>
    </>
  );
};

AdItem.propTypes = {
  ad: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(AdItem);
