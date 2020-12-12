const express = require('express')

const router = express.Router()

const EmployeeController = require('../controllers/EmployeeController')


router.get('/', EmployeeController.index)
router.get('/show', EmployeeController.show)
router.get('/store', EmployeeController.store)
router.get('/update', EmployeeController.update)
router.get('/delete', EmployeeController.destroy)

module.exports = router