require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router/index.js');
const db_URL = 'mongodb+srv://root:root@cluster0.zj2r9iv.mongodb.net/?retryWrites=true&w=majority';
const errorMiddleware = require('./middlewares/error-middleware');

const app = express();
const PORT = 8080;


app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL
}));
app.use('/api', router);
app.use(errorMiddleware);

const start = async () => {   
    try {

        await mongoose.connect(db_URL, {
          serverSelectionTimeoutMS: 3000,
        })
        console.log('connected');
        app.listen(PORT, () => console.log(`server started on port ${PORT}`));
    }  
     catch(e) {
      console.log(e);   
    }
}
start ();