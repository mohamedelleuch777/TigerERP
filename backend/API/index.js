const express = require('express');
const router = express.Router();
const { requireAuth } = require('./middleware/requireAuth');
const { login, register, updateOneUser, deleteOneUser, getAllUser } = require('./user');
const { getDashboard } = require('./dashboard');


router.use(requireAuth)





/*
**************************************************
**************************************************
**********                              **********
**********          USERS API           **********
**********                              **********
**************************************************
**************************************************
*/
router.get('/user', getAllUser);
router.post('/user', login);
router.put('/user', register);
// router.patch('/user', updateOneUser )
// router.delete('/user', deleteOneUser)


/*
**************************************************
**************************************************
**********                              **********
**********        DASHBOARD API         **********
**********                              **********
**************************************************
**************************************************
*/
router.get('/dashboard', getDashboard);
















module.exports = router

