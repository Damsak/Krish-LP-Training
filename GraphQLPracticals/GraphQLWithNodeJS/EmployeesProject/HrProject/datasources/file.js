const employees = require('../data/workers.json')
const {DataSource} = require('apollo-datasource')
const _ = require('lodash')


class EmployeeService extends DataSource {


    constructor() {
        super();
    }

    initialize(config) {

    }

    getEmployees(args){
        //filter employees based on the args
        return _.filter(employees,args);
    }

    getEmployeeById(id){
        return employees.filter(function(employee){
            return employee.id == id;
        })
    }
}

module.exports = EmployeeService