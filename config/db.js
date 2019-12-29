const mongoose = require("mongoose");
const chalk = require("chalk");

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    mongoose.connection.on("connected", () => {
      console.log(
        chalk.connected(`MongoDB connected to: ${mongoose.connection.host}`)
      );
    });

    mongoose.connection.on("error", err => {
      console.log(chalk.error(`MongoDB connection error: ${err} error`));
    });

    mongoose.connection.on("disconnected", () => {
      console.log(chalk.disconnected("MongoDB has disconnected"));
    });

    process.on("SIGINT", () => {
      mongoose.connection.close(() => {
        console.log(
          chalk.termination(
            "MongoDB has disconnected due to application termination"
          )
        );
        process.exit(1);
      });
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

