const express = require('express');
const bodyParser = require('body-parser');
const wordCountRoute = require('./routes/wordCountRoute');
const characterCountRoute = require('./routes/characterCountRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/api', wordCountRoute);
app.use('/api', characterCountRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;