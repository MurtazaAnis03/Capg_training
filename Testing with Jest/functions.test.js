const functions = require('./functions');

//beforeEach(() => initDatabase());
//afterEach(() => closeDatabase());

beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

const initDatabase = () => console.log('DataBase Initialized...');
const closeDatabase = () => console.log('DataBase closed...');
const nameCheck = () => console.log('Checking name...');

describe('Checking Names', () => {
    beforeEach(() => nameCheck());

    test('User is John', () => {
        const user = 'John';
        expect(user).toBe('John');
    });
});

//toBe
test('Adds 2 + 2 equals 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

//not.toBe
test('Adds 2 + 2 NOT equals 4', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

//toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

//toBeFalsy
test('Should be Falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();                //null, zero, undefined all are falsy value 
});

//toEqual
test('User Should be Brad Pitt object', () => {
    expect(functions.createUser()).toEqual({ firstName: 'Brad', lastName: 'Pitt' });
});

//Less than & Greater than
test('Should be under 1500', () =>{
    const load1 = 1200;
    const load2 = 100;
    expect(load1 + load2).toBeLessThan(1500);                                    //also has toBeLessThanOrEqual
});

//toMatch -> Regex
test('Should not have I in blue', () => {
    expect('team').not.toMatch(/I/i);
});

//toContain -> Arrays
test('murtaza Should be in userName', () => {
    userName = ['sam', 'max', 'murtaza'];
    expect(userName).toContain('murtaza');
});

//working with async data
//promises
test('User fetched name should be Ervin Howell', () => {
   expect.assertions(1);
   return functions.fetchUser().then(data => {
       expect(data.name).toEqual('Ervin Howell');
   });
});

//async await method
test('User fetched name should be Ervin Howell', async() => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Ervin Howell');
});