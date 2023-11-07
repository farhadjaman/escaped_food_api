import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import express from 'express';
import foodRouter from './src/routers/food.router';
import userRouter from './src/routers/user.router';
import orderRouter from './src/routers/order.router';
import cors from 'cors';
import { dbConnect } from './src/configs/database.config';
dbConnect();

const app = express();
app.use(express.json());
app.use(cors({
  origin: '*'
}))

app.use('/api/foods', foodRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

app.use(express.static('public'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('API served on http://localhost:' + port);
});
