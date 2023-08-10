const dateToString = (date: Date): string => {
    // Make sure the date is a Date object
    date = new Date(date.toISOString());
    const day = date.getDate().toString();
    const month = (date.getMonth() + 1).toString();
    const year = date.getFullYear().toString();

    return `${day.length < 2 ? '0' + day : day}-${month.length < 2 ? '0' + month : month}-${year}`;
};

const utcToGmtPlus2 = (date: Date): Date => {
    const gmtPlus2Timestamp = new Date(date.toISOString());
    gmtPlus2Timestamp.setHours(gmtPlus2Timestamp.getHours() + 2);
    return gmtPlus2Timestamp;
}

export { dateToString, utcToGmtPlus2 };
