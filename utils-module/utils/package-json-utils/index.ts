import packageInfo from '../../../../package.json';

const getVersion = (): string => {
    return packageInfo.version;
};

const getName = (): string => {
    return packageInfo.name;
};

export { getVersion, getName };
