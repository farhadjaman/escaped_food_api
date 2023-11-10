import { connect, ConnectOptions } from 'mongoose';
require('dotenv').config();
export const dbConnect = () => {
  console.log(process.env.MONGO_URI);
  connect(process.env.MONGO_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions).then(
    () => console.log('Database connect successfully'),
    (error) => console.log(error)
  );
};
