const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
require('./config/db.config');

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