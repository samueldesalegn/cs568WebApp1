class People {
	constructor(name, address, phone){
		this.name = name;
		this.address = address;
		this.phone = phone;
	}
}

export default class Employee extends People{
	constructor(name, address, phone, position, salary){
		super(name, address, phone)
		this.position = position;
		this.salary = salary;
	}
}

