
{
  let T = require('three');
  let textures = require('./src/textures.js');
  var controls = require('./src/controls.js');


  var camera, scene, renderer;
	var mesh;
	function init() {
		camera = new T.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );
		camera.position.z = 1;
		scene = new T.Scene();
		var texture = textures.crate;
		var geometry = new T.BoxBufferGeometry( 1, 1, 1 );
		var material = new T.MeshBasicMaterial( { map: texture } );
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
	function animate() {
		requestAnimationFrame( animate );
		renderer.render( scene, camera );
	}

	init();
	animate();
  controls.bind(renderer.domElement);

}
