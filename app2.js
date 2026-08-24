const EventEmitter=require('event');
const event=new EventEmitter();

event.on('greet',()=>{
    console.log('hello, this is an event!');
});
event.emit('greet');