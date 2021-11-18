const userRoute = require("./users");
const authRoute = require("./auth");
const deviceRoute = require("./devices");
const appsRouter = require("./apps");
const router = require("express").Router();

router.use("/users", userRoute);
router.use("/auth", authRoute);
router.use("/devices", deviceRoute);
router.use("/apps", appsRouter);

module.exports = router;
