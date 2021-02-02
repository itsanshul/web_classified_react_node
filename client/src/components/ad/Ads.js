import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAds } from '../../actions/post';
import Spinner from '../layout/Spinner';
import AdItem from './AdItem';
import {Link} from 'react-router-dom';

const Ads = ({ getAds, ad: { ads, loading } }) => {
  useEffect(() => {
    getAds();
  }, [getAds]);
  return loading ? (
    <Spinner />
  ) : ads.length > 0 ? 
  <>
              <h1 className='large text-primary'>Ads</h1>
              <div class="row row-cols-4 row-cols-md-4 g-4" style={{padding: "20px"}}>
              {ads.map((ad) => (
                <AdItem key={ad._id} ad={ad} />
               ))}
             </div>
    </> 
    : 
    <>
    <div style={{margin:'0px auto',textAlign:'center',width:'max-content'}}>
      <h1 className='large text-primary'>No Ads found!</h1>
      <Link to='/create-listing' className='btn btn-primary my-1'>
            Post a Listing
      </Link>
      </div>
    </>
};

Ads.propTypes = {
  getAds: PropTypes.func.isRequired,
  ad: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  ad: state.ad,
});
export default connect(mapStateToProps, { getAds })(Ads);
