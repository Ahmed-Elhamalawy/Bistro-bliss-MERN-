const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/createUser", userController.signUp);
router.post("/login", userController.login);
router.put("/updateUser/:id", userController.updateUser);
router.get("/getAllUsers", userController.getAllUsers);

module.exports = router;
