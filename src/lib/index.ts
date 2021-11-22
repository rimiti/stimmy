import { Replacer, Items } from './types';

/**
 * @description String replacer
 * @param {string} start - Start delimiter.
 * @param {string} end - End delimiter.
 * @returns {Replacer}
 */
export const stimmy = (start = '{', end = '}'): Replacer => {
  const theStart = start.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  const theEnd = end.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

  const arrayReg = new RegExp(`(${theStart}(.+?)${theEnd})`, 'g');
  const objectReg = new RegExp(`(${theStart}([^}]+)${theEnd})`, 'g');
  const startReg = new RegExp(`${theStart}`, 'g');
  const endReg = new RegExp(`${theEnd}`, 'g');

  /**
   * @description Factory.
   * @params {string} value - Input string
   * @params {Items} items - Items to replace
   * @returns {string}
   */
  return (value: string, items: Items): string => {
    if (items instanceof Array) {
      // @ts-ignore
      return value.replace(arrayReg, (i) => items[i.replace(startReg, '').replace(endReg, '')]);
    }

    return value.replace(objectReg, (i) => {
      const key: string = i.replace(startReg, '').replace(endReg, '');

      // @ts-ignore
      if (!items[key]) {
        return i;
      }

      // @ts-ignore
      return items[key];
    });
  };
};
