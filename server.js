const express = require("express");

const app = express();

app.get("/", (req, res) => res.json({ msg: "Welcome to the Happiness App" }));

app.use("/api/user", require("./routes/user"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/grattitude", require("./routes/grattitude"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
