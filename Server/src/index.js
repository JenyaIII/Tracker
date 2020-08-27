const mongoose = require('mongoose');
const express = require('express');
require('./models/User.js');
require('./models/Track.js');
const authRoutes = require('./routes/authRoutes.js');
const trackRoutes = require('./routes/trackRoutes.js');
const bodyParser = require('body-parser');
const config = require('config');

const app = express();

app.use(bodyParser.json())
app.use(authRoutes);
app.use(trackRoutes);

const mongoURI = config.get('mongoURI');
const PORT = config.get('port') || 5000;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});
mongoose.connection.on('error', (rr) => {
    console.error('Error connection to mongo', err);
});

app.get('/', (req, res) => {
    res.send('Hi there');
});

app.listen(PORT, () => {
    console.log('Listening on port 3000')
});