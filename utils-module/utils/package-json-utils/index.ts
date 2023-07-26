import packageInfo from '../../../../package.json';

const getVersion = (): string => {
    return packageInfo.version;
};

export { getVersion };
