let T = require('three');
let C = require('./textures');

let Sat = (state) => {
  let geometry = new T.BoxBufferGeometry( 1, 1, 1 );
  let material = new T.MeshBasicMaterial( { map:
    //C.crate
    //C.colors[0]
    C.colors[Math.floor(Math.random() * C.colors.length)]
  } );
  let mesh = new T.Mesh( geometry, material );
  mesh.rotationAutoUpdate = false;
  state.scene.add( mesh );

  let pos = new T.Vector3(0,0,0);
  let vel = new T.Vector3(0,0,0);
  let rot = new T.Quaternion();
  let rov = {axis:new T.Vector3(1,0,0), angle:0.0};
  let epoch = state.time;

  let uloc = time => {
    mesh.position.copy(pos);
    mesh.position.addScaledVector(vel, (time - epoch));
  };

  let urot = time => {
    mesh.quaternion.setFromAxisAngle(rov.axis, (time - epoch) * rov.angle);
    mesh.quaternion.multiplyQuaternions(rot,mesh.quaternion);
  }

  let update = time => {
    uloc(time);
    urot(time);
  }

  let force = (time, vec) => {
    update(time)
    pos.copy( mesh.position )
    rot.copy( mesh.quaternion )
    epoch = time
    vel.add(vec)
  }

  let add = item => {
    mesh.add(item)
  }

  let teleport = (time, vec) => {
    update(time)
    pos.copy( mesh.position )
    rot.copy( mesh.quaternion )
    epoch = time
    pos.copy(vec)
  }

  state.sats.push({
    update : update,
    force : force,
    add : add,
    teleport : teleport
  });
}

module.exports = {
  Sat : Sat
}
