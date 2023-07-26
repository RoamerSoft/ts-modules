const stringToNumber = (string: string): number => {
	if (string) {
		return Number(string);
	} else {
		return 0;
	}
};

const isEven = (number: number): boolean => {
	return number % 2 == 0;
};

const sumProperties = (objects: any[], propertyName: string): number => {
	let sum = 0;
	objects.forEach(object => (sum += object[propertyName]));

	return sum;
};

export { stringToNumber, isEven, sumProperties };
