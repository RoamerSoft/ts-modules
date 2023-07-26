enum SortDirection {
	ASC = 'ASCENDING',
	DESC = 'DESCENDING'
}

const sortObjects = (objectArray: any[], propertyName: string, sortDirection: SortDirection = SortDirection.ASC): any[] => {
	// Clone the original array
	const sortedArray = [...objectArray];

	// Sort based on sort direction
	switch (sortDirection) {
		case SortDirection.ASC:
			sortedArray.sort((a, b) => a[propertyName] - b[propertyName]);
			break;
		case SortDirection.DESC:
			sortedArray.sort((a, b) => b[propertyName] - a[propertyName]);
			break;
	}

	return sortedArray;
};

export { sortObjects, SortDirection };
