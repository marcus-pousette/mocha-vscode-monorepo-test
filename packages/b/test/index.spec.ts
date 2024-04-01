import { expect } from 'chai'
import { subtract } from '../src/index.js'
 
// this seems to make the test explorer to not work anymore
const fn = async () => {}
await fn()

describe("suite", () => {
    it('test', () => {
        console.log("RUNNING TEST IN B")
        expect(subtract(1, 2)).to.equal(-1)
    })
})