import lifeCounter from '../src/lifeCounter';

test.each([
    [{ name: 'Mage', health: 90 }, "healthy"],
    [{ name: 'Warrior', health: 50 }, "wounded"],
    [{ name: 'Archer', health: 15 }, "wounded"],
    [{ name: 'Rogue', health: 10 }, "critical"],
])('Should return correct status for %o', (object, expected) => {
    expected(lifeCounter(object)).toBe(expected);
});

