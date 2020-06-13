// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker{(length, width, height) {
	this.cuboidlength = length;
	this.width = width;
	this.height = height;
}}

CuboidMaker.prototype.volume = function () {
	return this.cuboidlength * this.width * this.height;
};

CuboidMaker.prototype.surfaceArea = function () {
	return (
		2 *
		(this.cuboidlength * this.width + this.cuboidlength * this.height + this.width * this.height)
	);
};

function Cuboid() {
	CuboidMaker.call(this);
	this.cuboidlength = 4;
	this.width = 5;
	this.height = 5;
}

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.
// Find out the formulas for volume and surface area for cubes and create those methods using the
// dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
