import { isEqual } from 'lodash';

const isEquivalent = (object1: Object, object2: Object): boolean => {
    return isEqual(object1, object2);
};

export { isEquivalent };
