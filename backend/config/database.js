const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(
      "mongodb+srv://ShanmughaAttendence:mBPqAuU8gxyEVNAO@cluster0.qw8asb3.mongodb.net/sample",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //useCreateIndex: true,
      }
    )
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
  // .catch((err)=>{
  //     console.log(err)
  // });---------------------------------due to mogodb error handle
};

module.exports = connectDatabase;
