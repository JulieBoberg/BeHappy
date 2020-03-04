const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Init middleware
app.use(express.json({ msg: "Welcome to the Happiness App" }));

app.get("/", (req, res) => res.json({ msg: "Welcome to the Happiness App" }));

app.use("/api/user", require("./routes/user"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/gratitude", require("./routes/gratitude"));
app.use("/api/affirmation", require("./routes/affirmation"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
