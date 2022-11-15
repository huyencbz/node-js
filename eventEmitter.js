const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1, num2) => {
    console.log(num1 + num2);
});

eventEmitter.emit('tutorial', 1, 2);

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

const huyen = new Person('Huyen');
const huyen1 = new Person('Huyen1');

huyen.on('name', () => {
    console.log(huyen.name + ' is so cute');
});

huyen1.on('name', () => {
    console.log(huyen1.name + ' is so cute');
});

huyen1.emit('name');
huyen.emit('name');