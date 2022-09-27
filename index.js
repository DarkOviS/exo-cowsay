const package = require('./information.js');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text: `${package.name} ${package.campus}`,

}));
