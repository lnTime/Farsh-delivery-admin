export const required = input => {
    if (input === undefined || input.length === 0) {
        return "The field is required!";
    }
}