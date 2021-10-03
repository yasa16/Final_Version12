const express = require("express");
const router = express.Router();

const {
    addUserDetails,getAllUserDetails
} = require("../controllers/userDetails.controller");

router.get("/all", getAllUserDetails);
router.post("/add", addUserDetails);

module.exports = router;
