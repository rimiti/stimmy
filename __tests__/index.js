/* eslint-disable flowtype/require-valid-file-annotation */
import stimmy from '../src';

describe('Replace brackets with array items', () => {
  it('Should replace brackets {0} in string with array[0]', () => {
    const str = stimmy('Hello {0},', ['Dimitri']);
    expect(str).toEqual('Hello Dimitri,');
  });

  it('Should replace brackets {0} and {1} in string with array[0] and array[1]', () => {
    const str = stimmy('Hello {0}, I\'m {1}.', ['Dimitri', 25]);
    expect(str).toEqual('Hello Dimitri, I\'m 25.');
  });
});

describe('Pass a string without brackets but with an array of items', () => {
  it('Should return the same string passed', () => {
    const str = stimmy('This should be the same', ['testing', 'stimmy']);
    expect(str).toEqual('This should be the same');
  });
});

describe('Pass in incorrect parameters', () => {
  it('Should return same input value when a number is passed as first parameter', () => {
    const str = stimmy(100, ['testing', 'stimmy']);
    expect(str).toEqual(100);
  });

  it('Should return same input value when a number is passed instead of an array as second parameter', () => {
    const str = stimmy('hello', 1);
    expect(str).toEqual('hello');
  });
});

describe('Replace object values based on their keys', () => {
  it('Replace object values based on one key', () => {
    const str = stimmy('My name is {name}', {name: 'Dimitri'});
    expect(str).toEqual('My name is Dimitri');
  });

  it('Replace object values based on two keys', () => {
    const str = stimmy('My name is {name} and I\'m {age}.', {name: 'Dimitri', age: 25});
    expect(str).toEqual('My name is Dimitri and I\'m 25.');
  });

  it('Replace object values based on two keys in reverse order', () => {
    const str = stimmy('I\'m {age} and my name is {name}.', {name: 'Dimitri', age: 25});
    expect(str).toEqual('I\'m 25 and my name is Dimitri.');
  });

  it('If the key doesn\'t exist in object, it will not replace it in the string', () => {
    const str = stimmy('I\'m {age}, and my name is {name}.', {name: 'Dimitri'});
    expect(str).toEqual('I\'m {age}, and my name is Dimitri.');
  });
});
