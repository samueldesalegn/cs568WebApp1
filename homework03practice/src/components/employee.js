export default function Employee({employee}) {
	// console.log(employee);
	// let {name} = employee;
	// let action = () =>{
	// 	if (name) {
	// 		alert(`Welcome ${name}`);
	// 	}
	// }

	return (
		<div>
			<div>
			<p>{employee.name} {"=>"} {employee.salary}</p>

			</div>

			
		</div>
	)
}
