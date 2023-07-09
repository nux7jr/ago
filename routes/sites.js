const express = require("express");
const router = express.Router();
const auth = require("../middleware/authChek");
const getSiteInfo = require("../app/siteLogic");
const getContent = require("../app/getContent");

router.get("/", auth, (req, res, next) => {
  res.render("sites/sites.hbs", {
    title: "Sites",
    isAuth: true,
    allSites: getSiteInfo(),
  });
});
router.post("/", auth, (req, res, next) => {
  const id = req.body.id;
  res.render("sites/editSites.hbs", {
    title: "Sites",
    isAuth: true,
    editableInfo: getContent(req.body.pathTo, "utf8"),
    pathTo: req.body.pathTo,
  });
});
module.exports = router;
