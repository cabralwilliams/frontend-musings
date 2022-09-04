const router = require("express").Router();
const path = require("path");
router.get("/", (req, res) => {
    res.send("Welcome home!")
});

router.get("/home", (req, res) => {
res.sendFile(path.join(__dirname + "../../../staticHtml/home.html"))
});

module.exports = router;