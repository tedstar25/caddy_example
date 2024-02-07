const express = require('express');
//require('dotenv').config();
const app = express();
const PORT = 3001;
app.use(express.json());

const cors = require('cors');
app.use(cors()); 

app.post('/test', (req, res) => {
  try {
    const { input } = req.body;
    if (!input) {
      throw new Error('Input is missing');
    }

    
    res.status(200).json({ message: 'Hello from server' });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(400).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
















/* 

const cors_domain1 = process.env.CORS_DOMAIN1;
const cors_domain2 = process.env.CORS_DOMAIN2;
const cors_domain3 = process.env.CORS_DOMAIN3;
const cors_domain4 = process.env.CORS_DOMAIN4;
const cors_domain5 = process.env.CORS_DOMAIN5;
const cors_domain6 = process.env.CORS_DOMAIN6;

const options = {
  allowedHeaders: [
      'X-ACCESS_TOKEN',
      'Access-Control-Allow-Origin',
      'Authorization',
      'Origin',
      'x-requested-with',
      'Content-Type',
      'Content-Range',
      'Content-Disposition',
      'Content-Description',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: [
      `${cors_domain1}`,
      `${cors_domain2}`,
      `${cors_domain3}`,
      `${cors_domain4}`,
      `${cors_domain5}`,
  ],
  preflightContinue: false,
};

const corsOpts = cors(options);

app.use(corsOpts);  */