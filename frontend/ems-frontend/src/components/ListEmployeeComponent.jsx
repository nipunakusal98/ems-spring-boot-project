import React, { Component } from 'react';

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state ={
            employees: []

        }
    }


    render() {
        return (
            <div>

                <h2 className="text-center">Employees List</h2>
                    <div className="row">
                        <table className="table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Employee ID</th>
                                    <th>Employee First name</th>
                                    <th>Employee Last name</th>
                                    <th>Date of Birth</th>
                                    <th>Salary</th>
                                    <th>Actions</th>

                                    
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    this.state.employees.map(
                                        employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.dateofBirth}</td>
                                            <td>{employee.salary}</td>
                                        </tr>
                                    )
                                }
                            </tbody>

                        </table>
                    </div>
                
            </div>
        );
    }
}

export default ListEmployeeComponent;