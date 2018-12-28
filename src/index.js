// @flow
export default function (start: string = '{', end: string = '}'): Function {
  // remove RegExp specials
  const theStart = start.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  const theEnd = end.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

  const arrayReg = new RegExp(`(${theStart}(.+?)${theEnd})`, 'g');
  const objectReg = new RegExp(`(${theStart}([^}]+)${theEnd})`, 'g');
  const startReg = new RegExp(`${theStart}`, 'g');
  const endReg = new RegExp(`${theEnd}`, 'g');

  return (value: string, items: Array<mixed> | Object): string => {
    if (typeof value === 'string' && items instanceof Array) {
      // $FlowFixMe: Flow doesn't understand computed values
      return value.replace(arrayReg, (i) => items[i.replace(startReg, '').replace(endReg, '')]);
    }

    if (typeof value === 'string' && items instanceof Object) {
      return value.replace(objectReg, (i) => {
        const key = i.replace(startReg, '').replace(endReg, '');
        // $FlowFixMe: Flow doesn't understand computed values
        if (!items[key]) return i;
        return items[key];
      });
    }
    return value;
  };
}
