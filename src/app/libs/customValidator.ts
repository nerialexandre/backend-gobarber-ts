import { cnpj, cpf } from 'cpf-cnpj-validator';

import { isValid, parseISO } from 'date-fns';

import zxcvbn from 'zxcvbn';

import validator from 'validator';

class Custom {
  public isValidPassword(password: string): boolean {
    return !!(password && zxcvbn(password).score >= 2);
  }

  public isPhoneNumber(number: string): boolean {
    const mobilePhoneNumberExp = new RegExp(/(55)[0-9]{11}/);
    return !!mobilePhoneNumberExp.test(number);
  }

  public isContactPhoneNumber(number: string): boolean {
    const mobilePhoneNumberExp = new RegExp(/(55)[0-9]{11}/);
    const localPhoneNumberExp = new RegExp(/(55)[0-9]{10}/);
    return !!(
      mobilePhoneNumberExp.test(number) || localPhoneNumberExp.test(number)
    );
  }

  public(url: string): boolean {
    return !!validator.isURL(url);
  }

  public isISODate(date: string): boolean {
    return !!validator.isISO8601(date);
  }

  public isDateOnly(date: string): boolean {
    return !!validator.isISO8601(date) && isValid(parseISO(date));
  }

  public isDocType(type: string): boolean {
    return !!validator.isIn(type, ['cpf', 'cnpj']);
  }

  public isDocNumber(doc: string): boolean {
    return !!(cpf.isValid(doc) || cnpj.isValid(doc));
  }

  public isRgNumber(rgNumber: number): boolean {
    return !Number.isNaN(rgNumber);
  }

  public isNumber(number: string): boolean {
    return !Number.isNaN(number);
  }

  public isBoolean(bool: boolean): boolean {
    return !!(typeof bool === 'boolean');
  }

  public isObject(object: string): boolean {
    return !!(typeof object === 'object');
  }

  public isSortQuery(str: string): boolean {
    return !!validator.isIn(str, ['ASC', 'DESC']);
  }
}

export default new Custom();
