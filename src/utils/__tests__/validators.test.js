import {
validatePassword,
validateEmail,
  validateUsername
} from '../../../src/utils/validators';
  validateUsername,
  validateNumber,
  validateRange
} from 'utils/validators';

describe('Validators', () => {
describe('validatePassword', () => {
@@ -69,4 +71,34 @@ describe('Validators', () => {
expect(validateUsername('user@name')).toBe(false);
});
});

  describe('validateNumber', () => {
    it('should validate correct numbers', () => {
      expect(() => validateNumber('test', 42)).not.toThrow();
      expect(() => validateNumber('test', 3.14)).not.toThrow();
    });

    it('should throw error for non-numbers', () => {
      expect(() => validateNumber('test', 'not a number')).toThrow('test must be a number');
      expect(() => validateNumber('test', NaN)).toThrow('test must be a number');
      expect(() => validateNumber('test', Infinity)).toThrow('test must be a number');
    });

    it('should validate integers when integerOnly=true', () => {
      expect(() => validateNumber('test', 42, true)).not.toThrow();
      expect(() => validateNumber('test', 3.14, true)).toThrow('test must be an integer');
    });
  });

  describe('validateRange', () => {
    it('should validate correct ranges', () => {
      expect(() => validateRange('min', 1, 'max', 10)).not.toThrow();
      expect(() => validateRange('min', 5, 'max', 5)).not.toThrow();
    });

    it('should throw error when min > max', () => {
      expect(() => validateRange('min', 10, 'max', 1))
        .toThrow('min must be less than or equal to max');
    });
  });
});