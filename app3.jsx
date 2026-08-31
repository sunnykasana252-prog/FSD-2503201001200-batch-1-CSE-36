const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const event = new MyEmitter();

// Listen for the "greet" event
event.on("greet", (name) => {
    console.log(`Hello ${name}`);
});

// Listen for the "exit" event
event.on("exit", () => {
    console.log("Exit my custom event emitter...");
});

// Emit events
event.emit("greet", "cse36");
event.emit("exit");