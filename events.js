
const EventEmitter = require('events');

//registering for the event to be fired only one time using once
// const event = new EventEmitter();
// event.on('demo', () => {
//   console.log('event fired');
// });
// event.emit('demo');

//create an event emitter instance and register couple of callbacks and parameters passing
const event = new EventEmitter();
event.on('demo', () => {
  console.log('event fired');
});
event.on('demo', (name, age) => {
    console.log(`event fired 1 is ${name}, ${age}`);
});
event.on('demo', () => {
    console.log('event fired 2');
});
event.emit('demo', "john", 21);

