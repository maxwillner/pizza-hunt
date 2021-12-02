const router = require("express").Router();
const { addComment, removeComment } = require("../../controllers/comment-controller.js");

// /api/comments/<pizzaId>
router.route("/:pizzaId").post(addComment);

// /api/comments/<pizzaId>/<commentid>
router.route("/:pizzaId/:commentId").delete(removeComment);


module.exports = router;