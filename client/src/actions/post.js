import {
  GET_ADS,
  POST_ERROR,
  ADD_AD,
  GET_AD,
  MY_ADS,
} from './types';
import axios from 'axios';
import { setAlert } from './alert';

export const createListing = (formData, history, edit = false) => async (
  dispatch
) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post('/api/ads/', formData, config);
    dispatch({
      type: ADD_AD,
      payload: res.data,
    });
    dispatch(setAlert('Post Created', 'success'));
  } catch (err) {
    console.log(err.response); 
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    
  }
};


export const getAds = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/ads');
    dispatch({
      type: GET_ADS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

export const getMyAds = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/ads/myads');
    dispatch({
      type: MY_ADS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};


export const getAd = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/ads/${id}`);
    dispatch({
      type: GET_AD,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

