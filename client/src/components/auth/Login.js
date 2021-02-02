import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';
const Login = ({ login, isAuthenticated }) => {
  const [formData, setformData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setformData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  if (isAuthenticated) return <Redirect to='/dashboard' />;
  return (
    <>
      {/* <div className='alert alert-danger'>Invalid credentials</div> */}
      <section className="centre_aligned">
      <h1>Sign In</h1>
      <br/>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            required
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <br/>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            required
            vaue={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <br/>

        <input type='submit' className='btn btn-primary' value='Login' />
      </form>
      <p className='my-1'>
        Don't have an account? <Link to='/register'>Sign Up</Link>
      </p>
      </section>
    </>
  );
};
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Login);
