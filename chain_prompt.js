/**
 * Converts a string to kebab-case, then to dot.case.
 * Handles spaces, hyphens, and underscores as word separators.
 * Returns an error message for invalid inputs (single word or non-string values).
 *
 * @param {string} input - The string to convert.
 * @returns {string} The converted string in dot.case format, or an error message.
 *
 * @example
 * toKebabCase("Hello World") // "hello.world"
 * toKebabCase("hello_world-test") // "hello.world.test"
 * toKebabCase("singleword") // "Error: Input must be a string with at least two words."
 * toKebabCase(123) // "Error: Input must be a string with at least two words."
 */
function toKebabCase(input) {
    if (typeof input !== 'string') {
        return "Error: Input must be a string with at least two words.";
    }

    // Replace all separators with spaces, then split into words
    const words = input
        .replace(/[_\-]+/g, ' ')
        .trim()
        .split(/\s+/);

    if (words.length < 2) {
        return "Error: Input must be a string with at least two words.";
    }

    // Convert to kebab-case
    const kebab = words.map(w => w.toLowerCase()).join('-');
    // Convert kebab-case to dot.case
    const dotCase = kebab.replace(/-/g, '.');
    return dotCase;
}

// Documentation
/**
 * toKebabCase function documentation:
 *
 * Parameters:
 *   - input (string): The string to convert. Must contain at least two words separated by spaces, hyphens, or underscores.
 *
 * Returns:
 *   - (string): The input converted to dot.case format (all lowercase, words separated by dots).
 *   - If the input is not a string or contains fewer than two words, returns an error message.
 *
 * Examples:
 *   toKebabCase("Hello World") // "hello.world"
 *   toKebabCase("hello_world-test") // "hello.world.test"
 *   toKebabCase("singleword") // "Error: Input must be a string with at least two words."
 *   toKebabCase(123) // "Error: Input must be a string with at least two words."
 */