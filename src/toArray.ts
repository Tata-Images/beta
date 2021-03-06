/**
 * Convert value to an array
 *
 * Note: this function rellies heavily on the ES6 Array.from()
 *       except that it added in handling from null/undefined,
 *       as well as support for converting object's values into
 *       an array.
 *
 * @category Language
 *
 * First version: July 02, 2017
 * Last updated : July 02, 2017
 *
 * @export
 * @param {*} input
 * @returns {any[]}
 */

import { isArrayLike } from './isArrayLike';
import { type } from './type';

export function toArray<T>(input: T | Iterable<T>): T[] {

    return !input
        ? []
        : (isArrayLike(input) || input[Symbol.iterator])
            ? Array.from(input as Iterable<T>)
            : type.isObject(input)
                ? Object.keys(input).map((key: string) => input[key])
                : [];

}
