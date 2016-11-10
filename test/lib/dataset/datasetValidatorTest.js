/*eslint object-curly-spacing: ["error", "always"]*/
/*global describe*/
/*global it*/

import DatasetValidator from './../../../lib/dataset/datasetValidator';
import { expect } from 'chai';

describe('DatasetValidator', function() {
    describe('isNumeric', function() {
        it('should return false because argument is a string', function() {
            expect(DatasetValidator.isNumeric('number')).to.be.equal(false);
        });

        it('should return false because argument is null', function() {
            expect(DatasetValidator.isNumeric(null)).to.be.equal(false);
        });

        it('should return false because argument is undefined', function() {
            expect(DatasetValidator.isNumeric()).to.be.equal(false);
        });

        it('should return true because argument is a number', function() {
            expect(DatasetValidator.isNumeric(111)).to.be.equal(true);
        });
    });

    describe('validateData of Dataset', function() {
        it('should throw an error because values are not defined', function() {
            expect(() => DatasetValidator.validateData()).to.throw('Values of Dataset must be an array.');
        });

        it('should throw an error because array of values has no values', function() {
            expect(() => DatasetValidator.validateData([])).to.throw('Values of Dataset must be an array with length greater than zero.');
        });

        it('should throw an error because rows of values must be array\'s', function() {
            expect(() => DatasetValidator.validateData([1, 2])).to.throw('Rows of Dataset must be array\'s.');
        });

        it('should throw an error because all rows of values must have the same length', function() {
            expect(() => DatasetValidator.validateData([[1, 2], [2]])).to.throw('All rows of Dataset must have the same length.');
        });

        it('should throw an error because all values must be number\'s', function() {
            expect(() => DatasetValidator.validateData([[1, 2], [2, 'value']])).to.throw('All values of Dataset must be number\'s.');
        });
    });

    describe('validateDates of Dataset', function() {
        const values = [[1, 2], [1, 2]];
        it('should throw an error because dates are not defined', function() {
            expect(() => DatasetValidator.validateDates(null, values)).to.throw('Dates of Dataset must be an array.');
        });

        it('should throw an error because array of dates has no values', function() {
            expect(() => DatasetValidator.validateDates([], values)).to.throw('Dates of Dataset must be an array with length greater than zero.');
        });

        it('should throw an error because length of dates is not equal length of values', function() {
            expect(() => DatasetValidator.validateDates(['date1'], values)).to.throw('Dates of Dataset must have the same length like the rows of values of the Dataset.');
        });

        it('should throw an error because a date has no valid ISO datetime format', function() {
            expect(() => DatasetValidator.validateDates(['2014-07-09T14:00:00.000Z', 'date2'], values)).to.throw('Dates of Dataset must be in a valid ISO datetime format.');
        });
    });

    describe('validateNames of Dataset', function() {
        const values = [[1, 2], [1, 2]];
        it('should throw an error because names are not defined', function() {
            expect(() => DatasetValidator.validateNames(null, values)).to.throw('Names of Dataset must be an array.');
        });

        it('should throw an error because array of names has no values', function() {
            expect(() => DatasetValidator.validateNames([], values)).to.throw('Names of Dataset must be an array with length greater than zero.');
        });

        it('should throw an error because length of names is not equal length of values', function() {
            expect(() => DatasetValidator.validateNames(['name1'], values)).to.throw('Names of Dataset must have the same length like the columns of values of the Dataset.');
        });

        it('should throw an error because all names must be string\'s', function() {
            expect(() => DatasetValidator.validateNames(['name1', 2], values)).to.throw('All names of Dataset must be string\'s.');
        });
    });
});
