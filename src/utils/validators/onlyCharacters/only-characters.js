import {regexChecker} from '../regex-checker';

export const onlyCharacters = input => regexChecker(input, /^[a-zA-Z]+$/, "Please type only letters.");