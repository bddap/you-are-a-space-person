let M = require("math");

console.log(M);

let Sat = () => {
  return {
    pos : [0,0,0],
    vel : [0,0,0],
    rot : [0,0,0,0],
    rov : [0,1,0,0],
  }
}

module.exports = {
  Sat : Sat
}
