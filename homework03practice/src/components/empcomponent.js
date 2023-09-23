import React from "react";
import Employee from "./employee";

export default class EmployeeList extends React.Component {
	state = this.props;
	
	render(){
		// console.log(this.props)
		let {employees} = this.props;
		// console.log(employees)
		let action = () =>{
			const total = employees.reduce((acc, val) => acc + val.salary, 0)
			
			alert(`Total employees salaries: $${total}`);
				
			

		}

		return (
			<div>
				<div>
					{
				employees.map((employee, index) => <Employee key={index} employee ={employee} /> )
				}
				</div>
				<button onClick={action}>clickMe</button>
			</div>
		)
	}

}