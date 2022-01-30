class Human {
	public name: string;
	public age: number;
	public gender: string;

	constructor(name: string, age: number, gender: string) {
		this.name = name;
		this.age = age;
		this.gender = gender;
	}
}

const yunkuk = new Human('yunkuk', 18, 'male');

const sayHi = (person): string => {
	const { name, age, gender } = person;
	return `Hello ${name}! you are ${age}, you are ${gender}`;
};

console.log(sayHi(yunkuk));

export {};
