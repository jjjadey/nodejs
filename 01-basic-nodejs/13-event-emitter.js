const EventEmitter = require('events');
const customEmitter = new EventEmitter();

// on -> listen for an even
// 'response' is event name
customEmitter.on('response', (name, id) => {
    console.log(`data recieved user ${name} with id:${id}`);
});
customEmitter.on('response', () => {
    console.log('some other logic here');
});

// emit -> emit an event
customEmitter.emit('response', 'john', 34)

// 1.listen for event (listen before emit)
// 2.emit an event
