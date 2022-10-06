import {calculateSpringForce, getPositionVectorOfVertexAtIndex} from "./helperFunctions";

export class Spring {
  vertexIndex : number;
  springAttachmentPointIndex : number;
  k : number;
  l : number;
  attached : boolean;

  constructor(vertexIndex : number, springAttachmentPointIndex : number, k : number, l : number) {
    this.vertexIndex = vertexIndex;
    this.springAttachmentPointIndex = springAttachmentPointIndex;
    this.k = k;
    this.l = l;
    this.attached = true;
  }

  applyForce(a : THREE.Vector3[], vertices : THREE.BufferAttribute | THREE.InterleavedBufferAttribute ) : void {

    if (this.attached) {
      const f : THREE.Vector3 = calculateSpringForce(getPositionVectorOfVertexAtIndex(this.vertexIndex,vertices),getPositionVectorOfVertexAtIndex(this.springAttachmentPointIndex,vertices),this.k,this.l);

      a[this.vertexIndex] = a[this.vertexIndex].add(f);
    }

  }
}
