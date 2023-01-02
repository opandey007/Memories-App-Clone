import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';
const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/posts', postRoutes);
//const connectionUrl =
//'mongodb+srv://memories_app:123memories_app@cluster0.akqpdxf.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.connectionUrl)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port:${PORT}`));
  })
  .catch((err) => {
    console.log('Failed', err.message);
  });
