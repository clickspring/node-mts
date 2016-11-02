import DatasetValidator from './datasetValidator';

export default class Dataset {
    constructor(values, dates, names) {
        DatasetValidator.validate(values, dates, names);
        //TODO set all varibales
    }

    //TODO getter methods

    //TODO static method for readers

    //TODO static method for operators
}
