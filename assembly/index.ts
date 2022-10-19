// The entry file of your WebAssembly module.

export function vectorAdd(v1: StaticArray<f64>, v2: StaticArray<f64>) : StaticArray<f64> {

  v1[0]+=v2[0];
  v1[1]+=v2[2];
  v1[2]+=v2[2];

  return v1;

}

export function vectorSub(v1: StaticArray<f64>, v2: StaticArray<f64>) : StaticArray<f64> {

  v1[0]-=v2[0];
  v1[1]-=v2[1];
  v1[2]-=v2[2];

  return v1;

}

export function vectorMultplyScalar(v: StaticArray<f64>, scalar: f64) : StaticArray<f64> {

  v[0]*= scalar;
  v[1]*= scalar;
  v[2]*= scalar;


  return v;

}

export function vectorDivideScalar(v: StaticArray<f64>, scalar: f64) : StaticArray<f64> {

  return vectorMultplyScalar(v,1/scalar);

}

export function getNormalizedVector(v: StaticArray<f64>) : StaticArray<f64> {
  

  const mag = getVectorMag(v);

  v[0]/= mag;
  v[1]/= mag;
  v[2]/= mag;

  return v;

}


export function getVectorMag(v: StaticArray<f64>) : f64 {

  return  Math.sqrt(v[0]*v[0] + v[1]*v[1] + v[2]*v[2]);

}


export function setVectorMag(v: StaticArray<f64>, newMag: f64) : StaticArray<f64> {

  return vectorMultplyScalar(getNormalizedVector(v), newMag);

}


//export const calculateSpringForce = (position1 : THREE.Vector3, position2: THREE.Vector3, k : number, natural_length : number) : THREE.Vector3 => {
  ////this function takes two positions,k value and natural length and calculates the spring force between those two points on the point position 1
 
  ////position1 is the vertex we want to calculate the spring force on
  ////position2 is the vertex we imagine the spring is attached to

  ////get distance between the two positions
  //let dist = position1.sub(position2);

  ////calculate the extension of the spring from the natural length
  //const extension : number = dist.length() - natural_length;

  ////set the length of the distance vector to the extension of the spring
  //dist.setLength(extension);

  ////take advantage of the distance vector being in the same direction as the spring force
  ////f = -kx;
  //const f = dist.multiplyScalar(-k);

  //return f;
//}

export function calculateSpringForce(v1: StaticArray<f64>, v2: StaticArray<f64>, k: f64, naturalLength: f64) : StaticArray<f64> {

  console.log(v1.toString());
  console.log(v2.toString());

  const dist = vectorSub(v1,v2);
  console.log(dist.toString());

  const extensionMag = getVectorMag(dist) - naturalLength;

  const extensionVector = setVectorMag(dist, extensionMag);

  const f = vectorMultplyScalar(extensionVector,-k);

  return f;

}




