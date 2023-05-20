import asyncHandler from 'express-async-handler';
import User from '../db/models/users.js';

// @desc get user info
// route GET /users/
// @access Private
const getUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    data: req.user,
    message: 'User profile',
  });
});

// @desc update user info
// route PUT /users/
// @access Private
const updateUser = asyncHandler(async (req, res) => {
  const { username, name, password } = req.body;

  const user = await User.findByIdAndUpdate(req.user._id);
  if (user) {
    if (password) {
      user.password = password;
    }
    user.username = username || user.username;
    user.name = name || user.name;
    await user.save();

    res.status(200).json({
      data: user,
      message: 'user info updated',
    });
  }

  res.status(500);
  throw new Error('Something went wrong');
});

// @desc delete user and task created
// route DETELE /users/
// @access Private

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndDelete(req.user._id);
  if (user) {
    res.status(200).json({
      message: 'user deleted successfully',
    });
  }

  res.status(500);
  throw new Error('Something went wrong');
});

export { getUser, updateUser, deleteUser };
