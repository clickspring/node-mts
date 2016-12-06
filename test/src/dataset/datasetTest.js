import DataSet from './../../../src/dataset/dataset';
import { expect } from 'chai';

describe('Dataset', function() {
    describe('constructor', function() {
        it('should thrwo an error because values are not defined', function() {
            expect(() => new DataSet()).to.throw('Values of DataSet must be an array.');
        });
        it('should thrwo an error because array of values has no values', function() {
            expect(() => new DataSet([], null, null)).to.throw('Values of DataSet must be an array with length greater than zero.');
        });
    });
});
