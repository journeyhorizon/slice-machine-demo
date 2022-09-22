import queryString from 'query-string';

/**
 * Serialise given object into a string that can be used in a
 * URL. Encode SDK types into a format that can be parsed with `parse`
 * defined below.
 *
 * @param {Object} params - object with strings/numbers/booleans or
 * SDK types as values
 *
 * @return {String} query string with sorted keys and serialised
 * values, `undefined` and `null` values are removed
 */
export const stringify = (params: {
  [name: string]: string | string[] | number | boolean | null | undefined;
}): string => {
  const cleaned = Object.keys(params).reduce(
    (result: { [name: string]: any }, key: string) => {
      const val = params[key];
      /* eslint-disable no-param-reassign */
      if (val !== null) {
        result[key] = val;
      }
      /* eslint-enable no-param-reassign */
      return result;
    },
    {},
  );
  return queryString.stringify(cleaned);
};
