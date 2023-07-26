const dateToString = (date: Date): string => {
	// Make sure the date is a Date object
	date = new Date(date);
	const day = date.getDate().toString();
	const month = (date.getMonth() + 1).toString();
	const year = date.getFullYear().toString();

	return `${day.length < 2 ? '0' + day : day}-${month.length < 2 ? '0' + month : month}-${year}`;
};

export { dateToString };
