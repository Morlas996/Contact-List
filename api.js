var express = require("express");

var contact = require("./controllers/contact.ctrl");

var router = express.Router();

router.use("/contact", contact);

module.exports = router;