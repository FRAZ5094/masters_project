attribute float uaMag;

varying float aMag;

void main() {

    aMag = uaMag;

    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}