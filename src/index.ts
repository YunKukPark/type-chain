interface IHuman {
	name: string;
	age: number;
	gender: string;
}

const person = {
	name: 'yunkuk',
	age: 22,
	gender: 'male'
};

const sayHi = (person: IHuman): string => {
	const { name, age, gender } = person;
	return `Hello ${name}! you are ${age}, you are ${gender}`;
};

console.log(sayHi(person));

export {};
