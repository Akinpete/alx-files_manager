import express from 'express';
import routes from './routes/index';

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Use routes
app.use('/', routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
