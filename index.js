"use strict"
{
  let T = require('three');

  let f = () => {console.log("pants")}
  f()

  var camera, scene, renderer;
	var mesh;
	init();
	animate();
	function init() {
		camera = new T.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
		camera.position.z = 400;
		scene = new T.Scene();
		var texture = new T.TextureLoader().load( 'crate.gif' );
		var geometry = new T.BoxBufferGeometry( 200, 200, 200 );
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
		mesh.rotation.x += 0.005;
		mesh.rotation.y += 0.01;
		renderer.render( scene, camera );
	}

}
