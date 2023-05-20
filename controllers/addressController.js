import addressModel from "../models/addressModel.js";

 export const addressController = async (req, res) => {
 try {
    const { name, email, door, phone, address, city } = req.body;
    //validations
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!door) {
      return res.send({ message: "Door is Required" });
    }
    if (!phone) {
      return res.send({ message: "Phone no is Required" });
    }
    if (!address) {
      return res.send({ message: "Address is Required" });
    }
    if (!city) {
      return res.send({ message: "city is Required" });
    }
    //save
    const user = await new addressModel({
      name,
      email,
      phone,
      address,
      city,
      door,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
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
export const updateAddressController = async (req, res) => {
  try {
    const { name, city, address, phone } = req.body;
    const user = await addressModel.findById(req.user._id);

    const updatedUser = await addressModel.findByIdAndUpdate(
      req.user._id,
      {
        name: name || user.name,
        phone: phone || user.phone,
        city: city || user.city,
        address: address || user.address,
      },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Profile Updated SUccessfully",
      updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error WHile Update profile",
      error,
    });
  }
};
