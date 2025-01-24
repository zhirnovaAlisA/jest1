import lifeCounter from '../src/life_counter';

test.each([
    { name: 'onion', health: 12, expected: "critical" },
    { name: 'tomato', health: 26, expected: "wounded" },
    { name: 'banana', health: 72, expected: "healthy" },
    { name: 'orange', health: "bchjgh", expected: undefined }
])('Test characters status', (name, health) => {   
    const result = lifeCounter(name, health, expected);
    expect(result).toBe(expected);
});