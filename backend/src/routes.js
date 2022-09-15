const router = require("express").Router()
const controller = require("./controller")
const cors = require('cors')

router.get('/', cors(), controller.list)

router.get('/generate', cors(), controller.generate)

module.exports = router
