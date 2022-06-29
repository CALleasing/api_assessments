const express = require("express");
const userController = require("../controller/user");

const router = express.Router();

router.get("/", userController.getAllUsers);
router.post("/", userController.postOrPutUser);
router.delete("/:id", userController.deleteUserById);

router.get("/:userid", userController.getUserById);

// router.post("/login/", userController.addUserLogin);
router.delete("/login/:userid", userController.deleteLoginUserByUserid);
// router.get('/')
router.get("/position/:id", userController.getAllManagerPosition);
router.get("/department/:id", userController.getUserByDepartment);

router.get(
  "/:year/:part/:choiceCount",
  userController.getUserStaffAnswerAllChoice
);
router.get(
  "/:year/:part/notcomplete/:choiceCount",
  userController.getUserStaffAnswerNotComplete
);
// router.get('/:department', userController.getUserByDepartment);

module.exports = router;
