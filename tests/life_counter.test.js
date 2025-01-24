import lifeCounter from '../src/life_counter';

test.each([
    [{ name: 'Mage', health: 90 }, "healthy"],
    [{ name: 'Warrior', health: 50 }, "wounded"],
    [{ name: 'Archer', health: 15 }, "wounded"],
    [{ name: 'Rogue', health: 10 }, "critical"],
])('Should return correct status for %o', (object, expected) => {
    expect(lifeCounter(object)).toBe(expected);
})
test('Should throw error for invalid health type', () => {
    expect(() => lifeCounter({ name: 'Mage', health: 'invalid' })).toThrow('Invalid health value');
});

test('Should throw error for negative health', () => {
    expect(() => lifeCounter({ name: 'Mage', health: -10 })).toThrow('Invalid health value');
});

