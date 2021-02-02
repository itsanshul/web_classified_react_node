import {
  GET_ADS,
  POST_ERROR,
  ADD_AD,
  GET_AD,
  MY_ADS
} from '../actions/types';

const initialState = {
  ads: [],
  ad: null,
  loading: true,
  error: {},
  myads:[]
};
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ADS:
      return {
        ...state,
        ads: payload,
        loading: false,
      };
    case GET_AD:
      return {
        ...state,
        ad: payload,
        loading: false,
      };
    case ADD_AD:
      return {
        ...state,
        ads: [payload, ...state.ads],
        loading: false,
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case MY_ADS:
      return{
        ...state,
        myads: payload,
        loading: false
      }      
    default:
      return state;
  }
}
