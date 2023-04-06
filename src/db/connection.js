const mongoose = require('mongoose');

// let url = "mongodb://localhost:27017/fintrak?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
let url = "mongodb+srv://chavanvinayak017:SmTR4b6uEVR0J0VA@cluster1.ayoljo2.mongodb.net/?retryWrites=true&w=majority";
try{
  mongoose.set("strictQuery", false);

  (async () => {
    try {
      await mongoose.connect(
      url,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      );
    } catch (e) {
      console.log(`connection error ${e}`);
    }
  })();

  const db = mongoose.connection;

  db.once("open", async () => {
    console.log(`✔ Successfully connected to mongodb database`);
  });
  db.on("error", () => {
    console.log(`connection error while connection at ${URL}`);
  });
} catch (e) {
  console.log(e.message);
}
