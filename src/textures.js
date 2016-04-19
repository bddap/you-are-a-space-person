var T = require('three');

let tl = new T.TextureLoader();

let pallet = [
  [135,180,201],
  [179,130,114],
  [133,99,113],
  [0,62,156],
]

let w = 8;
let mag = vec => Math.sqrt( vec.map( v => Math.pow(v, 2) ).reduce( (a,b) => a+b ) ) ;
let rad = (x,y) => mag( [x,y].map( a => a + 0.5 - w / 2 ) ) / w / 2;
let clamp = (n,mi,ma) => Math.max(mi, Math.min(n, ma));
let cby = n => clamp(n,0,255);

let ts = pallet.map(([r,g,b,a=255]) => {
  let d = new Uint8Array(w*w*4);
  for (let y=0; y<w; y++) {
    for (let x=0; x<w; x++) {
      let i = (y*w+x)*4;
      [d[i+0],d[i+1],d[i+2]] = [r,g,b];//.map(l=>clamp(l-r*64+32,0,255));
      d[i+3] = a;
      if([x, y].some(a=>a==0 | a==w-1)){
        [d[i+0],d[i+1],d[i+2]] = [d[i+0],d[i+1],d[i+2]].map(a => cby(a-32))
      }
    }
  }
  let t = new T.DataTexture( d, w, w, T.RGBAFormat );
  t.needsUpdate = true;
  return t;
});

module.exports = {
  colors : ts,
  crate : tl.load( 'crate.gif' )
};
