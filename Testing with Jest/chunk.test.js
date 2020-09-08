const chunkArray = require('./chunk');
const { TestScheduler } = require('jest');

test('chunArray function exists', () => {
    expect(chunkArray).toBeDefined();
});

test('Chunk an array of 10 values with a length of 2', () => {
    const num = [1,2,3,4,5,6,7,8,,9,10];
    const len = 2;
    const chunkedArr = chunkArray(num, len);

    expect(chunkedArr).toEqual([[1,2], [3,4], [5,6], [7,8], [9,10]]);
});

test('Chunk an array of 3 values with a length of 1', () => {
    const num = [1,2,3];
    const len = 1;
    const chunkedArr = chunkArray(num, len);

    expect(chunkedArr).toEqual([[1], [2], [3]]);
});