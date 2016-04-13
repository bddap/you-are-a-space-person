{
  let T = require('three');
  let S = require('./satellite.js');
  let textures = require('./textures.js');

  let camera, scene, renderer;
	let mesh;
	function init() {
		camera = new T.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );
		camera.position.z = 2;
    camera.rotateY(0.01);
		scene = new T.Scene();
		let texture = textures.crate;
		let geometry = new T.BoxBufferGeometry( 1, 1, 1 );
		let material = new T.MeshBasicMaterial( { map: texture } );
		mesh = new T.Mesh( geometry, material );
		scene.add( mesh );
		renderer = new T.WebGLRenderer();
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( renderer.domElement );
		//
		window.addEventListener( 'resize', onWindowResize, false );
	}
	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );
	}

	init();

  let world = {
    camera : S.Sat()
  };

	function animate() {
		requestAnimationFrame( animate );
		renderer.render( scene, camera );
    camera.rotateZ(0.001);
    mesh.rotateY(0.01);
	}

	animate();

  module.exports = {
    domElement : renderer.domElement,
    world : world
  };
}
