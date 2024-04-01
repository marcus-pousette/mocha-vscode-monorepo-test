import { expect } from 'chai'
import { subtract } from '../src/index.js'
 

describe("suite", () => {
    it('test', () => {
        console.log("RUNNING TEST IN B")
        expect(subtract(1, 2)).to.equal(-1)
    })
})