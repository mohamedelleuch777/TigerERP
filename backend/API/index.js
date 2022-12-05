const express = require('express');
const router = express.Router();
const { requireAuth } = require('./middleware/requireAuth');
const { login, register, updateOneUser, deleteOneUser, getAllUser } = require('./user');
const { getHome } = require('./home');


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
// router.put('/user', register);
// router.patch('/user', updateOneUser )
// router.delete('/user', deleteOneUser)


/*
**************************************************
**************************************************
**********                              **********
**********          HOME API           **********
**********                              **********
**************************************************
**************************************************
*/
router.get('/home', getHome);

module.exports = router