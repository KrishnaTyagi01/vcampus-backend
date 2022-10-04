const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 8000;
const {MONGOURI} = require('./keys');
const usersRoutes = require('./routes/users');
const eventRoutes = require('./routes/events');
const communityRoutes = require('./routes/community');
const registrationRoutes = require('./routes/registration');

const app = express();
app.use(cors())
app.use(express.json()); // body-parser



app.use('/api', eventRoutes);
app.use('/api', usersRoutes);
app.use('/api', communityRoutes);
app.use('/api', registrationRoutes);

mongoose.connect(process.env.MONGODB_URI || MONGOURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

mongoose.connection.on('connected', ()=>{
    console.log('connected to mongo');
})

mongoose.connection.on('error', ()=>{
    console.log('MongoDB connection err');
})

app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`)
})