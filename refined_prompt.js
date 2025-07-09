/**
 * Converts a string to camelCase format.
 *
 * - Handles spaces, hyphens, and underscores as word separators.
 * - Preserves acronyms (all-uppercase words) by keeping them uppercase except for the first word, which is lowercased.
 * - Skips non-letter characters except for numbers, spaces, hyphens, and underscores.
 * - Returns an error message for invalid inputs, such as a single word or non-string values.
 *
 * @function toCamelCase
 * @param {string} input - The input string to convert to camelCase.
 * @returns {string} The camelCase formatted string, or an error message if input is invalid.
 *
 * @example
 * toCamelCase("API_response-data"); // Returns: "apiResponseData"
 * toCamelCase("user_name");         // Returns: "userName"
 * toCamelCase("user-API-key");      // Returns: "userAPIKey"
 * toCamelCase("Y");                 // Returns: "Error: Input must contain at least two words for camelCase conversion."
 */

/**
 * Converts a string to dot.case format.
 *
 * - Handles spaces, hyphens, and underscores as word separators.
 * - Preserves acronyms (all-uppercase words) by converting them to lowercase.
 * - Skips non-letter characters except for numbers, spaces, hyphens, and underscores.
 * - Returns an error message for invalid inputs, such as a single word or non-string values.
 *
 * @function toDotCase
 * @param {string} input - The input string to convert to dot.case.
 * @returns {string} The dot.case formatted string, or an error message if input is invalid.
 *
 * @example
 * toDotCase("API_response-data"); // Returns: "api.response.data"
 * toDotCase("user_name");         // Returns: "user.name"
 * toDotCase("user-API-key");      // Returns: "user.api.key"
 * toDotCase("Y");                 // Returns: "Error: Input must contain at least two words for dot.case conversion."
 */
 /* Converts a string to camelCase.
 * Handles spaces, hyphens, underscores as word separators.
 * Preserves acronyms (all-uppercase words).
 * Skips non-letter characters.
 * Returns an error message for invalid inputs (e.g., single character).
 * @param {string} input
 * @returns {string}
 */
function toCamelCase(input) {
    if (typeof input !== 'string' || input.trim().length === 0) {
        return 'Error: Input must be a non-empty string.';
    }

    // Remove non-letter/number/space/hyphen/underscore characters
    let cleaned = input.replace(/[^A-Za-z0-9 _-]+/g, '');

    // Split by space, hyphen, or underscore
    let words = cleaned.split(/[\s_-]+/).filter(Boolean);

    if (words.length < 2) {
        return 'Error: Input must contain at least two words for camelCase conversion.';
    }

    // Helper to check if a word is an acronym (all uppercase, at least 2 chars)
    const isAcronym = (word) => /^[A-Z]{2,}$/.test(word);

    // Build camelCase string
    let result = words
        .map((word, idx) => {
            if (isAcronym(word)) return idx === 0 ? word.toLowerCase() : word;
            if (idx === 0) return word.toLowerCase();
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');

    return result;
}

// Example usage:
// console.log(toCamelCase("API_response-data")); // "apiResponseData"
// console.log(toCamelCase("Y")); // "Error: Input must contain at least two words for camelCase conversion."
// console.log(toCamelCase("user_name")); // "userName"
// console.log(toCamelCase("user-API-key")); // "userAPIKey"

/**
 * Converts a string to dot.case.
 * Handles spaces, hyphens, underscores as word separators.
 * Preserves acronyms (all-uppercase words).
 * Skips non-letter characters.
 * Returns an error message for invalid inputs (e.g., single character).
 * @param {string} input
 * @returns {string}
 */
function toDotCase(input) {
    if (typeof input !== 'string' || input.trim().length === 0) {
        return 'Error: Input must be a non-empty string.';
    }

    // Remove non-letter/number/space/hyphen/underscore characters
    let cleaned = input.replace(/[^A-Za-z0-9 _-]+/g, '');

    // Split by space, hyphen, or underscore
    let words = cleaned.split(/[\s_-]+/).filter(Boolean);

    if (words.length < 2) {
        return 'Error: Input must contain at least two words for dot.case conversion.';
    }

    // Helper to check if a word is an acronym (all uppercase, at least 2 chars)
    const isAcronym = (word) => /^[A-Z]{2,}$/.test(word);

    // Build dot.case string
    let result = words
        .map((word) => isAcronym(word) ? word.toLowerCase() : word.toLowerCase())
        .join('.');

    return result;
}

module.exports = {
    toCamelCase,
    toDotCase
};
