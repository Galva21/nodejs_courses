const {frutas, dinero} = require('./frutas');

frutas.forEach(element =>  {
    console.count(element);
});

console.log(dinero);

// utilizando el paquete de cowsay

const cowsay = require('cowsay');

console.log(cowsay.say({
    text:"como anda",
    e : "Aaa",
    T : "U"
}));