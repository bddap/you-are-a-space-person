//You are a space person :: state -> user_input -> state

let rendering = require('./src/rendering');
//let controls = require('./src/controls.js');
let S = require('./src/satellite');
var A = require('./src/recipes');
let bacon = require('baconjs');
var T = require('three');

let you_are_a_space_person = (state, user_input) => {
  state.time = user_input.time;
  return state;
};

let time = () => Date.now() / 1000;

let initial_state = {
  scene : rendering.scene,
  sats : [],
  time : time(),
  fingers : []
};

let r = () => Math.random() * 0.1 - 0.05

A.repeat( 100, () => {
  S.Sat( initial_state )
  A.end( initial_state.sats ).force(time(), new T.Vector3(r(),r(),r()))
} )

S.Sat( initial_state )
A.end( initial_state.sats ).force(time(), new T.Vector3(0.0,0.0,0.1))
A.end( initial_state.sats ).teleport(time(), new T.Vector3(0.0,0.0,2))
rendering.attach_cam( A.end( initial_state.sats ) )

bacon.fromEvent(document.getElementById('canvas'), 'click')
    .map(x=>{return {e:x,time:time()};})
    .scan(initial_state, you_are_a_space_person)
    .onValue( rendering.setstate )
//  .map(rendering.render);
