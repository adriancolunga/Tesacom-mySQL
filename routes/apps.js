const router = require("express").Router();
const verifyToken = require("./middleware/verifyToken");
const {
  allApps,
  appById,
  newApp,
  updateApp,
  deleteApp,
} = require("../controllers/appsController");

router.get("/", verifyToken, allApps);
router.get("/:id", verifyToken, appById);
router.post("/", verifyToken, newApp);
router.put("/:id", verifyToken, updateApp);
router.delete("/:id", verifyToken, deleteApp);

module.exports = router;
