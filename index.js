let rendering = require('./src/rendering');
let controls = require('./src/controls.js');
let satellite = require('./src/satellite.js');

controls.bind(rendering.domElement, rendering.camera);
