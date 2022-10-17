const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
require('./config/db.config');
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    next();
  });


const authRoutes = require('./routes/auth.routes');
app.use('/auth', authRoutes);

const authcompanyRoutes = require('./routes/authcompany.routes');
app.use('/authcompany', authcompanyRoutes);

const userRoutes = require('./routes/user.routes');
app.use('/users', userRoutes);

const companyRoutes = require('./routes/company.routes');
app.use('/companies', companyRoutes);

app.listen(process.env.PORT, (err)=>{
    if(err) throw err;
    console.log(`server running on port ${process.env.PORT}`);
})