/*eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }]*/

import moment from 'moment';

export default class DatasetValidator {

    static validateNames(names, values) {
        if (!Array.isArray(names)) {
            throw new Error('Names of Dataset must be an array.');
        }
        if (names.length === 0) {
            throw new Error('Names of Dataset must be an array with length greater than zero.');
        }
        if (names.length !== values.length) {
            throw new Error('Names of Dataset must have the same length like the columns of values of the Dataset.');
        }
        names.forEach((name) => {
            if (typeof name !== 'string') {
                throw new Error('All names of Dataset must be string\'s.');
            }
        });
    }

    static validateDates(dates, values) {
        if (!Array.isArray(dates)) {
            throw new Error('Dates of Dataset must be an array.');
        }
        if (dates.length === 0) {
            throw new Error('Dates of Dataset must be an array with length greater than zero.');
        }
        if (dates.length !== values[0].length) {
            throw new Error('Dates of Dataset must have the same length like the rows of values of the Dataset.');
        }
        dates.forEach((date) => {
            if (!moment(date).isValid()) {
                throw new Error('Dates of Dataset must be in a valid ISO datetime format.');
            }
        });
    }

    static validateData(values) {
        if (!Array.isArray(values)) {
            throw new Error('Values of Dataset must be an array.');
        }
        if (values.length === 0) {
            throw new Error('Values of Dataset must be an array with length greater than zero.');
        }
        this.validateDataArray(values);
    }

    static validateDataArray(values) {
        let rowLength = 0;
        for (let rowIndex = 0; rowIndex < values.length; rowIndex++) {
            if (Array.isArray(values[rowIndex])) {
                if (rowIndex === 0) {
                    rowLength = values[rowIndex].length;
                } else if (rowIndex > 0 && rowLength !== values[rowIndex].length) {
                    throw new Error('All rows of Dataset must have the same length.');
                }

                for (let colIndex = 0; colIndex < values[rowIndex].length; colIndex++) {
                    if (!this.isNumeric(values[rowIndex][colIndex])) {
                        throw new Error('All values of Dataset must be number\'s.');
                    }
                }
            } else {
                throw new Error('Rows of Dataset must be array\'s.');
            }
        }
    }

    static isNumeric(value) {
        return typeof value === "number" && !isNaN(value);
    }
}
