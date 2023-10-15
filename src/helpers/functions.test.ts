/* eslint-disable no-magic-numbers */
import { isNil } from './functions';

describe('Helpers functions', () => {
  describe('isNil', () => {
    it('returns true if value is null', () => {
      expect(isNil(null)).toBe(true);
    });

    it('returns true if value is undefined', () => {
      expect(isNil(undefined)).toBe(true);
    });

    it('returns false if value is neither null nor undefined', () => {
      const falsyValues = ['', 0, false, {}, []];

      falsyValues.forEach((value) => {
        expect(isNil(value)).toBe(false);
      });
    });
  });
});

describe('Failing sample test', () => {
  it('fails', () => {
    expect(true).toBe(false);
  });
});
