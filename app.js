// (function timer() {
	 
// 	for (var i=0;i<3; i++) {
// 	setTimeout(function clog() {console.log(i)}, 0);
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
// 	color: "blue",
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
// car1.setColor.call(car2, 'grey');
// console.log(car2.color, car1.color);
// car1.setColor.apply(car2, ['yellow']);
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



// function threeSum(nums) {

// 	var nummap = {};    // map a value to the number of ocurrances in nums
// 	var solutions = new Set(); // map of solutions as strings

// 	// map each value in nums into the number map
// 	nums.forEach((val) => {
// 			var k = nummap[val] ? nummap[val] : 0; // k is the number of times val appears in nummap
// 			nummap[val] = k+1; // increment by 1 and update
// 	});

// 	// for each pair of numbers, see if we can find a solution the number map
// 	for (let i = 0; i < nums.length; i++) {

// 			var ival = nums[i];
// 			nummap[ival]--;

// 			for (let j = i+1; j < nums.length; j++) {
// 					var jval = nums[j];
// 					nummap[jval]--;

// 					var target = -(ival + jval); // this could compute "-0", but it works itself out since 0==-0 and toString will strip the negative off

// 					// if target is in the number map, we have a solution
// 					if (nummap[target]) {

// 							// sort this three sum solution and insert into map of available solutions
// 							// we do this to filter out duplicate solutions
// 							var tmp = [];
// 							tmp[0] = ival;
// 							tmp[1] = jval;
// 							tmp[2] = target;

// 							tmp.sort();
// 							solutions.add(tmp.toString());
// 					}

// 					nummap[jval]++; // restore original instance count in nummap
// 			}
// 			nummap[ival]--;
// 	}

// 	for (s of solutions.keys()) {
// 			console.log(s);
// 	}

// }

// threeSum([9,8,7,-15, -9,0]);

// <img
//         src="http://example.com/trees/my-image.jpg"
//         alt="Trees"
//         height="200
// />

// console.log('start');
// async function foo() {
// return 'done!';
// }
// async function bar() {
// console.log('inside bar - start');
// let result = await foo();
// console.log(result);// "done!"
// console.log('inside bar - end');
// }
// bar();
// console.log('end');

const a = [1,3,5,3,3];
//translate/map all elements in an array to another set of values
const b = a.map(function(elem, i, array) {
return elem + 3;})// [4,6,8,6,6]
//select elements based on a condition
const c = a.filter(function(elem, i, array){
	return elem !== 3;});//[1,5]
	//find first element or index of first element satisfying condition
	const d = a.find(function(elem) {return elem > 1;}); //3
	const e = a.findIndex(function(elem) {return elem > 1;}); //1
	const f = a.reduce(function(accumulator, currentValue, currentIndex, array){
		return accumulator + currentValue;}); //15
	console.log(f);

