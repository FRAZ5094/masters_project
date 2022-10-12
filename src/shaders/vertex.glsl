attribute vec3 oldPos;

void main() {


  vec4 transformedPosition = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  //vec3 newPos = transformedPosition.xyz + 0.1;
  //vec3 newV = v;
  //vec3 a = vec3(1.0,0.0,0.0);

  //newV+=a;
  //newPos+=newV;

  gl_Position = transformedPosition+1.0;
}
