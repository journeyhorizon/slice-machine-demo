import toPairs from 'lodash/toPairs';

export const PASSWORD_MIN_LENGTH = 8;
export const PASSWORD_MAX_LENGTH = 256;

const isNonEmptyString = (val: string) => {
  return typeof val === 'string' && val.trim().length > 0;
};

/**
 * Validator functions and helpers for Final Forms
 */

// Final Form expects and undefined value for a successful validation
const VALID = undefined;

type VALIDATOR = (value: any) => string | typeof VALID;

export const required = (message: string) => (value: any) => {
  if (typeof value === 'undefined' || value === null) {
    // undefined or null values are invalid
    return message;
  }
  if (typeof value === 'string') {
    // string must be nonempty when trimmed
    return isNonEmptyString(value) ? VALID : message;
  }
  return VALID;
};

export const requiredStringNoTrim = (message: string) => (value: any) => {
  return typeof value === 'string' && value.length > 0 ? VALID : message;
};

// DEPRECATED in favor of required
export const requiredBoolean = (message: string) => (value: any) => {
  return typeof value === 'boolean' ? VALID : message;
};

// DEPRECATED in favor of required
export const requiredAndNonEmptyString = (message: string) => (value: any) => {
  return isNonEmptyString(value) ? VALID : message;
};

export const requiredFieldArrayCheckbox = (message: string) => (value: any) => {
  if (!value) {
    return message;
  }

  const entries = toPairs(value);
  const hasSelectedValues = entries.filter(e => !!e[1]).length > 0;
  return hasSelectedValues ? VALID : message;
};

export const minValue =
  (message: string, minimumValue: number) => (value: any) => {
    const neededToCheckedValue =
      value && typeof value === 'number' ? value : parseInt(value);
    return value && neededToCheckedValue >= minimumValue ? VALID : message;
  };

export const maxValue =
  (message: string, maximumValue: number) => (value: any) => {
    const neededToCheckedValue =
      value && typeof value === 'number' ? value : parseInt(value);
    return value && neededToCheckedValue <= maximumValue ? VALID : message;
  };

export const minLength =
  (message: string, minimumLength: number) => (value: any) => {
    const hasLength = value && typeof value.length === 'number';
    return hasLength && value.length >= minimumLength ? VALID : message;
  };

export const maxLength =
  (message: string, maximumLength: number) => (value: any) => {
    if (!value) {
      return VALID;
    }
    const hasLength = value && typeof value.length === 'number';
    return hasLength && value.length <= maximumLength ? VALID : message;
  };

export const nonEmptyArray = (message: string) => (value: any) => {
  return value && Array.isArray(value) && value.length > 0 ? VALID : message;
};

// Source: http://www.regular-expressions.info/email.html
// See the link above for an explanation of the tradeoffs.
const EMAIL_RE = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const emailFormatValid = (message: string) => (value: any) => {
  return value && EMAIL_RE.test(value) ? VALID : message;
};

export const sameValues = (message: string, currentValue: string) => (value: any) => {
  return currentValue === value ? VALID : message;
}
// const parseNum = str => {
//   const num = Number.parseInt(str, 10);
//   return Number.isNaN(num) ? null : num;
// };

// export const ageAtLeast = (message, minYears) => (value: any) => {
//   const { year, month, day } = value;
//   const dayNum = parseNum(day);
//   const monthNum = parseNum(month);
//   const yearNum = parseNum(year);

//   // day, month, and year needs to be numbers
//   if (dayNum !== null && monthNum !== null && yearNum !== null) {
//     const now = moment();
//     const age = new Date(yearNum, monthNum - 1, dayNum);
//     const ageInYears = now.diff(moment(age), 'years', true);

//     return age && age instanceof Date && ageInYears >= minYears ? VALID : message;
//   }
//   return message;
// };

export const composeValidators =
  (...validators: VALIDATOR[]) =>
  (value: any) => {
    return validators.reduce((error, validator) => {
      return error || validator(value);
    }, VALID!);
  };
