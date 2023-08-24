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
            sortedArray.sort((a, b) => {
                if (a[propertyName] < b[propertyName]) return -1;
                if (a[propertyName] > b[propertyName]) return 1;
                return 0;
            });
            break;
        case SortDirection.DESC:
            sortedArray.sort((a, b) => {
                if (a[propertyName] > b[propertyName]) return -1;
                if (a[propertyName] < b[propertyName]) return 1;
                return 0;
            });
            break;
    }

    return sortedArray;
};

export { sortObjects, SortDirection };
