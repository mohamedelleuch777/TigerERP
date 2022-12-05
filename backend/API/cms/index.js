const express = require('express');
const router = express.Router();
// const User = require('../../models/users');
const { getAllBuildings, addOneBuilding, updateOneBuilding } = require('./building');
const { getAllRooms, addOneRoom, updateOneRoom, deleteOneRoom } = require('./room');
const { cms_login, cms_register, cms_updateOneUser, cms_deleteOneUser, cms_getAllAuth } = require('./cms_user');
const { getAllEvents, addOneEvent, updateOneEvent, deleteOneEvent } = require('./event');
const { requireAuth } = require('../middleware/requireAuth');


router.use(requireAuth)

/*
**************************************************
**************************************************
**********                              **********
**********          CMS USER API        **********
**********                              **********
**************************************************
**************************************************
*/
router.get('/auth', cms_login );
router.post('/auth', cms_register);
router.patch('/auth/:authId/:field', cms_updateOneUser )
router.delete('/auth/:authId', cms_deleteOneUser )
router.put('/auth', cms_getAllAuth )

/*
**************************************************
**************************************************
**********                              **********
**********          BUILDING API        **********
**********                              **********
**************************************************
**************************************************
*/
router.get('/building', getAllBuildings );
router.post('/building', addOneBuilding);
router.patch('/building/:buildingId/:field', updateOneBuilding )

/*
**************************************************
**************************************************
**********                              **********
**********          ROOM API            **********
**********                              **********
**************************************************
**************************************************
*/
router.get('/room', getAllRooms);
router.post('/room', addOneRoom);
router.patch('/room/:roomId/:field', updateOneRoom )
router.delete('/room/:roomId', deleteOneRoom )

/*
**************************************************
**************************************************
**********                              **********
**********          EVENTS API          **********
**********                              **********
**************************************************
**************************************************
*/
router.get('/event', getAllEvents);
router.post('/event', addOneEvent);
router.patch('/event/:eventId/:field', updateOneEvent )
router.delete('/event/:eventId', deleteOneEvent )


module.exports = router
