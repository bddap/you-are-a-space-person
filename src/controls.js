
module.exports.bind = (domel) => {
  let touchstart = function (event) {
    for (let k in event){
      console.log(k+':'+event[k]);
    }
  }

  let touchmove = function (event) {

  }

  let touchend = function (event) {

  }

  domel.addEventListener('touchstart',touchstart,false);
  domel.addEventListener('touchmove',touchmove,false);
  domel.addEventListener('touchend',touchend,false);
}
