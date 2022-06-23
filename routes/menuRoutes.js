const express = require("express");
const router = express.Router();

const {listMenu, menuPorId, agregarOpcionMenu, borrarOpcionMenu } = require("../controllers/menuController")

router.get("/", listMenu);

router.get("/:id", menuPorId);

router.post("/", agregarOpcionMenu);

router.delete("/:id", borrarOpcionMenu);

module.exports = router;