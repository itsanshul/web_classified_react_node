const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Ad = require('../../models/Ad');
const User = require('../../models/User');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const config = require('config');
//const Profile = require('../../models/Profile');

// @route POST /api/ads
// @desc  Create Ad
// @access Public
router.post('/', auth,  async (req, res) => {
   
    try {
      const user = await User.findById(req.user.id).select('-password');

      const newAd = new Ad({
        user: req.user.id,
        title: req.body.title,
        category: req.body.category,
        price: req.body.price,
        description: req.body.description,
      });

      if(!req.files){
        return res.status(400).send('No file was uploaded.');
      }

      //custom file name
      const file = req.files.image;
      file.name = `photo_${uuidv4()}${path.parse(file.name).ext}`;
      newAd.image = file.name;

      //moving file
      file.mv(`${config.get('fileuploadpath')}/${file.name}`, async err => {
        if(err){
          console.error(err);
          return res.status(500).json(err);
        }
        const ad = await newAd.save();
        res.status(200).json(ad);
      });
      
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);
// @route GET /api/ads
// @desc  Get all Ads
// @access Public
router.get('/', async (req, res) => {
  try {
    const ads = await Ad.find().sort({ date: -1 });
    res.json(ads);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route GET /api/ads
// @desc  Get my Ads
// @access Private
router.get('/myads', auth, async (req, res) => {
  try {
    const ads = await Ad.find({user: req.user.id}).sort({ date: -1 });
    res.json(ads);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route GET /api/ads/:id
// @desc  Get ad by ID
// @access Private
router.get('/:id', async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id);

    if (!ad) return res.status(404).json({ msg: 'No Ad Found' });
    res.json(ad);
  } catch (err) {
    if (err.kind === 'ObjectId')
      return res.status(404).json({ msg: 'No Ad Found' });
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;