const express = require('express');
const connectDB = require('./config/db');
const fileUpload = require('express-fileupload');
const app = express();
const path = require('path');

// file upload
app.use(fileUpload());

//Connect Database
connectDB();

// Initialize Middleware
app.use(express.json({ extended: false }));

//Routes
app.use('/uploads/', express.static('uploads'));
app.use('/api/users/', require('./routes/api/users'));
app.use('/api/auth/', require('./routes/api/auth'));
app.use('/api/ads/', require('./routes/api/ads'));

// app.get('/', (req, res) => {
//   res.send('App Running');
// });

//Serve Static files on server
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
