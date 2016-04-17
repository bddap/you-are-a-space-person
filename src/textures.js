var T = require('three');

let tl = new T.TextureLoader();

let pallet = [
  [70,166,157], //46a69
  [105,24,106], //69186a
  [201,79,25],  //c94f19
  [77,123,88],  //4d7b58
  [255,232,84], //ffe854
]

let ts = pallet.map(([r,g,b,a=255]) => {
  let d = new Uint8Array(4*4*4);
  for (let i=0; i<4*4*4; i+=4) {
    [d[i+0],d[i+1],d[i+2],d[i+3]] = [r,g,b,a];
  }
  let t = new T.DataTexture( d, 4, 4, T.RGBAFormat );
  return t;
});

module.exports = {
  crate : tl.load( 'crate.gif' )
};
