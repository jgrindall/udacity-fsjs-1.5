import express from 'express';
import apiRoutes from './routes/api/index';

const app = express();
const port = 3000;

app.use('/api', apiRoutes);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
