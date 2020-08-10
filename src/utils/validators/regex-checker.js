export const regexChecker = (input, REGEX, message) => {
    if (!REGEX.test(input))
        return message;
};