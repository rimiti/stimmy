// @flow
export default (value: string, items: Array<mixed> | Object): string => {
  if (typeof value === 'string' && items instanceof Array) {
    // $FlowFixMe: Flow doesn't understand computed values
    return value.replace(/({\d})/g, (i) => items[i.replace(/{/, '').replace(/}/, '')]);
  } else if (typeof value === 'string' && items instanceof Object) {
    return value.replace(/({([^}]+)})/g, (i) => {
      const key = i.replace(/{/, '').replace(/}/, '');
      // $FlowFixMe: Flow doesn't understand computed values
      if (!items[key]) return i;
      return items[key];
    });
  }
  return value;
};
