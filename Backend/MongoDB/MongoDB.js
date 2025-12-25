const mongoose = require("mongoose");

mongoose.connect(
    process.env.mongourl,
)
.then(() => console.log("Connected to MongoDB!"))

.catch(err => console.error("Connection error:", err));

