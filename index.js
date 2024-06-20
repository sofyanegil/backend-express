const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const router = require('./routes');

const app = express();
const port = 3000;
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('combined', { stream: accessLogStream }));

//routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/api', router);

//start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
