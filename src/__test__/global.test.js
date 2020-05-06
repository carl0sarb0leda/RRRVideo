const text = 'Helllo hello';

describe('This is a test suit', () => {
    test('This is a little test of test', () => {
        expect(text).toMatch(/hello/);
    });
});

// beforeAll(() => console.log('Starting All Test'))
// afterAll(() => console.log('Finish All Test'))
