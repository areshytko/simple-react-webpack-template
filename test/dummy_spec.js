/**
 * Created by areshytko on 28.08.16.
 */

import {expect} from 'chai';

function increment(num) {
    return num + 1;
}

describe("immutability", () => {

    describe("a number", () => {

        it("is immutable", () => {

            let num = 42;

            expect(increment(num)).to.equal(43);
            expect(num).to.equal(42);
        });
    });
});