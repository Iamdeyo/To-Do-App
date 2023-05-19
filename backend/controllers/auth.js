// @route auth/register
// method POST
// @desc Register user
const register = (req, res) => {
  res.status(200).send('register user');
};

// @route auth/login
// method POST
// @desc login user and create token
const login = (req, res) => {
  res.status(200).send('login user');
};

// @route auth/logout
// method POST
// @desc logout user and clear token
const logout = (req, res) => {
  res.status(200).send('logout user');
};

export { register, login, logout };
