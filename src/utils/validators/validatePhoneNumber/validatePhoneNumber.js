export const validatePhoneNumber = (number) => {
    if (number && !number.isValid) {
        return 'Phone number is not valid';
    }
}