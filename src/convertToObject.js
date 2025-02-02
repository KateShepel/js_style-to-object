'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length === 0) {
    return {};
  }

  const result = {};
  const splitString = sourceString.split(';');
  let property = '';
  let value = '';

  for (let i = 0; i < splitString.length; i++) {
    const splitRule = splitString[i].split(':');

    if (splitRule.length < 2) {
      continue;
    }

    property = splitRule[0].trim();
    value = splitRule[1].trim();

    result[property] = value;
  }

  return result;
}

module.exports = convertToObject;
