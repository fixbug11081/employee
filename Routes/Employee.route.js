const express = require('express');
const app = express();
const employeeRoute = express.Router();

let employeeModel = require('../Model/Employee');
 // To Get List Of Employees
 employeeRoute.route('/').get(function (req, res) {
    employeeModel.find(()=> {
    if (err) {
    console.log(err);
    }
    else {
    res.json(employee);
    }
    });
    });

// To Add New Employee

employeeRoute.route('/addEmployee').post((req, res) => {

    let employee = new employeeModel(req.body);
    employee.save()
        .then(game => {
            res.status(200).json({ 'employee': 'Employee added successfully' });
        })
        .catch(err => {
            res.status(400).send("Something went wrong");
        });
});

// To Get Employee Details By Employee ID

employeeRoute.route('/editEmployee/:id').get((req, res) => {
    let id = req.params.id;
    employodel.findById(id, (err, employee)=>{
        res.json(employee);
    });
});


// To Update The Employee Details

employeeRoute.route('/updateEmployee/:id').post((req, res) => {
    employeeModel.findById(req.params.id, (err, employee) => {
        if (!employee)
            return next(new Error('Unable to find the employee by id'));
        else {
            employee.firstName = req.body.firstName;
            employee.lastName = req.body.lastName;
            employee.email = req.body.email;
            employee.phone = req.body.phone;
            employee.save().then(emp => {
                res.json("Employee updated successfully")
            })
                .catch(err => {
                    res.status(400).send("Unable to update Employee");
                });
        }
    });

});


 // To Delete The Employee


employeeRoute.route('/deleteEmployee/:id').get(function(req,res){
    employeeModel.findByIdAndRemove({_id:req.params.id},function (err, employee){
        if(err) res.json(err);
        else res.json("Employ delted successfully");
    });
});
module.exports =employeeRoute;
