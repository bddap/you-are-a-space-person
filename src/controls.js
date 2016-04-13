
let _ = require('underscore');

let pr = x => console.log(JSON.stringify(x));

module.exports.bind = (domel, camera) => {
  let touches = [];

  let delta = (t0,t1) => {
    return _.zip(t0,t1).map( a => a );
  }

  let touchstart = function (e) {

  }

  let touchmove = function (e) {
    let t = _.range(e.touches.length).map(
      i => [ e.touches[i].screenX, e.touches[i].screenY ]);
    let d = delta(touches, t);
    pr(d);
    touches = t;
  }

  let touchend = function (e) {

  }

  let touchcancel = function (e) {

  }

  domel.addEventListener('touchstart',touchstart,false);
  domel.addEventListener('touchmove',touchmove,false);
  domel.addEventListener('touchend',touchend,false);
  domel.addEventListener('touchcancel',touchcancel,false);

  //domel.onmousemove = e=>console.log(e);
}
