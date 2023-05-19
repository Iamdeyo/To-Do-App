import asyncHandler from 'express-async-handler';
import User from '../db/models/users.js';
import generateJwtToken from '../utils/generateJwtToken.js';

// @route auth/register
// method POST
// @desc Register user
const register = asyncHandler(async (req, res) => {
  const { fullname, username, password } = req.body;

  const user = await User.create({
    fullname,
    username,
    password,
  });
  if (user) {
    generateJwtToken(res, user._id);
    return res.status(201).json({
      data: user,
      message: 'User created successfully',
    });
  }

  res.status(400);
  throw new Error('Invaild User Data');
});

// @route auth/login
// method POST
// @desc login user and create token
const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (user && (await user.matchPassword(password))) {
    generateJwtToken(res, user._id);
    // res.cookie('test', 'eewe');
    return res.status(200).json({
      data: user,
      message: 'User logged in successfully',
    });
  }
  res.status(400);
  throw new Error('Invaild User Data');
});

// @route auth/logout
// method POST
// @desc logout user and clear token
const logout = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });

  return res.status(200).json({ message: 'user logged out' });
});

export { register, login, logout };
