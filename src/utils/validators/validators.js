import {onlyCharacters} from './onlyCharacters/only-characters';
import {required} from './required/required';
import { validatePhoneNumber } from '../validators/validatePhoneNumber/validatePhoneNumber';


export const validators = {
    onlyCharacters,
    required,
    validatePhoneNumber,
}