const event = require('events');
const eventEmitter = new event.EventEmitter();

const orderQueue = [];

// Handler
const listener1 = function listenerForPlacingOrder(){
  console.log("ME: Hello Hello, I'd like to order a Double Double, extra Cheese, hold the meat. And a small drink :) \n");
  eventEmitter.emit('placedOrder');
}

const listener2 = function listenerForTakingOrder(){
  console.log("InAndOut: Haha, ok you want a grilled cheese and small drink. That will be 5.99 \n");
  eventEmitter.emit('payForOrder');
}

const listener3 = function someDetailedName3(){
  console.log("InAndOut: Ok Here is your Drink and Your Reciept. Your order number is 55 \n");
  orderQueue.push('55');
  eventEmitter.emit('addOrderToQueue');
}

const listener4 = function someDetailedName4(){
  eventEmitter.emit('cookNextOrder');

}

const listener5 = function someDetailedName4(){
  console.log("We're Cooking");
  console.log(orderQueue);
}

// Add Event Listener
eventEmitter.addListener('atRegister', listener1);

// Add Event Listener
eventEmitter.addListener('placedOrder', listener2);

// Add Event Listener
eventEmitter.addListener('payForOrder', listener3);

// Add Event Listener
eventEmitter.addListener('addOrderToQueue', listener4);

// Add Event Listener
eventEmitter.addListener('cookNextOrder', listener5);



eventEmitter.emit('atRegister');



