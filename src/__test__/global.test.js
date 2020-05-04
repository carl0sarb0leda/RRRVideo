const text = "Helllo hello"

test('This is a little test of test', () => {
    expect(text).toMatch(/hello/)
})