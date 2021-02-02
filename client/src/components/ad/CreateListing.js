import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createListing } from '../../actions/post';
import { Link } from 'react-router-dom';

const CreateListing = ({ createListing, history }) => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: '',
    description:'',
    image: '',
  });
  const {
    title,
    price,
    category,
    description,
    image,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

const handleFileChange = e => {
  setFormData({...formData, [e.target.name]: e.target.files[0]});
}    
  const onSubmit = (e) => {
    e.preventDefault();
     const formDataObj = new FormData();
    
     formDataObj.append("image", formData.image);
     formDataObj.append("title", formData.title);
     formDataObj.append("price", formData.price);
     formDataObj.append("description", formData.description);
     formDataObj.append("category", formData.category);
     

    createListing(formDataObj, history);
    setFormData({ title: '',
    price: '',
    category: '',
    description:'',
    image: '',});
  };
  return (
    <>
    <section className="centre_aligned">
      <h1 className='large text-primary'>Create Your Listing</h1>

      <form className='form' onSubmit={(e) => onSubmit(e)} encType="multipart/form-data" >
        <div className='form-group'>
          <select name='category' value={category} onChange={(e) => onChange(e)}>
            <option value='0'>* Select Category</option>
            <option value='Vehicle'>Vehicle</option>
            <option value='Electronics'>Electronics</option>
            <option value='Furniture'>Furniture</option>
            <option value='Books'>Books</option>
          </select>
        
        </div>
        <br />
        <small>Select image</small>
        <div className='form-group'>
          <input
            type='file'
            placeholder='Choose a image'
            name='image'
            onChange={(e) => handleFileChange(e)}
          />
        </div>
        <br/>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Listing Title'
            name='title'
            value={title}
            onChange={(e) => onChange(e)}
          />
        </div>
        <br/>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Price'
            name='price'
            value={price}
            onChange={(e) => onChange(e)}
          />
        </div>
      <br/>
        <div className='form-group'>
          <textarea
            style={{width: '80%'}}
            placeholder='A short description of what you are selling'
            name='description'
            value={description}
            onChange={(e) => onChange(e)}
          ></textarea>
        </div>

       
        <input type='submit' className='btn btn-primary my-1' />
      </form>
      </section>
    </>
  );
};

CreateListing.propTypes = {
  createListing: PropTypes.func.isRequired,
};

export default connect(null, { createListing })(CreateListing);
