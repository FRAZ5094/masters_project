import assert from "assert";
import  * as as  from "../build/debug.js";

//a couple more tests here
assert.deepEqual(as.vectorAdd([1,1,1],[1,1,1]), [2,2,2]);

assert.deepEqual(as.vectorSub([1,1,1],[1,1,1]), [0,0,0]);

assert.equal(as.getVectorMag([1,0,0]), 1);
assert.equal(as.getVectorMag([1.02,2.5,0.54]), 2.7535431719876846);
assert.equal(as.getVectorMag([0,0,0]), 0);

assert.deepEqual(as.getNormalizedVector([5.54, 4.2, 2]), [0.7658218586499821,0.580586968651611,0.2764699850721957]);
assert.deepEqual(as.getNormalizedVector([1, 0, 0]), [1,0,0]);

assert.deepEqual(as.getNormalizedVector([1, 0, 0]), [1,0,0]);

assert.deepEqual(as.setVectorMag([1,1,1],1), [0.5773502691896258,0.5773502691896258,0.5773502691896258]);
assert.deepEqual(as.setVectorMag([1,0,0],5), [5,0,0]);
assert.deepEqual(as.setVectorMag([0,1,0],3), [0,3,0]);

assert.deepEqual(as.getVectorMag(as.calculateSpringForce([12,6,2], [9,-8,2], 23.5, 11)), 77.9687949869943);

console.log("ALL TESTS PASS");

