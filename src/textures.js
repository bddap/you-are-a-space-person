var T = require('three');

let tl = new T.TextureLoader();

module.exports = {
  crate : tl.load( 'crate.gif' )
};
