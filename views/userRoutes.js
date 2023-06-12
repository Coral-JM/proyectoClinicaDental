
const userController = require ('../controllers/userController');
const isDoctor = require('../middleware/isDoctor');
const verifyUserChanges = require('../middleware/verifyUserChanges');
const router = require('express').Router();
const verifyToken = require('../middleware/verifyToken');
// const isAdmin = require('../middleware/isAdmin');

//Endpoints CRUD

//router.get("/", verifyToken, userController.getAllUsers);
// router.get("/", verifyToken, isDoctor, userController.getAllUsersAsDoctor);
// router.get("/me", verifyToken, userController.getMyUser);
// router.put("/me", verifyToken, verifyUserChanges, userController.updateMyUser);


module.exports = router;