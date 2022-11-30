varying float aMag;

vec3 colorFunction(float m) {

    if (m <= 0.25){
        return vec3(0.0,4.0*m,1.0);
    }
    
    if (m <= 0.5){
        return vec3(0.0,1.0,-4.0*(m - 0.25) + 1.0);
    }
    
    if (m<= 0.75){
        return vec3(4.0  * (m - 0.5),1.0,0);
    }
    
    return vec3(1.0, -4.0 * (m - 0.75) + 1.0,0.0);
}

void main() {


  gl_FragColor = vec4(colorFunction(aMag),1.0);

}