import { expect } from 'chai'
import { subtract } from '../src/index.js'
 


describe("suite", () => {
    it('test subtract', () => {
        expect(subtract(1, 2)).to.equal(-1)
    })
})