/**
 * Created by goran on 31.5.17.
 */

'use strict';

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
module.exports = {
    formatter: function(number, locale) {
        return number.toLocaleString(locale);
    },
    hello: function(name) {
        return "Hello " + name;
    }
};


