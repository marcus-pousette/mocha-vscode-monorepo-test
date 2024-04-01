import { expect } from 'chai'
import { add } from '../src/index.js'

describe("suite", () => {
    it('test', () => {
       console.log("RUNNING TEST IN A")
       expect(add(1, 2)).to.equal(3) 
    })
})