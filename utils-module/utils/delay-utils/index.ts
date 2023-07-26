import { debounce } from 'lodash';

let debounceRef: any;

const debounceFunction = (func: () => any, wait: number): any => {
	// Cancel previous debounce if any
	debounceRef && debounceRef.cancel();
	// Create debounce
	debounceRef = debounce(func, wait);
	// Start debounce
	debounceRef();
};

export { debounceFunction };
