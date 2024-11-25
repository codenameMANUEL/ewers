import bcrypt from "bcrypt";
import User from "../models/user.model.js";

const controller = {
  createUser: async (req, res) => {
    let { email } = req.body;
    let user = await User.findOne({ email });

    if (user) return res.json({msg: "Email already exists", code: 400 });
    user = User.create(req.body);
    // await user.save();

    res.json({
      id: user._id,
      full_name: user.full_name,
      email: user.email,
      phone_number: user.phone_number,
      department: user.department
    });
  },
};
export default controller;
