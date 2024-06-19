const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
//init app
const app = express();

//use cors
app.use(cors());

//use body parser
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

app.use(morgan('combined', { stream: accessLogStream }));
//define port
const port = 3000;

//route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/product', (req, res) => {
  const { product } = req.body;

  res
    .json({
      status: 'success',
      message: 'success add data',
      data: {
        product,
      },
    })
    .statusCode();
});

//start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
