const router = require("express").Router();
const verifyToken = require("./middleware/verifyToken");
const {
  allDevices,
  deviceBySerial,
  newDevice,
  updateDevide,
  deleteDevice,
} = require("../controllers/devicesController");

router.get("/", verifyToken, allDevices);
router.get("/:serial", verifyToken, deviceBySerial);
router.post("/", verifyToken, newDevice);
router.put("/:serial", verifyToken, updateDevide);
router.delete("/:serial", verifyToken, deleteDevice);

module.exports = router;
