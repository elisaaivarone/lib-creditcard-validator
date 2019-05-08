const expect = require("chai").expect;
const lib = require("../lib/index")


describe("cardValidator",() => {
    it("valid:'5574735407364815'",() => {
        expect(lib.cardValidator('5574735407364815')).to.be.equal(true);
    });

    it("invalid:'123456789012345'",() => {
        expect(lib.cardValidator('123456789012345')).to.be.equal(false);
    });

    it("invalid:'1111111111111111'",() => {
        expect(lib.cardValidator('1111111111111111')).to.be.equal(false);
    });

    it("invalid:'0000000'",() => {
        expect(lib.cardValidator('0000000')).to.be.equal(false);
    });

    it("invalid:'aaaaaaaaaaaaaaaa'",() => {
        expect(lib.cardValidator('aaaaaaaaaaaaaaaa')).to.be.equal(false);
    });

    it("invalid:'a23&*^¨&&ggggg'",() => {
        expect(lib.cardValidator('a23&*^¨&&ggggg')).to.be.equal(false);
    });
    
})