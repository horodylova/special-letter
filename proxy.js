import express from 'express';
import axios from 'axios';
const app = express();

app.use(express.json());

app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  res.status(200).end();
});

app.post('/api/*', async (req, res) => {
  try {
    const kestraUrl = `http://localhost:8080${req.originalUrl.replace('/api', '/api/v1/executions/webhook')}`;
    const response = await axios.post(kestraUrl, req.body, {
      headers: { 'Content-Type': 'application/json' },
    });
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || { error: 'Proxy error' });
  }
});

app.listen(3001, () => {
  console.log('Proxy server running on http://localhost:3001');
});
