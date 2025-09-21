import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/routes.js';



dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;


app.use("/api/products", productRoutes);


app.listen(port, () => { 
  connectDB();
    console.log('Server is running on http://localhost:5000');
});
    