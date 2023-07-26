import { cloneDeep } from 'lodash';

const copyWithoutReference = (item: any): any => {
	return cloneDeep(item);
};

export { copyWithoutReference };
