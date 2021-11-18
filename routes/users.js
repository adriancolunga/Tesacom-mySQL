const router = require("express").Router();
const verifyToken = require("./middleware/verifyToken");
const {
  allUsers,
  userByEmail,
  newUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");

router.get("/", verifyToken, allUsers);
router.get("/:email", verifyToken, userByEmail);
router.post("/", verifyToken, newUser);
router.put("/:email", verifyToken, updateUser);
router.delete("/:email", verifyToken, deleteUser);

module.exports = router;
