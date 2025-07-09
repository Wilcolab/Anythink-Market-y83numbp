function toCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/[_\-\s]+(.)?/g, (match, chr) => chr ? chr.toUpperCase() : '')
        .replace(/^[A-Z]/, (chr, idx) => idx === 0 ? chr.toLowerCase() : chr);
}

// Examples:
// console.log(toCamelCase('first name')); // firstName
// console.log(toCamelCase('user_id')); // userId
// console.log(toCamelCase('SCREEN_NAME')); // screenName
// console.log(toCamelCase('mobile-number')); // mobileNumber