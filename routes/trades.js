const express = require("express");
const router = express.Router();
const tradeController = require("../controllers/trades");

router.get("/", tradeController.getTrades);
router.get("/:id", tradeController.getTrade);
router.put("/:id", tradeController.updateTrade);
router.patch("/:id", tradeController.updateTrade);
router.delete("/:id", tradeController.deleteTrade);
router.post("/", tradeController.createTrade);

module.exports = router;
