const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

const errorController = require('./controllers/error');

const homeRouter = require('./routes/home');
const offerRouter = require('./routes/offer');
const userRouter = require('./routes/user');
const contractRouter = require('./routes/contract');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/offer', offerRouter);
app.use('/user', userRouter);
app.use('/contract', contractRouter);
app.use(homeRouter);

app.use(errorController.get404);

mongoose
  .connect(
    process.env.URL
    )
  .then(()=>{
    app.listen(process.env.PORT, ()=> {
        console.warn('Port 3000 Blocked');
    });
  })
  .catch(err => {
    console.log(err);
  });