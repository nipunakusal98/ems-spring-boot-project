import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state ={
            employees: []

        }
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) =>{
            this.setState({employees: res.data});
        });
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
                                            <td>{employee.id}</td>
                                            <td>{employee.first_name}</td>
                                            <td>{employee.last_name}</td>
                                            <td>{employee.date_of_birth}</td>
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