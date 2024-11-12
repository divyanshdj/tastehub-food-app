import { sum } from "../sum.js"

test('Test Case For Sum Operation', () => { 
    const res = sum(3,4);
    expect(res).toBe(7);
 })