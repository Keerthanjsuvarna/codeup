// const mongoose = require('mongoose');

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://keerthanjsuvarna:7760362356@cluster0.epts5bv.mongodb.net/libs?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// mongoose.connection.on('connected', () => {
//   console.log('Connected to MongoDB');
// });

// mongoose.connection.on('error', (err) => {
//   console.error('Error connecting to MongoDB:', err);
// });

// mongoose.connection.on('disconnected', () => {
//   console.log('Disconnected from MongoDB');
// });

// process.on('SIGINT', () => {
//   mongoose.connection.close(() => {
//     console.log('MongoDB connection closed');
//     process.exit(0);
//   });
// });

