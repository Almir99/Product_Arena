// require necessary module
const mongoose = require('mongoose');

// connection function
const connectDB = async () => {
  const LOCAL_DB = process.env.LOCAL_DB_URI;
  const ATLAS_DB = process.env.ATLAS_DB_URI;

  try {
    await mongoose.connect(ATLAS_DB || LOCAL_DB, {
      // long-running app
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

// enable mongoose debugging
mongoose.set('debug', true);

// export db connect function
module.exports = {
  connectDB
};
