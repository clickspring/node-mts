'use strict'

class TestClass {
    constructor(a, b) {
        this._a = a;
        this._b = b;
    }

    getA() {
        return this._a;
    }
}

const testClass = new TestClass(2, 2);
console.log('A1:', testClass.getA());


testClass.a = 3;
console.log('A2:', testClass.getA());
