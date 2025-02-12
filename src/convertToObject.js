'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const propertyCss = {};
  const cssProperty = sourceString.split(';');
  const cssPropertyTrim = [];

  for (let i = 0; i < cssProperty.length; i++) {
    cssPropertyTrim.push(cssProperty[i].trim());
  }

  for (let i = 0; i < cssPropertyTrim.length; i++) {
    const proretry = cssPropertyTrim[i].split(':');

    if (proretry.length > 1) {
      const key = proretry[0].trim();
      const value = proretry[1].trim();

      propertyCss[key] = value;
    }
  }

  return propertyCss;
}

module.exports = convertToObject;
