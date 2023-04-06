const express = require("express");
const { auth } = require('../middlewares/auth');
const {
  login,
  register,
  logout,
  loginView,
  updateProfile,
  viewProfile,
  verification,
  addAdmin,
  addAdminView,
  deleteAdmin,
  viewAllAdmins,
} = require("../controllers/user.controller");

const route = express.Router();

route.get('/', loginView);
route.post('/login', login);
route.post('/register', register);
route.get('/logout', logout);
route.get('/profile', auth, viewProfile);
route.post('/profile', auth, updateProfile);
route.get('/verification/:emailID', verification);
route.post('/admin', addAdmin);
route.get('/delete/:id', auth, deleteAdmin);
route.get('/admin', addAdminView);
route.get('/alladmin', viewAllAdmins);

module.exports = route;
