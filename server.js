const port = 4000;
const express = require("express");
const app = express();

const routes = require("./routes");
app.use(routes);
app.use(express.static("staticHtml"));

app.listen(port, () => {
    console.log(`app running on port ${port}`);
})