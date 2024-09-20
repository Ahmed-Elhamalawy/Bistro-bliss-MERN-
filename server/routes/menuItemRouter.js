const express = require("express");
const router = express.Router();
const menuItemController = require("../controllers/menuItemController");

router.post("/createItem", menuItemController.createItem);
router.get("/getItems", menuItemController.getItems);
router.put("/updateItem/:id", menuItemController.updateItem);
router.delete("/deleteItem/:id", menuItemController.deleteItem);

module.exports = router;
