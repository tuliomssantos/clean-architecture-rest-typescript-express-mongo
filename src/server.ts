import { app } from "./app";
const mongoose = require("mongoose");


mongoose.connect(
`DB_CONNECTION=mongodb://localhost:27017/budgetsdb?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false`,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log("Connect to DB");
    app.listen(3334, () => console.log(`Listening on port ${3334}`));
  }
);
