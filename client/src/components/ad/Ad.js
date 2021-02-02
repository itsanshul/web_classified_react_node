import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAd } from '../../actions/post';
import Spinner from '../layout/Spinner';
import AdItem from '../ad/AdItem';
import { Link } from 'react-router-dom';

const Ad = ({ ad: { loading, ad }, getAd, match }) => {
  useEffect(() => {
    getAd(match.params.id);
  }, [getAd, match]);
  return loading || ad === null ? (
    <Spinner />
  ) : (
    <>
      <Link to='/' className='btn  btn-secondary'>
        Back to Home
      </Link>
      <AdItem ad={ad} />
    </>
  );
};

Ad.propTypes = {
  getAd: PropTypes.func.isRequired,
  ad: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  ad: state.ad,
});
export default connect(mapStateToProps, { getAd })(Ad);
