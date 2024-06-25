const canSwim = {
    swim() {
        console.log(`${this.name} can swim.`);
    }
};

const canWalk = {
    walk() {
        console.log(`${this.name} can walk.`);
    }
};

function createCreature(name) {
    return {
        name,
        ...canSwim,
        ...canWalk
    };
}

const creature = createCreature('Reconfort');
creature.walk(); // Reconfort can walk.
creature.swim(); // Reconfort can swim.