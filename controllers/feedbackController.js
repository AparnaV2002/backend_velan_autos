import feedbackModel from "../models/feedbackModel.js";
 export const feedbackController = async (req, res) => {
 try {
    const { name, email,phone, address, feedback } = req.body;
    //validations
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }

    if (!phone) {
      return res.send({ message: "Phone no is Required" });
    }
    if (!address) {
      return res.send({ message: "Address is Required" });
    }
    if (!feedback) {
      return res.send({ message: "Feedback is required" });
    }
   
    //save
    const user = await new feedbackModel({
      name,
      email,
      phone,
      address,
      feedback,
    }).save();

    res.status(201).send({
      success: true,
      message: "feedback registered Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registeration",
      error,
    });
  }
};


//update prfole
  export const getFeedbackController = async (req, res) => {
    try {
      const feedbacks = await feedbackModel.find();
      res.status(200).send({
        success: true,
        message: "Feedback retrieved successfully",
        feedbacks,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({
        success: false,
        message: "Error while retrieving feedback",
        error,
      });
    }
  };

// export const updateReviewController = async(rew,res) =>{
//   try{
//     const allUser = await feedbackModel.find({});
//     res.send({status:"ok", data:allUser});

//   }
//   catch(error){

//     console.log(error);
//   }
// }