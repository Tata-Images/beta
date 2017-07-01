/**
 * Checks if value is an integer.
 *
 * @category Language
 *
 * First version: June 25, 2017
 * Last updated : July 01, 2017
 *
 * @export
 * @param {*} input
 * @returns {boolean}
 */

import { typeOf } from '../src/typeOf';
import { toInteger } from '../src/toInteger';

export function isInteger(input: any): boolean {
  return typeOf(input, 'number') && input === toInteger(input);
}
