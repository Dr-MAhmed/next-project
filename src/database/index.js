import mongoose from "mongoose";

const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://drahmed:rDk07tP1wjYiGR0Q@ecommercery.yi0lvq3.mongodb.net/nextjs-ecommerce-2024";

  mongoose
    .connect(connectionUrl, configOptions)
    .then(() => console.log("Ecommerce database connected successfully!"))
    .catch((err) =>
      console.log(`getting error from dbconnection ${err.message}`)
    );
};

export default connectToDB;
