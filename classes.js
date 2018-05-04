class Car{
	constructor(make, model){
		this.make = make;
		this.model;
	}
	static add(a,b){
		return a+b;
	}
}

let newCar = new Car(`nissan`, `sentra`);
console.log(newCar);

