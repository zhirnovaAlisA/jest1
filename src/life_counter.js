export default function lifeCounter(object) {
    if (typeof object.health !== 'number' || object.health < 0) {
        throw new Error('Invalid health value');
    }

    if (object.health > 50) {
        return "healthy";
    } else if (object.health >= 15) {
        return "wounded";
    } else {
        return "critical";
    }
}
