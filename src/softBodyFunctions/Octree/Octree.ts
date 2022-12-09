import * as THREE from "three";

export const particleInBox = (
  particlePos: number[], //x,y,z
  boxCentre: number[], //x,y,z
  boxDimensions: number[] //w,h,d (x,y,z)
): boolean => {
  const insideX =
    particlePos[0] <= boxCentre[0] + boxDimensions[0] / 2 &&
    particlePos[0] >= boxCentre[0] - boxDimensions[0] / 2;
  if (!insideX) {
    return false;
  }

  const insideY =
    particlePos[1] <= boxCentre[1] + boxDimensions[1] / 2 &&
    particlePos[1] >= boxCentre[1] - boxDimensions[1] / 2;
  if (!insideY) {
    return false;
  }

  const insideZ =
    particlePos[2] <= boxCentre[2] + boxDimensions[2] / 2 &&
    particlePos[2] >= boxCentre[2] - boxDimensions[2] / 2;
  if (!insideZ) {
    return false;
  }

  return true;
};

export class Octree {
  centre: number[];
  dimensions: number[];
  maxParticleCount: number;
  particles: number[];
  scene: THREE.Scene;
  frame: THREE.LineSegments;
  isDivided: boolean;

  frontNE?: Octree;
  frontSE?: Octree;
  frontSW?: Octree;
  frontNW?: Octree;

  backNE?: Octree;
  backSE?: Octree;
  backSW?: Octree;
  backNW?: Octree;

  constructor(
    centre: number[],
    dimensions: number[],
    maxParticleCount: number,
    scene: THREE.Scene
  ) {
    this.centre = centre;
    this.dimensions = dimensions;

    this.maxParticleCount = maxParticleCount;

    this.particles = [];

    this.scene = scene;

    this.isDivided = false;

    const frameGeo = new THREE.EdgesGeometry(
      new THREE.BoxGeometry(dimensions[0], dimensions[1], dimensions[2])
    );

    this.frame = new THREE.LineSegments(
      frameGeo,
      new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 1 })
    );

    this.frame.position.set(centre[0], centre[1], centre[2]);

    this.scene.add(this.frame);
  }

  divide() {
    const subDimensions: number[] = [
      this.dimensions[0] / 2,
      this.dimensions[1] / 2,
      this.dimensions[2] / 2,
    ];

    const eastX = this.centre[0] + this.dimensions[0] / 4;
    const westX = this.centre[0] - this.dimensions[0] / 4;

    const northY = this.centre[1] + this.dimensions[1] / 4;
    const southY = this.centre[1] - this.dimensions[1] / 4;

    const frontZ = this.centre[2] + this.dimensions[2] / 4;
    const backZ = this.centre[2] - this.dimensions[2] / 4;

    this.frontNE = new Octree(
      [eastX, northY, frontZ],
      subDimensions,
      this.maxParticleCount,
      this.scene
    );
    this.frontSE = new Octree(
      [eastX, southY, frontZ],
      subDimensions,
      this.maxParticleCount,
      this.scene
    );
    this.frontSW = new Octree(
      [westX, southY, frontZ],
      subDimensions,
      this.maxParticleCount,
      this.scene
    );
    this.frontNW = new Octree(
      [westX, northY, frontZ],
      subDimensions,
      this.maxParticleCount,
      this.scene
    );
    this.backNE = new Octree(
      [eastX, northY, backZ],
      subDimensions,
      this.maxParticleCount,
      this.scene
    );
    this.backSE = new Octree(
      [eastX, southY, backZ],
      subDimensions,
      this.maxParticleCount,
      this.scene
    );
    this.backSW = new Octree(
      [westX, southY, backZ],
      subDimensions,
      this.maxParticleCount,
      this.scene
    );
    this.backNW = new Octree(
      [westX, northY, backZ],
      subDimensions,
      this.maxParticleCount,
      this.scene
    );

    this.isDivided = true;
  }

  insert(x: number, y: number, z: number) {
    if (!particleInBox([x, y, z], this.centre, this.dimensions)) {
      return;
    }

    if (this.particles.length / 3 >= this.maxParticleCount) {
      if (!this.isDivided) {
        this.divide();
      }
      this.frontNE!.insert(x, y, z);
      this.frontSE!.insert(x, y, z);
      this.frontSW!.insert(x, y, z);
      this.frontNW!.insert(x, y, z);

      this.backNE!.insert(x, y, z);
      this.backSE!.insert(x, y, z);
      this.backSW!.insert(x, y, z);
      this.backNW!.insert(x, y, z);
    } else {
      this.particles.push(x);
      this.particles.push(y);
      this.particles.push(z);
    }
  }
}
