{
  let T = require('three');

  let camera, scene, renderer;
	let mesh;
	function init() {
		camera = new T.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );
		camera.position.z = 2;
    camera.rotateY(0.01);
		scene = new T.Scene();
		renderer = new T.WebGLRenderer({
      canvas : document.getElementById('canvas')
    });
		renderer.setPixelRatio( window.devicePixelRatio );
    onWindowResize();
		window.addEventListener( 'resize', onWindowResize, false );
	}
	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );
	}

	init();

  let state = {sats:[]};
  let setstate = (s) => {state=s;};

  let q = new T.Quaternion();

  let time = () => Date.now() / 1000;

	function animate() {
    let t = time();
    state.sats.forEach((s)=>{
      s.update(t);
    });
		requestAnimationFrame( animate );
		renderer.render( scene, camera );
	}

  document.addEventListener('load',onWindowResize,false);
	animate();

  module.exports = {
    scene : scene,
    setstate : setstate
  };
}
