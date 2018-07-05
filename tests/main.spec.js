import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main';

describe('Calc',() => {

    describe('Smoke tests', () => {

        it('should exists the method "sum"', () => {
            expect(sum).to.exist;
            expect(sum).to.be.a('function');
        });

        it('should exists the method "sum"', () => {
            expect(sub).to.exist;
            expect(sub).to.be.a('function');
        });

        it('should exists the method "sum"', () => {
            expect(mult).to.exist;
            expect(mult).to.be.a('function');
        });

        it('should exists the method "sum"', () => {
            expect(div).to.exist;
            expect(div).to.be.a('function');
        });
    });

    describe('Sum', () => {
        it('should return 4 when sum(2,2)', () =>
            expect(sum(2, 2)).to.be.equal(4));
    });

    describe('Sub', () => {
        it('should return 4 when sub(6,2)', () =>
            expect(sub(6, 2)).to.be.equal(4));

        it('should return -4 when sum(6, 10)', () =>
            expect(sub(6, 10)).to.be.equal(-4))
    });

    describe('Mult', () => {
        it('should return 4 when mult(2,2)', () =>
            expect(mult(2, 2)).to.be.equal(4));
        it('should return 0 when one of the values be equal 0', () =>
            expect(mult(2, 0)).to.be.equal(0));
    });

    describe('Div', () => {
        it('should return 1 when div(2,2)', () =>
            expect(div(2, 2)).to.be.equal(1));

        it('should return "Not is possible divide by 0" when divide by 0', () =>
            expect(div(4, 0)).to.be.equal('Not is possible divide by 0'));
    });
});
