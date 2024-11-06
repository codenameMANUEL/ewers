import bcrypt from 'bcrypt';
import User from '../models/user.model.js';

const controller = {
  login: async (req, res) => {
    let {email,password} = req.body;
    let user = await User.findOne({email}).populate("department");

    if(!user) return res.json({msg:"Invalid username or password",code:404})
    if(user.password !== password) return res.json({msg:"Invalid username or password",code:404});

    res.json({
        id:user._id,
        full_name:user.full_name,
        email:user.email,
        phone_number:user.phone_number,
        department:user.department
    })
  },
};
export default controller;
