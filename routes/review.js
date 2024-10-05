const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const {validateReview, isLoggedIn, isRewiewAuthor} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");


//Post Review Route
router.post("/",isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

//Delete Review route
router.delete("/:reviewId",isLoggedIn,isRewiewAuthor,wrapAsync(reviewController.destroyReview));

module.exports = router;