const express = require("express");
const route = require("./Router/Route");
const app = express();
const PORT = 4500;

const cors = require("cors");

app.use(cors({
    origin: "*"
}))

app.use("/api", route);

app.get("/", (req, res) => {
    res.send("<h1>This is Home Page</h1>");
    console.log("Home");
})

app.listen(PORT, () => {
    try {
        console.log("Application is running on port ", PORT);
    }
    catch (err) {
        console.log("Error occurred!", err);
    }
})