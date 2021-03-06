import { should } from 'chai';
import { eq } from '../src/eq';

should();

describe(`eq() - @category Language`, () => {

  /* July 08, 2017 -
     Taken care of by --StrictNullChecks

    describe(`should return false for different types`, () => {

      it(`0 !== false`, () => {
        eq(0, false).should.be.false;
      });

      it(`"" !== false`, () => {
        eq('', false).should.be.false;
      });

      it(`"" !== 0`, () => {
        eq('', 0).should.be.false;
      });

      it(`"0" !== 0`, () => {
        eq('0', 0).should.be.false;
      });

      it(`"17" !== 17`, () => {
        eq('17', 17).should.be.false;
      });

      it(`[1,2] !== '1,2'`, () => {
        eq([1, 2], '1,2').should.be.false;
      });

      it(`'foo' !== NaN`, () => {
        eq('foo', NaN).should.be.false;
      });

    });

  */

  describe(`should do a SameValueZero false comparisons`, () => {

    /* July 08, 2017 -
       Taken care of by --StrictNullChecks

      it(`null !== undefined`, () => {
        eq(null, undefined).should.be.false;
      });

      it(`null !== false`, () => {
        eq(null, false).should.be.false;
      });

      it(`undefined !== false`, () => {
        eq(undefined, false).should.be.false;
      });

      it(`0 !== null`, () => {
        eq(0, null).should.be.false;
      });

      it(`0 !== undefined`, () => {
        eq(0, undefined).should.be.false;
      });

    */

    it(`{foo:'bar'} !== {foo:'bar'}`, () => {
      eq({ foo: 'bar' }, { foo: 'bar' }).should.be.false;
    });

    it(`[1,2,3] !== [1,2,3]`, () => {
      eq([1, 2, 3], [1, 2, 3]).should.be.false;
    });

    it(`0 !== NaN`, () => {
      eq(0, NaN).should.be.false;
    });


  });

  describe(`should do a SameValueZero true comparisons`, () => {

    it(`true === true`, () => {
      eq(true, true).should.be.true;
    });

    it(`false === false`, () => {
      eq(false, false).should.be.true;
    });

    it(`'hello' === 'hello'`, () => {
      eq('hello', 'hello').should.be.true;
    });

    it(`0 === 0`, () => {
      eq(0, 0).should.be.true;
    });

    it(`+0 === -0`, () => {
      eq(+0, -0).should.be.true;
    });

    it(`a === a (object)`, () => {
      const a: object = { foo: 'bar' };
      eq(a, a).should.be.true;
    });

    it(`a === a (array)`, () => {
      const a: number[] = [1, 2, 3];
      eq(a, a).should.be.true;
    });

    it(`a === a (string)`, () => {
      const a: string = 'hello';
      eq(a, a).should.be.true;
    });

  });

  /* July 08, 2017 -
     Taken care of by --StrictNullChecks

    describe(`should compare null/undefined/NaN correctly`, () => {

      it(`undefined === undefined`, () => {
        eq(undefined, undefined).should.be.true;
      });

      it(`null === null`, () => {
        eq(null, null).should.be.true;
      });

    });

  */

  describe(`should compare NaN correctly`, () => {

    it(`NaN === NaN`, () => {
      eq(NaN, NaN).should.be.true;
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`'hello' === 'hello'`, () => {
      const orig: string = 'hello';
      const input1: string = orig.slice(0);
      const input2: string = orig.slice(0);
      eq(input1, input2).should.be.true;
      input1.should.deep.equal(orig);
      input2.should.deep.equal(orig);
    });

    it(`100 !== 200`, () => {
      const orig1: number = 100;
      const orig2: number = 200;
      const input1: number = orig1;
      const input2: number = orig2;
      eq(input1, input2).should.be.false;
      input1.should.deep.equal(orig1);
      input2.should.deep.equal(orig2);
    });

  });

});
