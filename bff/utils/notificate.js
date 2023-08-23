export const notificate = (information, colorCode) => (
    console.log('\u001b[' + colorCode + 'm' + information + '\u001b[0m')
);