const express = require('express');
const router = express.Router();

const {Employee} = require('../models/employee');

//Get all Employees http://localhost:8080/api/employees
router.get('/api/employees', (req, res)  => {
    Employee.find({}, (err, employees) =>{
        if(!err) {
            res.send(employees);
        }else{
            console.log(err);
        }
    });
});

//Get an Employee http://localhost:8080/api/employees
router.get('/api/employees/:id', (req, res)  => {
    Employee.findById(req.params.id, (err, employee) =>{
        if(!err) {
            res.send(employee);
        }else{
            console.log(err);
        }
    });
});

//Save an Employee http://localhost:8080/api/employees
router.post('/api/employees', (req, res)  => {
    const employee = new Employee({
        name: req.body.name,
        email: req.body.email,
        salary: req.body.salary
    });
    employee.save((err, data) =>{
        res.status(200).json({code: 200, message: 'Employee Added Successfully', addEmployee: data});
    });
});

//Update an Employee http://localhost:8080/api/employees/{empID}
router.put('/api/employees/:id', (req, res)  => { 
    const employee = new Employee({
        name: req.body.name,
        email: req.body.email,
        salary: req.body.salary
    });
    employee.findByIdAndUpdate(req.params.id, {$set: employee}, {new: true}, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Employee updated Successfully', updateEmployee: data});
        }else{
            console.log(err);
        }
    });
});

//Delete an Employee http://localhost:8080/api/employees/{empID}
router.delete('/api/employees/:id', (req, res)  => { 
    employee.findByIdAndRemove(req.params.id, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Employee deleted Successfully', deleteEmployee: data});
        }else{
            console.log(err);
        }
    });
});

module.exports = router;