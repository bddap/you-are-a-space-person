
//You are a space person :: state -> user_input -> state

let rendering = require('./src/rendering');
//let controls = require('./src/controls.js');
let S = require('./src/satellite.js');
let bacon = require('baconjs');

let you_are_a_space_person = (state, user_input) => {
  state.time = user_input.time;
  S.Sat(state);
  return state;
};

let time = () => Date.now() / 1000;

let initial_state = {
  scene : rendering.scene,
  sats : [],
  time : time()
};

bacon.fromEvent(document.getElementById('canvas'), 'click')
    .map(x=>{return {e:x,time:time()};})
    .scan(initial_state, you_are_a_space_person)
    .onValue( rendering.setstate )
//  .map(rendering.render);
