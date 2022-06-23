const express = require("express");
const router = express.Router();

const {menuPorId} = require("../controllers/menuController")

router.get("/:id", menuPorId);

module.exports = router;