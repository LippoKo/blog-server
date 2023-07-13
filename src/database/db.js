import mongoose from 'mongoose';

const connectDatabase = () => {
  console.log('Wait, connecting to the database ...');

  mongoose.set('strictQuery', true);

  mongoose
    .connect('mongodb+srv://lippo:root@try00.peh1moq.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Atlas connected!'))
    .catch((error) => console.log(error));
};

export default connectDatabase;
