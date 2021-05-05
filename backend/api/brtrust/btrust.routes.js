const express = require('express')
const {getData} = require('../../controllers/btrust.controller')
const router = express.Router()

router.get('/',getData)
module.exports = router