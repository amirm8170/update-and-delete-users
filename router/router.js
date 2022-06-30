const { deleteUser } = require("../controllers/deleteUser");
const { login } = require("../controllers/loginControl");
const { register } = require("../controllers/registerControl");
const { updateUser } = require("../controllers/updateUser");
const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.delete("/deleteUser/:id", deleteUser);
router.put("/updateUser/:id", updateUser);

module.exports = router;
