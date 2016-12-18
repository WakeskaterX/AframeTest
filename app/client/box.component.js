
AFRAME.registerComponent('scale-on-click', {
  schema: {
    to: { default: '1.5 1.5 1.5' },
  },
  init() {
    let data = this.data;
    this.el.addEventListener('click', function setScale() {
      let prev_scale = this.getAttribute('scale') || convertToVector3('1 1 1');
      if (typeof data.to === 'string') data.to = convertToVector3(data.to);
      let prev_pos = this.getAttribute('position');
      let new_pos = {
        x: prev_pos.x + ((data.to.x - prev_scale.x) / 2),
        y: prev_pos.y + ((data.to.y - prev_scale.y) / 2),
        z: prev_pos.z + ((data.to.z - prev_scale.z) / 2)
      };

      console.log(prev_scale, data.to, new_pos, prev_pos);
      this.setAttribute('scale', data.to);
      this.setAttribute('position', new_pos);
      data.to = prev_scale;
      console.log(prev_scale, data.to, new_pos, prev_pos);
    });
  }
});

function convertToVector3(vect_str) {
  let spl = vect_str.split(' ');
  return new THREE.Vector3(spl[0], spl[1], spl[2]);
}
