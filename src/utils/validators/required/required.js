export const required = input => {
    if (!input || input.length === 0) {
        return "The field is required!";
    }
}
