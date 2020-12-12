const Employee = require('../models/Employee')


//show all employess in the database
const index = (req, res, next) => {
    Employee.find()
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'An error occured!'
            })
        })
}

//show an employee by its ID
const show = (req, res, next) => {
    let employeeID = req.body.employeeID
    Employee.findByID(employeeID)
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'An error occured!'
            })
        })
}

//add a new employee to the database
const store = (req, res, next) => {
    let employee = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    })
    employee.save()
        .then(response => {
            res.json({
                message: 'Employee added successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'An error occured!'
            })
        })
}

//update an employee
const update = (req, res, next) => {
    let employeeID = req.body.employeeID

    let updatedData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    }
    Employee.findByIdAndUpdate(employeeID, {
            $set: updatedData
        })
        .then(response => {
            res.json({
                message: 'Employee updated successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'An error occured!'
            })
        })
}

//delete an employee
const destroy = (req, res, next) => {
    let employeeID = req.body.employeeID

    Employee.findByIdAndRemove(employeeID)
        .then(response => {
            res.json({
                message: 'Employee deleted successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'An error occured!'
            })
        })
}

module.exports = {
    index,
    show,
    store,
    update,
    destroy
}