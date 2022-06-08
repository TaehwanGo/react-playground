import { firstTextCapitalizeAll } from '../format';

describe('firstTextCapitalizeAll', () => {
  it('should capitalize all words in a string', () => {
    expect(firstTextCapitalizeAll('hello world')).toBe('Hello World');
  });
});
