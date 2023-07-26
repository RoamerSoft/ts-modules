const capitalizeFirstLetter = (string: String): string => {
	if (string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	} else {
		return '';
	}
};

const capitalizeLetters = (string: String): string => {
	if (string) {
		return string.toUpperCase();
	} else {
		return '';
	}
};

const decapitalizeLetters = (string: String): string => {
	if (string) {
		return string.toLowerCase();
	} else {
		return '';
	}
};

const objectToString = (object: object): string => {
	if (object) {
		return JSON.parse(JSON.stringify(object));
	} else {
		return '';
	}
};

export { capitalizeFirstLetter, capitalizeLetters, decapitalizeLetters, objectToString };
