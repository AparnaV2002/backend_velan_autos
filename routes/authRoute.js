import express from "express";
import { registerController,
loginController,

testController,
forgotPasswordController,
   updateProfileController,
   getOrdersController,
   getAllOrdersController,
   orderStatusController,
} from "../controllers/authController.js";
import { feedbackController,getFeedbackController } from "../controllers/feedbackController.js";
import { addressController, updateAddressController } from "../controllers/addressController.js";
 import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//get products
router.put("/getreview", getFeedbackController);

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//address 
router.post("/address", addressController);
//routing
//RFeedback || METHOD POST
router.post("/feedback", feedbackController);

//LOGIN || POST
router.post("/login", loginController);

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//update profile
router.put("/updateaddress", requireSignIn, updateAddressController);
//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
