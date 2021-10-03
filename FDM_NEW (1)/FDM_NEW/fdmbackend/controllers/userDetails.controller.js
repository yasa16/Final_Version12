const { Aggregate } = require("mongoose");
const UserDetails = require("../models/UserDetails.model");

//get all user details
const getAllUserDetails = async (req, res) => {
  try {
    const userDetailsList = await UserDetails.find();
    res.json(userDetailsList);
  } catch(err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};

//add a user detail
const addUserDetails= async (req, res) => {
  const { Profession,Segmentation,} = req.body;

  try {
    //create a user instance
    const userDetails = new UserDetails({
      Profession,
      Segmentation,
      
    });

    //save user details to the database
    await userDetails
      .save()
      .then(async (addedUser) => {
        res.json(addedUser);
      })
      .catch((err) => res.status(400).json("Error: " + err));
  } catch (err) {
    //Something wrong with the server
    console.log(err.message);
    return res.status(500).send("Server Error");
  }
};

module.exports = { addUserDetails,getAllUserDetails};
