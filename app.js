// (function timer() {
// 	i=1; 
// 	for (;i<=5; i++) {
// 	setTimeout(function clog() {console.log(i)}, i*1000);
// 	}
//  })();

// const test = {
// 	prop: 42,
// 	func: function() {
// 	return this.prop;
// 	},
//  };
//  console.log(test.func()); //42

// const test = {
// 	prop: 42,
// 	func: () => {
// 	return this.prop;
// 	},
//  };
//  console.log(test.func());//undefined
 

// const x = {
// 	a: 1,
// 	f: function() {
// 		const inner = () => console.log(this.a);
// 		inner();
// 	}
// }
// x.f();


// const car1 = {
// 	color: "car1",
// 	setColor(color){
// 	this.color = color;
// 	}
// 	};
// 	const car2 = {
// 	color: ""
// 	};


// let f = car1.setColor.bind(car2);
// f('red');
// console.log(car2.color, car1.color);
// car1.setColor.call(car2, 'car3');
// console.log(car2.color, car1.color);
// car1.setColor.apply(car2, ['car4']);
// console.log(car2.color, car1.color);

// class Person {
// 	constructor() {
// 		this.id = "";
// 	}
// }


// class Student extends Person{
// 	constructor(name) {
// 		super();
// 		this.name = name;
// 	}
// 	getName() {
// 		return this.name;
// 	}
// }

// let x = new Student();




