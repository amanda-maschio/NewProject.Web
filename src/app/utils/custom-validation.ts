import { AbstractControl } from "@angular/forms";
import { cpf } from 'cpf-cnpj-validator';
import { cnpj } from 'cpf-cnpj-validator';

export class CustomValidation {

    public static validateCpf(control: AbstractControl) {

        const cpfNumber = control.value;

        if (cpf.isValid(cpfNumber)) {
            return null;
        } else {
            return { invalidCpf: true };
        }

    }

    public static validateCnpj(control: AbstractControl) {

        const cnpjNumber = control.value;

        if (cnpj.isValid(cnpjNumber)) {
            return null;
        } else {
            return { invalidCnpj: true };
        }

    }

    public static validatePhoneNumber(control: AbstractControl) {

        const phone = control.value;

        var regex = new RegExp('^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$');

        if (regex.test(phone)) {
            return null;
        } else {
            return { invalidPhone: true };
        }

    }

}